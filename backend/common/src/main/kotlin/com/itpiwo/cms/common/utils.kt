package com.itpiwo.cms.common

/**
 * Created by Tsvetan Ovedenski on 01/06/19.
 */
inline fun <T> bool(
    value: Boolean,
    crossinline ifTrue: () -> T,
    crossinline ifFalse: () -> T
): T = if (value) ifTrue() else ifFalse()