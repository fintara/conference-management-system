package com.itpiwo.cms.gateway

import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux

/**
 * Created by Tsvetan Ovedenski on 29/05/19.
 */
@Service
class PapersService (
    @Qualifier("papersServiceURL")
    private val papersServiceURL: String
) {
    private val web = WebClient.create(papersServiceURL)

    fun findAll(): Flux<String> = web
            .get()
            .uri("/papers")
            .retrieve()
            .bodyToFlux(String::class.java)
}