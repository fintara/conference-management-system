import React, { FunctionComponent } from "react"
import "./ClrSelect.scss"

type Props = {
  label: string
  options: string[]
}

const ClrSelect: FunctionComponent<Props> = ({ label, options }) => {

  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select">
                {options.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>
  )
}

export default ClrSelect
