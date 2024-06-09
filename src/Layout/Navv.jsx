import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../Images/flogo1.png"




function Navv(props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg " style={{background:'skyblue'}} >
  <div className="container" >
    <a className="navbar-brand " href="http://localhost:5173/"><img style={{height:'50px',width:'70px'}} src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0" >
        <li className="nav-item">
          <NavLink className="nav-link active  "   aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active  "   aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active  "   aria-current="page" to="/about">About</NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex" >
        <NavLink to='/register'> <button className='btn btn-success m-2'> Register</button></NavLink>
        <NavLink to='/login'> <button className='btn btn-danger m-2'> Login</button></NavLink>  
  
      </form>
    </div>
  </div>
</nav>
   </>

  );
}

export default Navv;