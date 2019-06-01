package com.itpiwo.cms.users

import com.itpiwo.cms.common.security.PasswordEncoder
import com.itpiwo.cms.common.security.PasswordEncoderImpl
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class UsersApplication {
	@Bean
	fun passwordEncoder(): PasswordEncoder = PasswordEncoderImpl()
}

fun main(args: Array<String>) {
	runApplication<UsersApplication>(*args)
}
