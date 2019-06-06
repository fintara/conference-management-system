package com.itpiwo.cms.papers

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmitionRequest
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import javax.validation.Valid

@RestController
@RequestMapping("/papers")
class PapersController (
  private val service: PapersService
) {

  @PostMapping
  fun save(@Valid @RequestBody request: PaperSubmitionRequest): Mono<PaperInfo>
    = service.createPaper(request)

  @GetMapping(params = ["email"])
  fun getAuthorsPapers(@RequestParam("email", required = true) email: String): Flux<PaperInfo>
    = service.getUsersPapers(email)

  @GetMapping
  fun getAll(): Flux<PaperInfo>
    = service.getAllPapers()

}
