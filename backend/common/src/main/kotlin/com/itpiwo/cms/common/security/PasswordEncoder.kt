package com.itpiwo.cms.common.security

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
interface PasswordEncoder {
    fun encode(value: String): String
    fun verify(value: String, encoded: String): Boolean
}

class PasswordEncoderImpl : PasswordEncoder {
    override fun encode(value: String): String {
        return value.flatMap(::char).joinToString("")
    }

    override fun verify(value: String, encoded: String): Boolean {
        return encode(value) == encoded
    }

    private fun char(ch: Char) = setOf('$', ch, '#')
}