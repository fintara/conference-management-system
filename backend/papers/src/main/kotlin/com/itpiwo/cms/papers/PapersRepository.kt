package com.itpiwo.cms.papers

import com.itpiwo.cms.papers.domain.Paper
import org.springframework.stereotype.Repository
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface PapersRepository {
  fun save(paper: Paper): Mono<Paper>
  fun findAll(): Flux<Paper>
  fun findById(id: String): Mono<Paper>
  fun findByAuthorEmail(authorEmail: String): Flux<Paper>
  fun deleteAll(): Mono<Unit>
  fun deleteById(id: String): Mono<Paper>
}

@Repository
class PapersRepositoryImpl: PapersRepository {
  private val data = mutableMapOf<String, Paper>()

  override fun save(paper: Paper): Mono<Paper>
    = Mono.just(paper).doOnNext { data[it.id] = it }

  override fun findById(id: String): Mono<Paper>
    = Mono.justOrEmpty(data[id])

  override fun findByAuthorEmail(authorEmail: String): Flux<Paper>
    = Flux.fromIterable(data.filterValues { it.authors.contains(authorEmail)}.values)

  override fun findAll(): Flux<Paper>
    = Flux.fromIterable(data.values)

  override fun deleteById(id: String): Mono<Paper>
    = Mono.justOrEmpty(data.remove(id))

  override fun deleteAll(): Mono<Unit>
    = Mono.just(Unit).doOnNext { data.clear() }
}
