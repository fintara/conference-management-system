import React, { FunctionComponent, useState } from "react"

import "./Header.scss"


const Header: FunctionComponent = () => {

  return (
    <div>
      <header className="header header-4">
        <div className="branding">
          <a href="..." className="nav-link">
            <span className="title">CONFERENCE MANAGEMENT</span>
          </a>
        </div>
        <div className="header-nav">
          <a href="..." className="active nav-link"><span className="nav-text">CONFERENCES</span></a>
          <a href="..." className="nav-link"><span className="nav-text">PAPERS</span></a>
        </div>
        <div className="header-actions">
          <div className="dropdown open">
            <button type="button" className="dropdown-toggle btn btn-link">
              John Doe
            </button>
            <div className="dropdown-menu">
              <h4 className="dropdown-header">Reviewer</h4>
              <button type="button" className="dropdown-item">Profile</button>
              <div className="dropdown-divider"></div>
              <button type="button" className="dropdown-item">Sign out</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
