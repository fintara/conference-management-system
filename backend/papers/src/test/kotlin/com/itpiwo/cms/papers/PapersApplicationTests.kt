package com.itpiwo.cms.papers

import com.itpiwo.cms.common.domain.paper.PaperSubmissionRequest
import com.itpiwo.cms.papers.domain.Paper
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.test.web.reactive.server.returnResult
import org.springframework.web.reactive.function.BodyInserters
import reactor.test.StepVerifier

@SpringBootTest
@AutoConfigureWebTestClient
class PapersApplicationTests {

	@Autowired
	lateinit var web: WebTestClient

	@Autowired
	lateinit var repository: PapersRepository

	@BeforeEach
	fun setup() {
		repository.deleteAll().block()
	}

	@Test
	fun `unauthorized user cannot submit paper`() {
		val data = createRequest()

		web.submitRequest(data)
			.expectStatus().is4xxClientError
	}

	@Test
	fun `authorized user can submit paper`() {
		val data = createRequest()
		val email = "current@user.com"

		web.submitRequest(data, email)
			.expectStatus().is2xxSuccessful
			.expectBody()
			.jsonPath("$.title").isEqualTo(data.title)
			.jsonPath("$.id").exists()
	}

	@Test
	fun `current user is added to authors`() {
		val data = createRequest()
		val email = "current@user.com"

		web.submitRequest(data, email)
			.expectStatus().is2xxSuccessful
			.returnResult<Unit>().responseBody.blockFirst()

		StepVerifier.create(repository.findByAuthorEmail(email))
			.expectNextMatches { email in it.authors }
			.verifyComplete()
	}

	@Test
	fun `keywords are saved distinctly`() {
		val data = createRequest(
			keywords = listOf("aaa", "bbb", "ccc", "bbb")
		)
		val email = "current@user.com"

		web.submitRequest(data, email)
			.expectStatus().is2xxSuccessful
			.returnResult<Unit>()
			.responseBody.blockFirst()

		val keywordsSize: (Int) -> (Paper) -> Boolean = { size -> { it.keywords.size == size } }
		val keywordExists: (String) -> (Paper) -> Boolean = { keyword -> { keyword in it.keywords } }

		StepVerifier.create(repository.findByAuthorEmail(email))
			.expectNextMatches(keywordsSize(3) and keywordExists("aaa") and keywordExists("bbb") and keywordExists("ccc"))
			.verifyComplete()
	}

	private fun WebTestClient.submitRequest(data: PaperSubmissionRequest, email: String? = null): WebTestClient.ResponseSpec {
		var request = web.post()
				.uri("/papers")
				.body(BodyInserters.fromObject(data))

		if (email != null) {
			request = request.header("CMS-Auth", email)
		}

		return request.exchange()
	}

	private fun createRequest(
		title: String = "Title",
		abstract: String = "Long abstract",
		authors: List<String> = listOf(),
		keywords: List<String> = listOf()
	) = PaperSubmissionRequest(title, abstract, authors.toMutableList(), keywords.toMutableList())

	private infix fun <T> ((T) -> Boolean).and(other: (T) -> Boolean): (T) -> Boolean = {
		this(it) && other(it)
	}
}
