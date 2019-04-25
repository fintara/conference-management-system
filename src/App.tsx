import Registration from "pages/Registration"
import React, { FunctionComponent } from "react"
import "./App.scss"
import ReviewersSelection from "./pages/ReviewersSelection/ReviewersSelection";

const App: FunctionComponent = () => {
  return (
    <div>
      <div className="clr-row clr-justify-content-center">
        <div className="clr-col-4">
          <Registration />
        </div>
      </div>
      <div className="clr-row clr-justify-content-center">
        <div className="clr-col-10">
          <ReviewersSelection />
        </div>
      </div>
    </div>
  )
}

export default App
