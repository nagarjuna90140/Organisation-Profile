
import axios from 'axios'
import React,{useState,useEffect}from 'react'
import { useParams,useNavigate } from 'react-router-dom'

 export const AddnewContact = () => {

const [contactName, setContactName] = useState("")
  const [designation, setDesignation] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [LinkedInUrl, setLinkedInUrl] = useState("")
  const params=useParams()
  const navigate=useNavigate()
  const legalName=params.legalName 
if(params.contactName!=null){
  
}
const submitHandler = async (e) => {
  e.preventDefault()
  try {
      
  if(params.contactName==null){
      if (contactName.length == 0) {
              window.alert("contactName is missing")
          } else {
                if (email.length == 0) {
                  window.alert("email is missing")
                } 
                   else{
                     const res = await axios.post(`/orgContact/create`,{contactName,designation,role,phoneNumber,LinkedInUrl,email,legalName})
                     console.log(res)
                       navigate(`/orgContact/${params.legalName}`)

                  }
              }
          }else{

              const {value2}=await axios.put(`/orgContact/update/${params.contactName}`,{contactName,designation,role,phoneNumber,LinkedInUrl,email})
              const {value}=await axios.put(`/orgContact/update/${params.contactName}`,{contactName,designation,role,phoneNumber,LinkedInUrl,email})
              navigate(`/orgContact/${params.legalName}`)


            }
  } catch (error) {
      console.log(error)
  }
} 
useEffect(()=>{
  const getUser=async()=>{
 const reqData=await axios.put(`/orgContact/update/${params.contactName}`,{contactName,designation,role,phoneNumber,LinkedInUrl,email})
setContactName(reqData.data.contactName)
setDesignation(reqData.data.designation)
setRole(reqData.data.role)
setPhoneNumber(reqData.data.phoneNumber)
setLinkedInUrl(reqData.data.LinkedInUrl)
setEmail(reqData.data.email)
  }
  getUser()
},[params.contactName])




return (
      <div className='orgCreateContact'>
       {(params.contactName==null)? <center><h3>Create Organisation Contact for : {params.legalName}</h3></center> :
      <center>  <h3>Update  Contact  Info of : {params.contactName}</h3></center>} 
        <div className='container'>
              <div className='row'>
                  <div className='col-md-12'>
                  <form onSubmit={submitHandler} className="contactForm">
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label>Contact Name : </label>
                              <input type="text" 
                              placeholder='Enter Conatct Name'
                              name="contactName"
                              onChange={(e) =>setContactName(e.target.value)}
                              value={contactName}
                              className='form-control'/>
                          </div>
                          </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                          <label> Email : </label>
  
                              <input type="email" 
                              placeholder='Enter Contact Email'
                              name="email"
                              onChange={(e) =>setEmail(e.target.value)}
                              value={email}
                              
                              className='form-control'/>
                          </div>
                          </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                          <label> Designation : </label>
  
                              <input type="text" 
                              placeholder='Enter Conatct Designation'
                              name="designation"
                              onChange={(e) =>setDesignation(e.target.value)}
                              value={designation}
                               className='form-control'/>
                          </div>
                          </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                          <label>Role : </label>
  
                              <input type="text" 
                                    onChange={(e) =>setRole(e.target.value)}
                                    value={role}
                              placeholder='Enter Role'
                              name="role"
                          
                              className='form-control'/>
                          </div>
                          </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                          <label>Phone Number : </label>
  
                              <input type="Number" 
                              placeholder='Enter Phone Number'
                              name="phoneNumber"
                              onChange={(e) =>setPhoneNumber(e.target.value)}
                              value={phoneNumber}
                              
                              className='form-control'/>
                          </div>
                          </div>
                        
                         
                          <div className='col-md-6'>
                            <div className="mb-3">
                            <label>LinkedIN Url : </label>
  
                              <input type="text" className='form-control'
                                    onChange={(e) =>setLinkedInUrl(e.target.value)}
                                    value={LinkedInUrl} placeholder='Enter LinkedIn Url'/>
                            </div>
                          </div>
                          <div>
                          {(params.contactName==null)? <button type="submit" className='btn btn-primary mx-3 btn-lg active'>Save</button>:
                          <button className='btn btn-success'>Update</button>}
                          <button className='btn btn-warning'>Cancel</button>
                          </div>
                      </div>
                    </form>
                  </div>
              </div>
      </div>
      </div>
    )
  }
