package com.itpiwo.cms.gateway

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmissionRequest
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.BodyInserters
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

/**
 * Created by Tsvetan Ovedenski on 29/05/19.
 */
@Service
class PapersService(
  @Qualifier("papersServiceURL")
  private val papersServiceURL: String
) {
  private val web = WebClient.create(papersServiceURL)
  private val url = "/papers"

  fun findAll(): Flux<PaperInfo> = web
    .get()
    .uri(url)
    .retrieve()
    .bodyToFlux(PaperInfo::class.java)

  fun createPaper(request: PaperSubmissionRequest, email: String): Mono<PaperInfo> = web
    .post()
    .uri(url)
    .body(BodyInserters.fromObject(request))
    .header("CMS-Auth", email)
    .retrieve()
    .bodyToMono(PaperInfo::class.java)


  fun findAuthorsPapers(email: String): Flux<PaperInfo> = web
    .get()
    .uri {
      it.path(url)
        .queryParam("email", email)
        .build()
    }
    .retrieve()
    .bodyToFlux(PaperInfo::class.java)
}
