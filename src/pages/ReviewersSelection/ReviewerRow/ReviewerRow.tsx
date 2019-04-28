import { Reviewer } from "common/models"
import React, { FunctionComponent } from "react"
import "./ReviewerRow.scss"

type Props = {
  id: number
  reviewer: Reviewer
  match: "Poor" | "Good" | "Perfect"
}

function matchToColor(match: "Poor" | "Good" | "Perfect"): string {
  return match.toLowerCase()
}

const ReviewerRow: FunctionComponent<Props> = ({ id, reviewer, match }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{reviewer.firstName}</td>
      <td>{reviewer.lastName}</td>
      <td>{reviewer.university}</td>
      <td>{reviewer.keyWords.map((word, i) => <span key={i} className="label">{word}</span>)}</td>
      <td className={matchToColor(match)}><b>{match}</b></td>
      <td><input type="checkbox" className="checkbox"/></td>
    </tr>
  )
}

export default ReviewerRow
