import { Reviewer } from "common/models"
import React, { FunctionComponent } from "react"
import ReviewerRow from "../ReviewerRow/ReviewerRow"
import "./ReviewerTable.scss"

type Props = {
  reviewers: Array<{match: number, reviewer: Reviewer}>
}

const ReviewerTable: FunctionComponent<Props> = ({ reviewers }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>University</th>
          <th>Keywords</th>
          <th>Match</th>
          <th><input type="checkbox" className="checkbox"/></th>
        </tr>
      </thead>
      <tbody>
        {reviewers.map((pair, index) =>
          <ReviewerRow key={index} id={index} reviewer={pair.reviewer} match={pair.match}/>)}
      </tbody>

    </table>
  )
}

export default ReviewerTable
