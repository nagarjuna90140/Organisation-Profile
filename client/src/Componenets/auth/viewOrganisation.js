import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export const ViewOrganisation = () => {

  const params=useParams()
  return (
  <>
  <center><h3 style={{marginTop:"20px",marginBottom:"20px"}}>Organisation Profile of : {params.legalName}</h3></center>
  <nav className="navbar navbar-expand-lg navbar-light color-black">
  <div className="container-fluid">
    <Link to={`/orgProfile/${params.legalName}`} className="navbar-brand" href="#"> Organisation Profile</Link>
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

      <Link to={`/orgContact/${params.legalName}`} className="nav-link text-black" aria-current="page" href="#">  Organisation Contact </Link>
       <Link to={`/erpImplimentation/${params.legalName}`} className="nav-link text-black" href="#"> Erp Implimentation</Link>
      <Link to={`/amsPartner/${params.legalName}`}className="nav-link text-black" href="#"> Ams Partner</Link>
       <Link to={`/businessOpportunity/${params.legalName}`} className="nav-link text-black" href="#"aria-disabled="true" >Bussiness opportunities </Link>
      </div>
    </div>
  </div>
</nav><hr></hr>

  
  
  </>
  )
}
