package com.itpiwo.cms.users

import com.itpiwo.cms.common.bool
import com.itpiwo.cms.common.domain.user.UserInfo
import com.itpiwo.cms.common.domain.user.UserLoginRequest
import com.itpiwo.cms.common.domain.user.UserRegistrationRequest
import com.itpiwo.cms.common.security.PasswordEncoder
import com.itpiwo.cms.users.domain.User
import com.itpiwo.cms.users.domain.toUser
import com.itpiwo.cms.users.exceptions.AuthenticationException
import com.itpiwo.cms.users.exceptions.RegistrationException
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
@Service
class UserService (
    private val repository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {

    fun createUser(data: UserRegistrationRequest): Mono<User> = repository
        .findByEmail(data.email)
        .flatMap { Mono.error<User>(RegistrationException.existingEmail(it.email)) }
        .switchIfEmpty(
            repository
                .save(data.toUser(passwordEncoder::encode))
                .doOnNext { /* notify user by email, etc. */ }
        )

    fun tryLogin(data: UserLoginRequest): Mono<User> = repository
        .findByEmail(data.email)
        .flatMap { bool(passwordEncoder.verify(data.password, it.password),
            { Mono.just(it) },
            { Mono.error(AuthenticationException.wrongPassword()) }
        ) }
        .switchIfEmpty(Mono.error(AuthenticationException.emailNotFound()))

    fun findByEmail(email: String): Mono<User> = repository
        .findByEmail(email)

}
