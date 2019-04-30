import React, { FunctionComponent } from "react"
import "./PaperManagement.scss"

interface PaperHistory {
  author: string
  type: string
  createdAt: Date
}
const history: PaperHistory[] = [
  { author: "John Doe", type: "published the paper", createdAt: new Date(1556460101000) },
  { author: "John Doe", type: "uploaded new version", createdAt: new Date(1556460101000-250000000) },
  { author: "Jane Doe", type: "uploaded new version", createdAt: new Date(1556460101000-500000000) },
]

const PaperManagement: FunctionComponent = () => {
  const renderHistoryRow = (h: PaperHistory, i: number) => (
    <div className="history-entry" key={i}>
      <div className="description">
        {h.author} {h.type}.
      </div>
      <div className="date">
        {h.createdAt.toLocaleDateString()} at {h.createdAt.toLocaleTimeString()}
      </div>
      <div className="action">
      {h.type === "uploaded new version" ? (
        <button className="btn btn-sm btn-info">See file</button>
      ) : null}
      </div>
    </div>
  )

  return (
    <div className="clr-row">
      <div className="clr-col-9">
        <h3 className="title">How to make ad-hoc polymorphism less ad hoc</h3>
        <h6 className="subtitle">John Doe, Jane Doe</h6>

        {history.map(renderHistoryRow)}
      </div>
      <div className="clr-col-3">
        <div className="card">
          <div className="card-header">Manage</div>
          <div className="card-block paper-actions">
            <button className="btn btn-primary btn-link btn-block">See latest version</button>
            <button className="btn btn-primary btn-link btn-block">Edit information</button>
            <button className="btn btn-primary btn-link btn-block">Upload new version</button>
            <button className="btn btn-primary btn-block">Publish paper</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaperManagement
