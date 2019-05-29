package com.itpiwo.cms.gateway

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class GatewayApplication {
	@Bean(name = ["papersServiceURL"])
	fun papersServiceURL(): String = System.getProperty("papers.address") ?: "http://localhost:8082"

	@Bean(name = ["usersServiceURL"])
	fun usersServiceURL(): String = System.getProperty("users.address") ?: "http://localhost:8084"
}

fun main(args: Array<String>) {
	runApplication<GatewayApplication>(*args)
}
