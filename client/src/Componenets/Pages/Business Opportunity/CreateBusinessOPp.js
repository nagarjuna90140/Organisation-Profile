import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export const CreateBusinessOpp = () => {
  const [softwareTechnology,setSoftwareTechnology]=useState("")
  const [stAddInfo,setStAddInfo]=useState("")
  const [opportunityType,setOpportunityType]=useState("")
  const [opportunityStatus,setOpportunityStatus]=useState("")
  const [opportunityAddInfo,setOpportunityAddInfo]=useState("")
  const [date,setDate]=useState("")
  const [softList,setSoftList]=useState([{}])
  const params=useParams()

  const legalName=params.legalName
console.log("this is legalname"+legalName)
console.log("this is id"+params.id)
  const navigate=useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      
      if(params.id==null){
          if (softwareTechnology.length == 0) {
                  window.alert("Software  is missing")
              } else {
                    if (opportunityType.length == 0) {
                      window.alert("opportunity type  is missing")
                    } 
                       else{
                         const res = await axios.post(`/business/create`,{stAddInfo,softwareTechnology,opportunityAddInfo,opportunityStatus,opportunityType,date,legalName})
                         console.log(res)
                         navigate(`/businessOpportunity/${params.legalName}`)
    
                      }
                  }
           }else{
             
              const {value2}=await axios.put(`/business/update/${params.id}`,{stAddInfo,softwareTechnology,opportunityAddInfo,opportunityStatus,opportunityType,date})
            
              navigate(`/businessOpportunity/${params.legalName}`)

            }
      } catch (error) {
          console.log(error)
          window.alert("something is wrong")
      }

  }  
  useEffect(()=>{
    const getUser=async()=>{
   const res=await axios.put(`/business/update/${params.id}`)
   setSoftwareTechnology(res.data.softwareTechnology)
   setOpportunityAddInfo(res.data.opportunityAddInfo)
   setOpportunityStatus(res.data.opportunityStatus)
   setOpportunityType(res.data.opportunityType)
   setStAddInfo(res.data.stAddInfo)
   setDate(res.data.date)
    }
    getUser()
},[params.softwareTechnology])
  const handleChange = (event) => {
    setSoftwareTechnology(event.target.value);
}
const handleOpportunity=(event)=>{
  setOpportunityType(event.target.value)
}

//handling ooportunity status
const handleOpportunityStatus=(event)=>{
  setOpportunityStatus(event.target.value)
}
const getSoftwareTechnology = async () => {

  const data2 = await axios.get(`/software/get/`)
  setSoftList(data2.data)
  }
  useEffect(() => {
    getSoftwareTechnology()
  }, [])

  return (
    <div className='orgContact'>
    {(params.id==null)?<center> <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Create Business Opportunity  for : {params.legalName}</h3></center>:
    <center> <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Update Business Opportunity  for :  {params.id}</h3></center>} 
      <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <form onSubmit={submitHandler}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>software Technology: </label>
                          <select className="form-control" onChange={handleChange}>
                                    <option value={softwareTechnology}>Choose Software Technology</option>
                                    {softList.map((soft) => (
                                        <option key={soft._id} >{soft.softwareTechnology}</option>
                                    ))}
                                </select>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>  ST AddInfo : </label>

                            <input type="text" 
                            placeholder='Enter ST AddInfo '
                            name="STAddInfo"
                            onChange={(e) =>setStAddInfo(e.target.value)}
                            value={stAddInfo}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>Opportunity Type : </label>

                        <select className="form-control" onChange={handleOpportunity}>
                          <option value="0" >Choose Opportunity Type</option>
                          <option >implementation</option>
                          <option >developing</option>
                          <option >migrating</option>
                          <option >cloud computing</option>
                          <option >testing</option>
                          <option >support</option>
                        </select>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>Opportunity Status : </label>

                        <select className="form-control" onChange={handleOpportunityStatus}>
                        <option value="0">Choose Opportunity Status</option>
                          <option >open</option>
                          <option >close</option>
                          <option >cancel</option>
                          
                        </select>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>Opportunity AddInfo : </label>

                            <input type="text" 
                            placeholder='Enter Opportunity AddInfo '
                            name="opportunityAddInfo"
                            onChange={(e) =>setOpportunityAddInfo(e.target.value)}
                            value={opportunityAddInfo}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>Date  : </label>

                        <input type="date" 
                            placeholder='Enter date '
                            name="STAddInfo"
                            onChange={(e) =>setDate(e.target.value)}
                            value={date}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        
                        {(params.id==null)? <button type="submit" className='btn btn-success '>Save</button>:
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
