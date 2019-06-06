package com.itpiwo.cms.common.domain.paper

import org.hibernate.validator.constraints.Length
import javax.validation.constraints.NotBlank

data class PaperSubmitionRequest (

  @field:NotBlank
  @field:Length(max = 255)
  val title: String,


  @field:NotBlank
  @field:Length(max = 1000)
  val abstract: String,

  val authors: List<String> = mutableListOf(),

  val keywords: List<String> = mutableListOf()
)
