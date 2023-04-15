import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'


export const AddNewAmsPartner = () => {
  const [partnerName, setPartnerName] = useState("")
  const [AmsExpireyDate, setAmsExpireyDate] = useState("")
  const [partnerAddInfo1, setPartnerAddInfo1] = useState("")
  const [partnerAddInfo2, setPartnerAddInfo2] = useState("")
  const params=useParams()
  const navigate=useNavigate()
  const legalName=params.legalName
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      
      if(params.partnerName==null){
          if (partnerName.length == 0) {
                  window.alert("Partner Name is missing")
              } else {
                    if (AmsExpireyDate.length == 0) {
                      window.alert("AMS expirey date  is missing")
                    } 
                       else{
                         const res = await axios.post(`/amsPartner/create`,{partnerName,AmsExpireyDate,partnerAddInfo1,partnerAddInfo2,legalName})
                         console.log(res)
                         navigate(`/amsPartner/${params.legalName}`)    
                      }
                  }
              }else{
                  const {value2}=await axios.put(`/amsPartner/update/${params.partnerName}`,{partnerName,AmsExpireyDate,partnerAddInfo1,partnerAddInfo2,legalName})
                  console.log(value2)
                  navigate(`/amsPartner/${params.legalName}`)
                }
      } catch (error) {
          console.log(error)
          window.alert("something is wrong")
      }
  } 
  useEffect(()=>{
    const updatePartner=async()=>{
   const reqData=await axios.put(`/amsPartner/update/${params.partnerName}`)
   setPartnerName(reqData.data.partnerName) 
   setPartnerAddInfo1(reqData.data.partnerAddInfo1) 
   setPartnerAddInfo2(reqData.data.partnerAddInfo2)
   setAmsExpireyDate(reqData.data.AmsExpireyDate)
  }
    updatePartner()
},[params.partnerName])
  return (
    <div>
      {(params.partnerName==null)?<center><h3 style={{marginTop:"20px",marginBottom:"20px"}}>Create Ams Partner  for : {params.legalName}</h3>
      </center>:<center><h3 style={{marginTop:"20px",marginBottom:"20px"}}>Update AMS Partner  for : {params.partnerName}</h3></center>}
      <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <form onSubmit={submitHandler}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>Partner Name : </label>
                            <input type="text" 
                            placeholder='Enter Partner Name'
                            name="PartnerName"
                            onChange={(e) =>setPartnerName(e.target.value)}
                            value={partnerName}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>  AmsExpireyDate : </label>

                            <input type="date" 
                            placeholder='Enter Ams Expirey Date '
                            name="AmsExpireyDate"
                            onChange={(e) =>setAmsExpireyDate(e.target.value)}
                            value={AmsExpireyDate}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label> Partner AddInfo1 : </label>

                            <textarea
                            placeholder='Enter Partner AddInfo 1'
                            name="partnerAddInfo1"
                             onChange={(e) =>setPartnerAddInfo1(e.target.value)}
                              value={partnerAddInfo1}
                             className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>Partner AddInfo2 : </label>

                            <input type="text" 
                            placeholder='Enter Partner AddInfo 2'
                            name="role"
                            onChange={(e) =>setPartnerAddInfo2(e.target.value)}
                            value={partnerAddInfo2}
                            className='form-control'/>
                        </div>
                        </div>
                       
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        
                        {(params.partnerName==null)? <button type="submit" className='btn btn-success '>Save</button>:
                          <button className='btn btn-success'>Update</button>}
                          <button className='btn btn-warning'>Cancel</button>
                          </div>
                        </div>
                    </div>
                  </form>
                </div>
            </div>
    </div>
    </div>
  )
}
