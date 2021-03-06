import http from "common/http"
import React, { FunctionComponent, useState } from "react"
import { Link } from "react-router-dom"
import ClrContainer from "ui/ClrContainer"
import ClrDatepicker from "ui/ClrDatepicker"
import ClrInput from "ui/ClrInput"
import "./Registration.scss"

const Registration: FunctionComponent = () => {
  const [state, setState] = useState<"idle" | "success" | "error">("idle")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: new Date(),
    email: "",
    password: "",
    phone: "",
    university: "",
  })

  const setInput = (field: string, value: any) => {
    setForm({...form, [field]: value})
  }

  const sendRequest = async () => {
    setState("idle")
    try {
      const response = await http.post("/users/register", form)
      setState("success")
    } catch (e) {
      console.error(e)
      setState("error")
    }
  }

  return (
    <ClrContainer size="small">
      <div className="card">
        <div className="card-header">
            Sign Up
        </div>
        <div className="card-block">
          {state === "success" && <div className="success">
            You registered successfully!
            You can <Link to="/login">log in</Link> now.
          </div>}
          {state === "error" && <div className="error">There was an error...</div>}

          <form className="clr-form clr-form-compact">
              <ClrInput label="First name" placeholder="e.g. John" onChange={(value) => setInput("firstName", value)} />
              <ClrInput label="Last name" placeholder="e.g. Doe" onChange={(value) => setInput("lastName", value)} />
              <ClrDatepicker label="Birth date" onChange={(value) => setInput("dob", value)} />
              <ClrInput label="E-mail" type="email" placeholder="e.g. john.doe@gmail.com" onChange={(value) => setInput("email", value)} />
              <ClrInput label="Password" type="password" placeholder="min. 6 symbols" onChange={(value) => setInput("password", value)} />
              <ClrInput label="Phone" placeholder="087-xxx-xxx" onChange={(value) => setInput("phone", value)} />
              <ClrInput label="University" placeholder="start typing..." onChange={(value) => setInput("university", value)} />
          </form>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-success-outline"
            type="button"
            onClick={sendRequest}
          >
            Sign Up
          </button>
        </div>
      </div>
    </ClrContainer>
  )
}

export default Registration
