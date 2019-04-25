import { Reviewer } from "common/models"
import React, { FunctionComponent } from "react"
import "./ReviewerRow.scss"

type Props = {
  id: number
  reviewer: Reviewer
}

const ReviewerRow: FunctionComponent<Props> = ({ id, reviewer }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{reviewer.firstName}</td>
      <td>{reviewer.lastName}</td>
      <td>{reviewer.university}</td>
      <td>{reviewer.keyWords.map((word, i) => <span key={i} className="label">{word}</span>)}</td>
      <td><input type="checkbox" className="checkbox"/></td>
    </tr>
  )
}

export default ReviewerRow
