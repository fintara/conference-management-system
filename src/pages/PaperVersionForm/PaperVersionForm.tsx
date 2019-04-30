import React, { FunctionComponent } from "react"
import ClrFileInput from "ui/ClrFileInput"
import ClrInput from "ui/ClrInput"
import "./PaperVersionForm.scss"

const PaperVersionForm: FunctionComponent = () => {
  return (
    <div className="card">
      <div className="card-header">
          Upload new version
      </div>
      <div className="card-block">
        <form className="clr-form clr-form-compact">
            <ClrFileInput label="File" />
            <ClrInput label="Changes" />
        </form>
      </div>
      <div className="card-footer">
          <button className="btn btn-sm btn-success-outline">Upload</button>
      </div>
    </div>
  )
}

export default PaperVersionForm
