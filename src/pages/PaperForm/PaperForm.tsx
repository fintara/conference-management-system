import React, { FunctionComponent } from "react"
import ClrFileInput from "ui/ClrFileInput"
import ClrInput from "ui/ClrInput"
import ClrTextArea from "ui/ClrTextArea"
import "./PaperForm.scss"

const PaperForm: FunctionComponent = () => {
  return (
    <div className="card">
      <div className="card-header">
          Create a paper
      </div>
      <div className="card-block">
        <form className="clr-form clr-form-compact">
            <ClrInput label="Title" />
            <ClrInput label="Other authors" placeholder="email or name" />
            <ClrTextArea label="Abstract" />
            <ClrFileInput label="File" />
        </form>
      </div>
      <div className="card-footer">
          <button className="btn btn-sm btn-success-outline">Create</button>
      </div>
    </div>
  )
}

export default PaperForm
