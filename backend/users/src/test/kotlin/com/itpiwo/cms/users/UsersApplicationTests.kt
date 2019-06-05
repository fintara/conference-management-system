package com.itpiwo.cms.users

import com.itpiwo.cms.common.domain.UserLoginRequest
import com.itpiwo.cms.common.domain.UserRegistrationRequest
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebFlux
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.web.reactive.function.BodyInserters

@SpringBootTest
@AutoConfigureWebTestClient
class UsersApplicationTests {

	@Autowired
	lateinit var web: WebTestClient

	@Autowired
	lateinit var userRepository: UserRepository

	@BeforeEach
	fun setup() {
		userRepository.deleteAll().block()
	}

	@Test
	fun `nonexisting user cannot log in`() {
		val data = UserLoginRequest("test@gmail.com", "123456")

		web
			.post()
			.uri("/login")
			.body(BodyInserters.fromObject(data))
			.exchange()
			.expectStatus().is5xxServerError
	}

	@Test
	fun `user can log in after registration`() {
		val registration = UserRegistrationRequest(
			email = "test@gmail.com",
			password = "123456789",
			firstName = "Test",
			lastName = "Junitov",
			dob = "2000/01/01 23:59:59",
			phone = "",
			university = ""
		)

		web.post()
			.uri("/register")
			.body(BodyInserters.fromObject(registration))
			.exchange()
			.expectStatus().is2xxSuccessful

		val login = UserLoginRequest(registration.email, registration.password)

		web.post()
			.uri("/login")
			.body(BodyInserters.fromObject(login))
			.exchange()
			.expectStatus().is2xxSuccessful
			.expectBody()
			.jsonPath("$.email").isEqualTo(login.email)
	}

	@Test
	fun `user cannot register with password length lt 6`() {
		val registration = UserRegistrationRequest(
			email = "test@gmail.com",
			password = "123",
			firstName = "Test",
			lastName = "Junitov",
			dob = "2000/01/01 23:59:59",
			phone = "",
			university = ""
		)

		web.post()
			.uri("/register")
			.body(BodyInserters.fromObject(registration))
			.exchange()
			.expectStatus().is4xxClientError
	}

	@Test
	fun `user cannot register with invalid email`() {
		val registration = UserRegistrationRequest(
			email = "testgmail.com",
			password = "1234567890",
			firstName = "Test",
			lastName = "Junitov",
			dob = "2000/01/01 23:59:59",
			phone = "",
			university = ""
		)

		web.post()
			.uri("/register")
			.body(BodyInserters.fromObject(registration))
			.exchange()
			.expectStatus().is4xxClientError
	}

	@Test
	fun `user cannot register with existing email`() {
		val registration = UserRegistrationRequest(
			email = "test@gmail.com",
			password = "1234567890",
			firstName = "Test",
			lastName = "Junitov",
			dob = "2000/01/01 23:59:59",
			phone = "",
			university = ""
		)

		web.post()
			.uri("/register")
			.body(BodyInserters.fromObject(registration))
			.exchange()
			.expectStatus().is2xxSuccessful

		web.post()
			.uri("/register")
			.body(BodyInserters.fromObject(registration))
			.exchange()
			.expectStatus().is5xxServerError
	}
}
