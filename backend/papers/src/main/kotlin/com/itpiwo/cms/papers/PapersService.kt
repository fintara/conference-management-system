package com.itpiwo.cms.papers

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmissionRequest
import com.itpiwo.cms.papers.domain.toPaper
import com.itpiwo.cms.papers.domain.toPaperInfo
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service
import org.springframework.validation.BindingResult
import org.springframework.validation.BindingResultUtils
import org.springframework.validation.SmartValidator
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import javax.validation.Validator

@Service
class PapersService (
  private val repository: PapersRepository,
  private val validator: Validator
) {

  fun createPaper(data: PaperSubmissionRequest, email: String): Mono<PaperInfo> {
    if (validator.validate(data).isNotEmpty()) {
      throw RuntimeException("Data is invalid")
    }

    data.authors.add(email)

    val keywords = data.keywords.distinct()
    data.keywords.clear()
    data.keywords.addAll(keywords)

    val authors = data.authors.distinct()
    data.authors.clear()
    data.authors.addAll(authors)

    return repository.save(data.toPaper()).map { it.toPaperInfo() }
  }

  fun getUsersPapers(email: String): Flux<PaperInfo> = repository
    .findByAuthorEmail(email).map { it.toPaperInfo() }

  fun getAllPapers(): Flux<PaperInfo> = repository
    .findAll().map { it.toPaperInfo() }

}
