import {Degree, PaperInfo, Reviewer} from "common/models"
import React, {FunctionComponent} from "react"
import PaperInfoCard from "./PaperInfo/PaperInfoCard"
import "./ReviewersSelection.scss"
import ReviewerTable from "./ReviewerTable/ReviewerTable"

const reviewers: Array<{match: number, reviewer: Reviewer}> = [
  {match: 100, reviewer: {firstName: "Ivan", lastName: "Pavlov", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER}},
  {match: 100, reviewer: {firstName: "John", lastName: "Snow", keyWords: ["data", "science", "AI", "machine learning"], university: "MIT", degree: Degree.MASTER}},
  {match: 75, reviewer: {firstName: "John", lastName: "Doe", keyWords: ["data", "science", "AI"], university: "MIT", degree: Degree.MASTER}},
  {match: 75, reviewer: {firstName: "Peter", lastName: "Smith", keyWords: ["data", "science", "AI"], university: "MIT", degree: Degree.MASTER}},
  {match: 75, reviewer: {firstName: "Michael", lastName: "Bay", keyWords: ["data", "science", "AI"], university: "MIT", degree: Degree.MASTER}},
  {match: 50, reviewer: {firstName: "James", lastName: "Nelson", keyWords: ["data", "science"], university: "MIT", degree: Degree.MASTER}},
  {match: 50, reviewer: {firstName: "John", lastName: "Smith", keyWords: ["data", "science"], university: "MIT", degree: Degree.MASTER}},
]

const info: PaperInfo = {
  abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  authors: ["John Smith", "Jane Doe"],
  keywords: ["data", "science", "AI", "machine learning"],
  title: "Machine learning in automated text categorization",
}

const ReviewersSelection: FunctionComponent = () => {
  return (
    <div className="container">
      <h2>Select Reviewers</h2>
      <div className="clr-row">
        <div className="clr-col-6">
          <PaperInfoCard info={info}/>
        </div>
      </div>
      <div className="clr-row">
        <div className="clr-col-12">
          <ReviewerTable reviewers={reviewers}/>
        </div>
      </div>
      <div className="clr-row">
        <div className="clr-col clr-align-self-start">
          <button className="btn btn-outline">Assign Selected</button>
        </div>
      </div>
    </div>
  )
}

export default ReviewersSelection
