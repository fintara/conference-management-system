package com.itpiwo.cms.common.domain.user

import org.hibernate.validator.constraints.Length
import javax.validation.constraints.Email
import javax.validation.constraints.Min
import javax.validation.constraints.NotBlank

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
data class UserRegistrationRequest (
    @field:NotBlank
    val firstName: String,

    @field:NotBlank
    val lastName: String,

    val dob: String,

    @field:NotBlank
    @field:Email
    val email: String,

    @field:NotBlank
    @field:Length(min = 6)
    val password: String,

    val phone: String,

    val university: String
)
