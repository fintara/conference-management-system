import React, { FunctionComponent } from "react"
import { Redirect } from "react-router"
import "./Logout.scss"

type Props = {
  onUserChanged: () => void
}

const Logout: FunctionComponent<Props> = (props) => {
  props.onUserChanged()

  return <Redirect to="/" />
}

export default Logout
