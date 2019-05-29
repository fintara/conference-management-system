package com.itpiwo.cms.papers

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux

@SpringBootApplication
@RestController
class PapersApplication {
	@GetMapping("/papers")
	fun getAll() = Flux.just("Paper 1", "Paper 2", "Paper 3")
}

fun main(args: Array<String>) {
	runApplication<PapersApplication>(*args)
}
