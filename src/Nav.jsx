import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">
    <div>
        
    <a class="navbar-brand" href="#">CRUD USING MERN</a>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        
        <li class="nav-item">

          <Link to="/add" className='nav-link'>ADD USER</Link>
        </li>
        
        <li class="nav-item">
        <Link to="/all" className='nav-link'>ALL USERS</Link>

        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
  )
}

export default Nav