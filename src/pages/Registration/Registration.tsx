import React, { FunctionComponent } from "react"
import ClrDatepicker from "ui/ClrDatepicker"
import ClrInput from "ui/ClrInput"
import "./Registration.scss"

const Registration: FunctionComponent = () => {
  return (
    <div className="container">

      <div className="card">
            <div className="card-header">
                Sign Up
            </div>
            <div className="card-block">
            <form className="clr-form clr-form-compact">
                <ClrInput label="First name" placeholder="e.g. John" />
                <ClrInput label="Last name" placeholder="e.g. Doe" />
                <ClrDatepicker label="Birth date" />
                <ClrInput label="E-mail" type="email" />
                <ClrInput label="Password" type="password" />
                <ClrInput label="Phone" placeholder="087-xxx-xxx" />
                <ClrInput label="University" placeholder="start typing..." />
            </form>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-success-outline">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Registration
