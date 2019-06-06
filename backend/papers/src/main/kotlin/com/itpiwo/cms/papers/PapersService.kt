package com.itpiwo.cms.papers

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmissionRequest
import com.itpiwo.cms.papers.domain.toPaper
import com.itpiwo.cms.papers.domain.toPaperInfo
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class PapersService (
  private val repository: PapersRepository
) {

  fun createPaper(data: PaperSubmissionRequest): Mono<PaperInfo> = repository
        .save(data.toPaper()).map { it.toPaperInfo() }

  fun getUsersPapers(email: String): Flux<PaperInfo> = repository
    .findByAuthorEmail(email).map { it.toPaperInfo() }

  fun getAllPapers(): Flux<PaperInfo> = repository
    .findAll().map { it.toPaperInfo() }

}
