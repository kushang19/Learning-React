import React from 'react'
import {Link} from "react-router-dom"; 

const MainNav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Learn React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/to-do-list">To Do List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lits-items">List Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/redux">Redux</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-ref">useRef</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-memo">useMemo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/axios">Axios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-effect">useEffect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/child-to-parent">C2P</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user-registration-form">Form Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/custom-component">Custom Component</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default MainNav
