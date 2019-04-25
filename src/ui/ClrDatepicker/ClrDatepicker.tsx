import React, { FunctionComponent } from 'react'
import './ClrDatepicker.scss'

type Props = {
  label: string
}

const ClrDatepicker: FunctionComponent<Props> = ({ label }) => {
  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className="clr-select-wrapper">
          <select id="select-basic" className="clr-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select id="select-basic" className="clr-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select id="select-basic" className="clr-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ClrDatepicker
