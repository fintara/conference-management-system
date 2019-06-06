package com.itpiwo.cms.gateway

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmissionRequest
import com.itpiwo.cms.common.domain.user.UserInfo
import com.itpiwo.cms.common.domain.user.UserLoginRequest
import com.itpiwo.cms.common.domain.user.UserRegistrationRequest
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
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
  fun getPapers(): Flux<PaperInfo>
    = papersService.findAll()

  @PostMapping("/papers")
  fun createPaper(@Valid @RequestBody request: PaperSubmissionRequest): Mono<PaperInfo>
    = papersService.createPaper(request)

  @GetMapping("/papers", params = ["email"])
  fun getAuthorsPapers(@RequestParam("email", required = true) email: String): Flux<PaperInfo>
    = papersService.findAuthorsPapers(email)

  @PostMapping("/users/register")
  fun registerUser(@Valid @RequestBody request: UserRegistrationRequest): Mono<UserInfo>
    = usersService.createUser(request)

  @PostMapping("/users/login")
  fun loginUser(@Valid @RequestBody request: UserLoginRequest): Mono<UserInfo>
    = usersService.login(request)
}
