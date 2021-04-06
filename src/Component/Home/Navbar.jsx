 import React from 'react';
import { NavLink  } from 'react-router-dom';

 
 
 const Navbar = () => {
     return (
         <div className ="container-fluid">
             <div className="row">
                 <div className="col-lg-12">
         

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink   className="navbar-brand" to="/">Ashik workshop</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu-active'  className="nav-link active" aria-current="page" exact to="/home">Home</NavLink >
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu-active'activeClassName='menu-active' className="nav-link" exact to="/service">Service</NavLink >
          
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu-active'activeClassName='menu-active'  className="nav-link" exact to="/about">About</NavLink >
         
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu-active' className="nav-link"  exact to="/contact">Contract</NavLink >
        </li>
        
        
         
      </ul>
       


                             </div>
                         </div>
                     </nav>
                 </div>
             </div>
         </div>
     );
 };
 
 export default Navbar;