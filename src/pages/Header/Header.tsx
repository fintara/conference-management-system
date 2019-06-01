import React, { FunctionComponent, useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

import { UserInfo } from "common/models"
import "./Header.scss"

type Props = {
  user: UserInfo | null
}

const Header: FunctionComponent<Props> = ({ user }) => {

  return (
    <div>
      <header className="header header-4">
        <div className="branding">
          <Link to="/" className="nav-link">
            <span className="title">CONFERENCE MANAGEMENT</span>
          </Link>
        </div>
        <div className="header-nav">
          {user && <>
            <Link to="create-paper" className="nav-link"><span className="nav-text">Create a paper</span></Link>
          </>}
        </div>
        <div className="header-actions">
          {user ? <>
            <div className="dropdown open">
              <button type="button" className="dropdown-toggle btn btn-link">
                {user.name}
              </button>
              <div className="dropdown-menu">
                <h4 className="dropdown-header">Reviewer</h4>
                <button type="button" className="dropdown-item">Profile</button>
                <div className="dropdown-divider" />
                <button type="button" className="dropdown-item">Sign out</button>
              </div>
            </div>
          </> : <>
            <Link to="registration" className="nav-link"><span className="nav-text">Register</span></Link>
            <Link to="login" className="nav-link"><span className="nav-text">Log in</span></Link>
          </>}
        </div>
      </header>
    </div>
  )
}

export default Header
