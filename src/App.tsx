import http from "common/http"
import { UserInfo } from "common/models"
import ConferenceForm from "pages/ConferenceForm"
import Header from "pages/Header"
import Homepage from "pages/Homepage"
import Login from "pages/Login"
import PaperDetails from "pages/PaperDetails"
import PaperForm from "pages/PaperForm"
import PaperManagement from "pages/PaperManagement"
import PapersList from "pages/PapersList"
import PaperVersionForm from "pages/PaperVersionForm"
import Registration from "pages/Registration"
import ReviewersSelection from "pages/ReviewersSelection"
import React, { FunctionComponent, useEffect, useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import ClrContainer from "ui/ClrContainer"
import "./App.scss"
import CreateReviewForm from "./pages/Review/CreateReviewForm/CreateReviewForm"
import Logout from "pages/Logout";

const App: FunctionComponent = () => {
  const [user, setUser] = useState<null | UserInfo>(null)

  useEffect(() => {
    const cached = localStorage.getItem("auth")
    if (cached) {
      setUser(JSON.parse(cached))
    }
  }, [])

  const onUser = (user: UserInfo | null) => {
    user && http.setAuthentication(user.email)
    setUser(user)

    if (user) {
      localStorage.setItem("auth", JSON.stringify(user))
    } else {
      localStorage.removeItem("auth")
    }
  }

  return (
    <Router>
      <Header user={user} />

      <Route path="/" exact={true} component={Homepage} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={() => <Login onUserChanged={onUser} />} />
      <Route path="/logout" component={() => <Logout onUserChanged={() => onUser(null)} />} />
      <Route path="/create-paper" component={() =>  user && <PaperForm user={user} />} />
      <Route path="/papers" component={() => user && <PapersList user={user} />} />
    </Router>
    // <>
    //   <ClrContainer size="normal">
    //     <Header />
    //   </ClrContainer>
    //   <ClrContainer size="small">
    //     <ConferenceForm />
    //   </ClrContainer>
    //   <ClrContainer size="small">
    //     <Registration />
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <PaperForm />
    //   </ClrContainer>
    //   <ClrContainer size="small">
    //     <PaperVersionForm />
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <PapersList />
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <PaperManagement />
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <ReviewersSelection />
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <CreateReviewForm />
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <PaperDetails role="author"/>
    //   </ClrContainer>
    //   <ClrContainer size="normal">
    //     <PaperDetails role="organizer"/>
    //   </ClrContainer>
    // </>
  )
}

export default App
