import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (<nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink className="me-3 m-1" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
            alt="..." height="55"/>
        </NavLink>

      </div>
    </div>
  </nav>)
}
