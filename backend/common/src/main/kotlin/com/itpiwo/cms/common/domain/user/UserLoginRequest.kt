package com.itpiwo.cms.common.domain.user

import org.hibernate.validator.constraints.Length
import javax.validation.constraints.Email

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
data class UserLoginRequest (
    @field:Email
    val email: String,

    @field:Length(min = 6)
    val password: String
)
