import React, { FunctionComponent } from "react"
import ClrDatepicker from "ui/ClrDatepicker"
import ClrInput from "ui/ClrInput"
import "./ConferenceForm.scss"

const ConferenceForm: FunctionComponent = () => {
  return (
    <div className="card">
      <div className="card-header">
          Create a conference
      </div>
      <div className="card-block">
        <form className="clr-form clr-form-compact">
            <ClrInput label="Name" />
            <ClrDatepicker label="Start date" dateFrom={new Date()} dateTo={new Date(2022, 11, 31)} />
            <ClrDatepicker label="End date" dateFrom={new Date()} dateTo={new Date(2022, 11, 31)} />
            <ClrInput label="Location" placeholder="start typing..." />
        </form>
      </div>
      <div className="card-footer">
          <button className="btn btn-sm btn-success-outline">Create</button>
      </div>
    </div>
  )
}

export default ConferenceForm
