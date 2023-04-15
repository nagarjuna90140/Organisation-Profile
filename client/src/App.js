import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import About from './Componenets/About/About'
import  {Industry}  from './Componenets/auth/Industry'
import { Login } from './Componenets/auth/Login'
import { CreateOrgProfile } from './Componenets/auth/createOrgProfile'


import Home from './Componenets/Home/Home'
import Navbar from './Componenets/Navbar/Navbar'
import OrgainisationPage from './Componenets/Pages/orgainisationPage'
import { EditOrgProfile } from './Componenets/auth/EditOrgProfile'
import { ErpVendor } from './Componenets/auth/erpVendors'
import { SearchOrgProfile } from './Componenets/auth/SearchOrgProfile'
import { Display } from './Componenets/auth/Display'
import { ManageUser } from './Componenets/Pages/userManagement/ManageUser'
import { SearchUser } from './Componenets/Pages/userManagement/SearchUser'
import { AddnewContact } from './Componenets/Pages/Contact/AddnewContact'
import { ViewOrganisation } from './Componenets/auth/viewOrganisation'
import OrgContact from './Componenets/Pages/OrganisationDetails/OrgContact'
import { OrgProfile } from './Componenets/Pages/OrganisationDetails/orgProfile'
import AmsPartner  from './Componenets/Pages/OrganisationDetails/AmsPartner'
import { ErpImplimentation } from './Componenets/Pages/OrganisationDetails/ErpImplimentation'
import { CreateErpImp } from './Componenets/Pages/ErpImplimentation/CreateErpImpl'
import { AddNewAmsPartner } from './Componenets/Pages/AmsPartner/CreateAmsPartner'
import { BusinessOpportunity } from './Componenets/Pages/OrganisationDetails/BusinessOpportunity'
import { CreateBusinessOpp } from './Componenets/Pages/Business Opportunity/CreateBusinessOPp'
import { UserRegester } from './Componenets/Pages/UserRegistration/userRegester'
import { SearchBusiness } from './Componenets/Pages/OrganisationDetails/SearchBusiness/SearchBusiness'
import { DisplayBusinessOpportunities } from './Componenets/auth/DisplayBusinessOpportunities'
import { UploadOrgDocument } from './Componenets/Pages/OrganisationDetails/UploadOrgDocument'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<OrgainisationPage />} />
        <Route path='/searchBusinessOpportunity' element={<SearchBusiness />} />
        <Route path='/createOrgProfile' element={<CreateOrgProfile/>} />
        <Route path='/updateOrgProfile/:id' element={<CreateOrgProfile/>} />
        <Route path='/editOrgProfile/:id' element={<EditOrgProfile/>} />
        <Route path='/uploadFile' element={<UploadOrgDocument/>} />
      
 


        <Route path='/viewOrgProfile/:legalName' element={<ViewOrganisation/>} />


        <Route path='/manageOrgProfile/' element={<Display/>} />
        <Route path='/manageOrgProfile/:legalName' element={<Display/>} />
        <Route path='/manageOrgProfile/:industryName' element={<Display/>} />
        <Route path='/manageOrgProfile/:address' element={<Display/>} />
        <Route path='/manageOrgProfile/:legalName/:industryName/' element={<Display/>} />
        <Route path='/manageOrgProfile/:legalName/:address/' element={<Display/>} />
        <Route path='/manageOrgProfile/:industryName/:address/' element={<Display/>} />
        <Route path='/manageOrgProfile/:legalName/:industryName/:address' element={<Display/>} />
       
        <Route path='/industry' element={<Industry/>} />
        <Route path='/erpVendor' element={<ErpVendor/>} />
        <Route path='/searchOrgprofiles' element={<SearchOrgProfile/>} />
        <Route path='/display' element={<Display/>} />
        <Route path='/manageuser/:name/:email' element={<ManageUser/>} />
        <Route path='/manageuser/:name' element={<ManageUser/>} />
        <Route path='/manageuser/email/:email' element={<ManageUser/>} />
        <Route path='/manageuser/' element={<ManageUser/>} />
        <Route path='/searchuser' element={<SearchUser/>} />
         
         <Route path='/addNewContact/:legalName' element={<AddnewContact/>} />
         <Route path='/update/:legalName/:contactName' element={<AddnewContact/>} />


         <Route path='/Vieworganization' element={<ViewOrganisation />} />
         <Route path='/orgProfile/:legalName' element={<OrgProfile />} />
         <Route path='/orgContact/:legalName' element={<OrgContact/>} />
         <Route path='/erpImplimentation/:legalName' element={<ErpImplimentation/>} />
         <Route path='/addNewErpPartner/:legalName' element={<CreateErpImp/>} />
         <Route path='/amsPartner/:legalName' element={<AmsPartner/>} />
         <Route path='/addNewAmsPartner/:legalName' element={<AddNewAmsPartner/>} />
         <Route path='/businessOpportunity/:legalName' element={<BusinessOpportunity/>} />
         <Route path='/displayBusinessSearch/:softwareTechnology/:opportunityType' element={<DisplayBusinessOpportunities/>} />
         <Route path='/displayBusinessSearch/:softwareTechnology' element={<DisplayBusinessOpportunities/>} />
         <Route path='/displayBusinessSearch/' element={<DisplayBusinessOpportunities/>} />
         <Route path='/addNewBusinessOpp/:legalName' element={<CreateBusinessOpp/>} />
         <Route path='/updateContact/:legalName/:contactName' element={<AddnewContact/>} />
         <Route path='/updateErpPartner/:legalName/:partnerName' element={<CreateErpImp/>} />
         <Route path='/updateAmsPartner/:legalName/:partnerName' element={<AddNewAmsPartner/>} />
         <Route path='/updateBusinessOpp/:legalName/:id' element={<CreateBusinessOpp/>} />
         <Route path='/addUser/' element={<UserRegester/>} />
         <Route path='/updateUser/:id' element={<UserRegester/>} />




        </Routes>
 
      </BrowserRouter>
    </>
  )
}
