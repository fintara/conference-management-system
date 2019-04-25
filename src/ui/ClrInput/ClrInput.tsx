import React, { FunctionComponent } from "react"
import "./ClrInput.scss"

type Props = {
  label: string
  type?: "text" | "email" | "password"
  placeholder?: string
  fluid?: boolean
}

const ClrInput: FunctionComponent<Props> = ({ label, type, placeholder, fluid }) => {
  fluid = fluid !== undefined ? fluid : true

  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className={`clr-input-wrapper ${fluid ? "clr-input-fluid" : ""}`}>
          <input
            type={type || "text"}
            placeholder={placeholder}
            className="clr-input" />
        </div>
      </div>
    </div >
  )
}

export default ClrInput
