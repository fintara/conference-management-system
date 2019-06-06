package com.itpiwo.cms.papers

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.RestController


@SpringBootApplication
class PapersApplication

fun main(args: Array<String>) {
	runApplication<PapersApplication>(*args)
}
