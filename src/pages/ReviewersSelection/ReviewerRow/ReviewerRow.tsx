import { Reviewer } from "common/models"
import React, { FunctionComponent } from "react"
import "./ReviewerRow.scss"

type Props = {
  id: number
  reviewer: Reviewer
  match: number
}

function matchToColor(match: number): string {
    if (match < 60) { return "poor" }
    if (match >= 60 && match <= 80) {return "good"}
    if (match > 80) { return "perfect" }
    return "poor"
}

const ReviewerRow: FunctionComponent<Props> = ({ id, reviewer, match }) => {
  return (
    <tr>
      <td><input type="checkbox" className="checkbox"/></td>
      <td className="left">{reviewer.firstName}</td>
      <td className="left">{reviewer.lastName}</td>
      <td className="left">{reviewer.university}</td>
      <td>{reviewer.keyWords.map((word, i) => <span key={i} className="label">{word}</span>)}</td>
      <td className={matchToColor(match)}><b>{match}{"%"}</b></td>
    </tr>
  )
}

export default ReviewerRow
