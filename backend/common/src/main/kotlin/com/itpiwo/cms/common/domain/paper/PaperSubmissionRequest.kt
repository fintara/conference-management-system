package com.itpiwo.cms.common.domain.paper

import org.hibernate.validator.constraints.Length
import javax.validation.constraints.NotBlank

data class PaperSubmissionRequest (

  @field:NotBlank
  @field:Length(max = 255)
  val title: String,


  @field:NotBlank
  @field:Length(max = 1000)
  val abstract: String,

  val authors: MutableList<String> = mutableListOf(),

  val keywords: MutableList<String> = mutableListOf()
)
