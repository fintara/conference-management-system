package com.itpiwo.cms.users

import com.itpiwo.cms.common.bool
import com.itpiwo.cms.common.domain.UserLoginRequest
import com.itpiwo.cms.common.domain.UserRegistrationRequest
import com.itpiwo.cms.common.security.PasswordEncoder
import com.itpiwo.cms.users.domain.User
import com.itpiwo.cms.users.domain.toUser
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
        .save(data.toUser(passwordEncoder::encode))
        .doOnNext { /* notify user by email, etc. */ }

    fun tryLogin(data: UserLoginRequest): Mono<User> = repository
        .findByEmail(data.email)
        .flatMap { bool(passwordEncoder.verify(data.password, it.password),
            { Mono.just(it) },
            { Mono.error(AuthenticationException.wrongPassword()) }
        ) }
        .switchIfEmpty(Mono.error(AuthenticationException.emailNotFound()))

}

class AuthenticationException private constructor(message: String) : RuntimeException(message) {
    companion object {
        fun wrongPassword() = AuthenticationException("Wrong password")
        fun emailNotFound() = AuthenticationException("Email not found")
    }
}