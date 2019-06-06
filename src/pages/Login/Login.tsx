import http from "common/http"
import { UserInfo } from "common/models"
import React, { FunctionComponent, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import ClrContainer from "ui/ClrContainer"
import ClrInput from "ui/ClrInput"
import "./Login.scss"

type Props = {
  onUserChanged: (user: UserInfo) => void
}

const Login: FunctionComponent<Props> = (props) => {
  const [state, setState] = useState<"idle" | "success" | "error">("idle")
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const setInput = (field: string, value: any) => {
    setForm({...form, [field]: value})
  }

  const sendRequest = async () => {
    setState("idle")
    try {
      const response = await http.post<any, UserInfo>("/users/login", form)
      setState("success")
      props.onUserChanged(response)
    } catch (e) {
      console.error(e)
      setState("error")
    }
  }

  if (state === "success") {
    return <Redirect to="/papers" />
  }

  return (
    <ClrContainer size="small">
      <div className="card">
        <div className="card-header">
            Log in
        </div>
        <div className="card-block">
          {state === "error" && <div className="error">Wrong e-mail/password</div>}

          <form className="clr-form clr-form-compact">
              <ClrInput label="E-mail" type="email" placeholder="e.g. john.doe@gmail.com" onChange={(value) => setInput("email", value)} />
              <ClrInput label="Password" type="password" placeholder="min. 6 symbols" onChange={(value) => setInput("password", value)} />
          </form>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-success-outline"
            type="button"
            onClick={sendRequest}
          >
            Log in
          </button>
        </div>
      </div>
    </ClrContainer>
  )
}

export default Login
