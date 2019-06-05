package com.itpiwo.cms.users.exceptions

/**
 * Created by Tsvetan Ovedenski on 2019-06-05.
 */
class RegistrationException private constructor(message: String) : RuntimeException(message) {
    companion object {
        fun existingEmail(email: String) = RegistrationException("Email $email exists")
    }
}