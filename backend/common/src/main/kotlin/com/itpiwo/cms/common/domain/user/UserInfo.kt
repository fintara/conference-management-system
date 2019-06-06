package com.itpiwo.cms.common.domain.user

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
data class UserInfo (
    val id: String,
    val email: String,
    val firstName: String,
    val lastName: String
) {
    val name: String get() = "$firstName $lastName"
}

val UserInfo.displayName get() = if (firstName.isNotBlank()) name else email
