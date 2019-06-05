package com.itpiwo.cms.users.exceptions

/**
 * Created by Tsvetan Ovedenski on 2019-06-05.
 */
class AuthenticationException private constructor(message: String) : RuntimeException(message) {
    companion object {
        fun wrongPassword() = AuthenticationException("Wrong password")
        fun emailNotFound() = AuthenticationException("Email not found")
    }
}