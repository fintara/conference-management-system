package com.itpiwo.cms.users

import com.itpiwo.cms.common.domain.user.UserInfo
import com.itpiwo.cms.common.domain.user.UserLoginRequest
import com.itpiwo.cms.common.domain.user.UserRegistrationRequest
import com.itpiwo.cms.users.domain.toUserInfo
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Mono
import javax.validation.Valid

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
@RestController
class UsersController (
    private val service: UserService
) {

    @PostMapping("/register")
    fun register(@Valid @RequestBody request: UserRegistrationRequest): Mono<UserInfo> {
        return service.createUser(request).map { it.toUserInfo() }
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody request: UserLoginRequest): Mono<UserInfo> {
        return service.tryLogin(request).map { it.toUserInfo() }
    }

    @GetMapping("/search", params = ["email"])
    fun findByEmail(@RequestParam email: String): Mono<UserInfo> {
        return service.findByEmail(email).map { it.toUserInfo() }
    }
}
