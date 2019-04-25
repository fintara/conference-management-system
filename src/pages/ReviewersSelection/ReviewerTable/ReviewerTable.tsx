import React, {FunctionComponent} from "react"
import {Reviewer} from "../Reviewer";
import "./ReviewerTable.scss"
import ReviewerRow from "../ReviewerRow/ReviewerRow";

type Props = {
  reviewers: Reviewer[]
}
const ReviewerTable: FunctionComponent<Props> = ({reviewers}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>University</th>
          <th>Keywords</th>
          <th><input type="checkbox" className="checkbox"/></th>
        </tr>
      </thead>

      {reviewers.map((reviewer, index) => <ReviewerRow index={index} reviewer={reviewer}/>)}

    </table>
  )
};

export default ReviewerTable
