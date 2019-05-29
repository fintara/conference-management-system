package com.itpiwo.cms.gateway

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by Tsvetan Ovedenski on 29/05/19.
 */
@RestController
class GatewayController (
    private val papersService: PapersService
) {

    @GetMapping("/papers")
    fun getPapers() = papersService.findAll()

}