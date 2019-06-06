package com.itpiwo.cms.gateway

import com.itpiwo.cms.common.domain.user.UserInfo
import com.itpiwo.cms.common.domain.user.UserLoginRequest
import com.itpiwo.cms.common.domain.user.UserRegistrationRequest
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.BodyInserters
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

/**
 * Created by Tsvetan Ovedenski on 29/05/19.
 */
@Service
class UsersService (
    @Qualifier("usersServiceURL")
    private val usersServiceURL: String
) {
    private val web = WebClient.create(usersServiceURL)

    fun createUser(data: UserRegistrationRequest): Mono<UserInfo> = web
        .post()
        .uri("/register")
        .body(BodyInserters.fromObject(data))
        .retrieve()
        .bodyToMono(UserInfo::class.java)

    fun login(data: UserLoginRequest): Mono<UserInfo> = web
        .post()
        .uri("/login")
        .body(BodyInserters.fromObject(data))
        .retrieve()
        .bodyToMono(UserInfo::class.java)

    fun findByEmail(email: String): Mono<UserInfo> = web
        .get()
        .uri("/search?email=$email")
        .retrieve()
        .bodyToMono(UserInfo::class.java)
        .switchIfEmpty(Mono.just(UserInfo("", email, "", "")))
}
