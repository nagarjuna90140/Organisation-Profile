import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/auth'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [auth,setAuth]=useAuth()
  const navigate=useNavigate()

  const logoutHandler=()=>{
    
      setAuth({
        ...auth,user:null,token:""
      })
      localStorage.removeItem("auth")
      navigate(`/`)
    }
  

  return (

<>




    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
      Zettamine
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link  to="/login" className="nav-link text-white">Login</Link>
        </li>
        <li className="nav-item">
          <button  className="btn btn-primary" onClick={logoutHandler}>Logout</button>
        </li>



      </ul>

    </div>
  </div>
</nav>


</>

  )
}

export default Navbar
