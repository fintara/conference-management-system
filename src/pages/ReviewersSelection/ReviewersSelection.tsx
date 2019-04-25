import { Degree, Reviewer } from "common/models"
import React, { FunctionComponent } from "react"
import "./ReviewersSelection.scss"
import ReviewerTable from "./ReviewerTable/ReviewerTable"

const reviewers: Reviewer[] = [
  {firstName: "Ivan", lastName: "Pavlov", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
  {firstName: "John", lastName: "Snow", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
  {firstName: "John", lastName: "Doe", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
  {firstName: "Peter", lastName: "Smith", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
  {firstName: "Michael", lastName: "Bay", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
  {firstName: "James", lastName: "Nelson", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
  {firstName: "John", lastName: "Smith", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER},
]

const ReviewersSelection: FunctionComponent = () => {
  return (
    <div className="container">
      <h2>Select Reviewers</h2>
      <ReviewerTable reviewers={reviewers}/>
    </div>
  )
}

export default ReviewersSelection
