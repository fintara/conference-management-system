import React, { FunctionComponent } from "react"
import { PaperInfo } from "../../../common/models"
import "./PaperInfoCard.scss"

type Props = {
  info: PaperInfo;
}

const PaperInfoCard: FunctionComponent<Props> = ({info}) => {
  return (
    <div className="card">
      <div className="card-block">
        <div className="card-title">
          {info.title}
        </div>
        <div className="card-text">
              <b>Authors:{" "}</b> {info.authors.join(", ")}
              <p/>
              {info.keywords.map((word, i) => <span key={i} className="label">{word}</span>)}
          </div>
        </div>
      </div>
  )
}

export default PaperInfoCard
