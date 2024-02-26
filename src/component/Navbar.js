import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" >{props.about}</Link>
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-dark mx-2 rounded "  onClick={()=>{props.toggleMode('dark')}} style={{height:'20px' , width:"20px",cursor:"pointer"}}></div>
        <div className="bg-info mx-2 rounded "  onClick={()=>{props.toggleMode('info')}} style={{height:'20px' , width:"20px",cursor:"pointer"}}></div>
        <div className="bg-primary mx-2 rounded " onClick={()=>{props.toggleMode('primary')}} style={{height:'20px' , width:"20px" ,cursor:"pointer"}} ></div>
        <div className="bg-success mx-2 rounded "  onClick={()=>{props.toggleMode('success')}} style={{height:'20px' , width:"20px",cursor:"pointer"}}></div>
        <div className="bg-danger mx-2 rounded "  onClick={()=>{props.toggleMode('danger')}} style={{height:'20px' , width:"20px",cursor:"pointer"}}></div>
        <div className="bg-warning mx-2 rounded "  onClick={()=>{props.toggleMode('warning')}} style={{hight:'20px' , width:"20px",}}></div>
      </div>
      {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
         <input className={`form-check-input bg-${props.mode === 'light' ? 'light' : 'dark'}  `}onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
         </div> */}
        
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title :PropType.string,
    links:PropType.string,
}