package com.itpiwo.cms.common.domain.paper

data class PaperInfo (
  val id: String,
  val title: String,
  val abstract: String,
  val createdAt: String,
  val authors: List<String> = mutableListOf(),
  val keywords: List<String> = mutableListOf()
)
