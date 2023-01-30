import React from 'react'
import './Stylesheet.css'
import {Link} from "react-router-dom"
export default function SpringApp() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Spring Boot Application </a>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home </a>

            </div>

        </div>
        <Link className='btn btn-outline-light' to="/AddFolder">Add Folder</Link>
        </nav>
        
    </div>
  )
}
