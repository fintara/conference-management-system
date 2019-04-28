import React, { FunctionComponent } from "react"
import "./ClrTextArea.scss"

type Props = {
  label: string
  placeholder?: string
}

const ClrTextArea: FunctionComponent<Props> = ({ label, placeholder }) => {
  return (
    <div className="clr-form-control">
      <label className="clr-control-label">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className="clr-textarea-wrapper">
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
