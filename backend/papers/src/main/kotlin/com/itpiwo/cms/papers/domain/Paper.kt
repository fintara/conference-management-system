package com.itpiwo.cms.papers.domain

import com.itpiwo.cms.common.domain.paper.PaperInfo
import com.itpiwo.cms.common.domain.paper.PaperSubmissionRequest
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.*

data class Paper (
  val id: String = UUID.randomUUID().toString(),
  val title: String,
  val abstract: String,
  val keywords: List<String> = mutableListOf(),
  val authors: List<String> = mutableListOf(),
  val createdAt: LocalDateTime = LocalDateTime.now()
)

fun PaperSubmissionRequest.toPaper() = Paper(
  title = title,
  abstract = abstract,
  keywords = keywords,
  authors = authors
)

fun Paper.toPaperInfo() = PaperInfo(
  id,
  title,
  abstract,
  createdAt.format(DateTimeFormatter.BASIC_ISO_DATE),
  keywords,
  authors
)
