import React, { FunctionComponent } from "react"
import "./ClrTextArea.scss"

type Props = {
  label: string
  placeholder?: string
  fluid?: boolean
}

const ClrTextArea: FunctionComponent<Props> = ({ label, placeholder, fluid }) => {
  fluid = fluid !== undefined ? fluid : true

  return (
    <div className="clr-form-control clr-row">
    <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className={`clr-textarea-wrapper ${fluid ? "clr-textarea-fluid" : ""}`}>
          <textarea
            placeholder={placeholder}
            className="clr-textarea"
          />
        </div>
      </div>
    </div >
  )
}

export default ClrTextArea
