import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
       <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>
    </div>
  )
}
