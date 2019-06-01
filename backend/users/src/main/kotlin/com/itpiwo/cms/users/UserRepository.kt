package com.itpiwo.cms.users

import com.itpiwo.cms.users.domain.User
import org.springframework.stereotype.Component
import reactor.core.publisher.Mono
import reactor.core.publisher.Mono.*

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
interface UserRepository {
    fun save(user: User): Mono<User>
    fun findById(id: String): Mono<User>
    fun findByEmail(email: String): Mono<User>
}

@Component
class UserRepositoryImpl : UserRepository {
    private val data = mutableMapOf<String, User>()

    override fun save(user: User): Mono<User>
            = just(user).doOnNext { data[it.id] = it }

    override fun findById(id: String): Mono<User>
            = justOrEmpty(data[id])

    override fun findByEmail(email: String): Mono<User>
            = justOrEmpty(data.filterValues { it.email == email }.values.firstOrNull())

}