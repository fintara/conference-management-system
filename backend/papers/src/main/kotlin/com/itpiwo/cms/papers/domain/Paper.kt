package com.itpiwo.cms.papers.domain

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmitionRequest
import java.util.*

data class Paper (
  val id: String = UUID.randomUUID().toString(),
  val title: String,
  val abstract: String,
  val keywords: List<String> = mutableListOf(),
  val authors: List<String> = mutableListOf()
)

fun PaperSubmitionRequest.toPaper() = Paper(
  title = title,
  abstract = abstract,
  keywords = keywords,
  authors = authors
)

fun Paper.toPaperInfo() = PaperInfo(
  id,
  title,
  abstract,
  keywords,
  authors
)
