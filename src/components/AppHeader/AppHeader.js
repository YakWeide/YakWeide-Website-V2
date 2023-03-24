import React from 'react'
import "./AppHeader.css"
import logo from "../../assets/yakweide_logo_klein.png"

// This is the header component of the app. It renders the logo and the navigation bar.
function AppHeader() {
  return (
    <div>
      <header>

        <div className="logo">
          <img id="header-img" src={logo} alt=""/>
        </div>        

        <nav id="nav-bar">
          <ul>
            <li><a className="nav-link" href="#Page1">Page2</a></li>
            <li><a className="nav-link" href="#Page2">Page2</a></li>
            <li><a className="nav-link" href="#Page3">Page3</a></li>
            <li><a className="nav-link" href="/login">Login</a></li>
          </ul>
        </nav>

      </header>

    </div>
  )
}

export default AppHeader