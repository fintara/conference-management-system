import React, { FunctionComponent } from "react"
import "./ClrFileInput.scss"

type Props = {
  label: string
}

const ClrFileInput: FunctionComponent<Props> = ({ label }) => {
  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className="clr-input-wrapper">
          <input
            type="file"
          />
        </div>
      </div>
    </div >
  )
}

export default ClrFileInput
