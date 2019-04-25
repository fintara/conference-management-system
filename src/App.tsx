import Registration from "pages/Registration"
import React, { FunctionComponent } from "react"
import "./App.scss"

const App: FunctionComponent = () => {
  return (
    <div className="clr-row clr-justify-content-center">
      <div className="clr-col-4">
          <Registration />
      </div>
  </div>
  )
}

export default App
