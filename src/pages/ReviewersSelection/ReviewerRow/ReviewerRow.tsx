import React, {FunctionComponent} from "react"
import {Reviewer} from "../Reviewer";
import "./ReviewerRow.scss"

type Props = {
  index: number
  reviewer: Reviewer
}
const ReviewerRow: FunctionComponent<Props> = ({index, reviewer}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{reviewer.firstName}</td>
      <td>{reviewer.lastName}</td>
      <td>{reviewer.university}</td>
      <td>{reviewer.keyWords.map(word => <span className="label">{word}</span>)}</td>
      <td><input type="checkbox" className="checkbox"/></td>
    </tr>
  )
};

export default ReviewerRow
