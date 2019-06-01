package com.itpiwo.cms.gateway

import com.itpiwo.cms.common.domain.UserInfo
import com.itpiwo.cms.common.domain.UserLoginRequest
import com.itpiwo.cms.common.domain.UserRegistrationRequest
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Mono
import javax.validation.Valid

/**
 * Created by Tsvetan Ovedenski on 29/05/19.
 */
@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
class GatewayController (
    private val papersService: PapersService,
    private val usersService: UsersService
) {

    @GetMapping("/papers")
    fun getPapers() = papersService.findAll()

    @PostMapping("/users/register")
    fun registerUser(@Valid @RequestBody request: UserRegistrationRequest): Mono<UserInfo>
            = usersService.createUser(request)

    @PostMapping("/users/login")
    fun loginUser(@Valid @RequestBody request: UserLoginRequest): Mono<UserInfo>
            = usersService.login(request)
}