import React, { FunctionComponent, useState } from "react"

import "./PaperDetails.scss"

type Props = {
  role: "author" | "organizer"
}

const PaperDetails: FunctionComponent<Props> = ({role}) => {

  const abstract = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  const keywords = ["AI", "Machine Learning", "data", "neural networks"];

  const renderActions = () => {
    switch(role) {
      case "author": {
        return <div className="clr-row clr-justify-content-between">
        <div className="btn-group">
          <button className="btn btn-sm btn-outline">Edit</button>
          <button className="btn btn-sm btn-success-outline">Submit</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-sm btn-danger-outline">Delete</button>
        </div>
      </div>
      }
      case "organizer" : {
        return <button className="btn btn-sm btn-danger-outline">Reject</button>
      }
    }
  }

  const renderKeyword = (word: string, index: number) => <span className="label" key={index}>{word}</span>


  return (
    <div>
      <div>
        <h1>Paper Details</h1>
      </div>
    <div className="card">
      <div className="card-header">
        How to make ad-hoc polymorphism less ad hoc
      </div>
      <div className="card-block">
        <div className="clr-row">
          <div className="clr-col-1">
            <b>Authors:</b>
          </div>
          <div className="clr-col-10">
            John Doe, Jane Smith
          </div>
        </div>
        <hr></hr>
        <div className="clr-row">
          <div className="clr-col-1">
            <b>Abstract:</b>
          </div>
          <div className="clr-col-10">
            {abstract}
          </div>
        </div>
        <hr></hr>
        <div className="clr-row">
          <div className="clr-col-1">
            <b>Status:</b>
          </div>
          <div className="clr-col-10">
            SUBMITTED
          </div>
        </div>
        <hr></hr>
        <div className="clr-row">
          <div className="clr-col-1">
            <b>Keywords:</b>
          </div>
          <div className="clr-col-10">
            {keywords.map((word, index) => renderKeyword(word, index))}
          </div>
        </div>
        <hr></hr>
        <div className="clr-row details-row">
          <div className="clr-col-1">
            <b>File:</b>
          </div>
          <div className="clr-col-10">
            <button className="btn btn-link btn-sm">paper_v12.pdf</button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        {renderActions()}
      </div>
    </div>
    </div>
  )
}

export default PaperDetails
