import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">React Users</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link className="nav-link "  to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/About">about</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to='/Contact'>Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navigation
