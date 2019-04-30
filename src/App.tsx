import ConferenceForm from "pages/ConferenceForm"
import PaperForm from "pages/PaperForm"
import PaperManagement from "pages/PaperManagement"
import PapersList from "pages/PapersList"
import Registration from "pages/Registration"
import ReviewersSelection from "pages/ReviewersSelection"
import React, { FunctionComponent } from "react"
import ClrContainer from "ui/ClrContainer"
import "./App.scss"
import CreateReviewForm from "./pages/Review/CreateReviewForm/CreateReviewForm"

const App: FunctionComponent = () => {
  return (
    <>
      <ClrContainer size="small">
        <ConferenceForm />
      </ClrContainer>
      <ClrContainer size="small">
        <Registration />
      </ClrContainer>
      <ClrContainer size="normal">
        <PaperForm />
      </ClrContainer>
      <ClrContainer size="normal">
        <PapersList />
      </ClrContainer>
      <ClrContainer size="normal">
        <PaperManagement />
      </ClrContainer>
      <ClrContainer size="normal">
        <ReviewersSelection />
      </ClrContainer>
      <ClrContainer size="normal">
        <CreateReviewForm />
      </ClrContainer>
    </>
  )
}

export default App
