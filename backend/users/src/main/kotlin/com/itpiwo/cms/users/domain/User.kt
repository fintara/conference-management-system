package com.itpiwo.cms.users.domain

import com.itpiwo.cms.common.domain.UserInfo
import com.itpiwo.cms.common.domain.UserRegistrationRequest
import java.util.*

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
data class User (
    val id: String = UUID.randomUUID().toString(),
    val firstName: String,
    val lastName: String,
    val email: String,
    val password: String,
    val phone: String? = null,
    val university: String? = null
)

fun UserRegistrationRequest.toUser(passwordEncoder: (String) -> String) = User(
    firstName = firstName,
    lastName = lastName,
    email = email,
    password = passwordEncoder(password),
    phone = phone,
    university = university
)

fun User.toUserInfo() = UserInfo(
    id,
    email,
    firstName,
    lastName
)