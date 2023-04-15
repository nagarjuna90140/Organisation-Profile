import axios from 'axios'
import React,{useState,useEffect}from 'react'
import { useParams ,useNavigate} from 'react-router-dom'

export const CreateErpImp = () => {
  const [partnerName,setErpPartner]=useState("")
  const [implementationYear,setImplimentationYear]=useState("")
  const [addInfo1,setPartnerAddInfo1]=useState("")
  const [addInfo2,setPartnerAddInfo2]=useState("")
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
                    if (implementationYear.length == 0) {
                      window.alert("Implimentation year is missing")
                    } 
                       else{
                         const res = await axios.post(`/erpPartner/create`,{partnerName,implementationYear,addInfo1,addInfo2,legalName})
                         console.log(res)
                         navigate(`/erpImplimentation/${params.legalName}`)
    
                      }
                  }
              }else{
                  const {value2}=await axios.put(`/erpPartner/update/${params.partnerName}`,{partnerName,implementationYear,addInfo1,addInfo2})
                  console.log(value2)
                  navigate(`/erpImplimentation/${params.legalName}`)

                }
      } catch (error) {
          console.log(error)
          window.alert("something is wrong")
      }
    } 
 useEffect(()=>{
      const getUser=async()=>{
     const reqData=await axios.put(`/erpPartner/update/${params.partnerName}`)
setErpPartner(reqData.data.partnerName)
setImplimentationYear(reqData.data.implementationYear)
setPartnerAddInfo1(reqData.data.addInfo1)
setPartnerAddInfo2(reqData.data.addInfo2)
      }
      getUser()
},[params.partnerName])



  return (
    <div>
      {(params.partnerName==null)?<center> <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Create Erp Partner  for : {params.legalName}</h3></center>: <center><h3 style={{marginTop:"20px",marginBottom:"20px"}}>Update Erp Partner  for : {params.partnerName}</h3></center>}

   
    <div className='erpImplimentation'>
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
                            name="partnerName"
                            onChange={(e) =>setErpPartner(e.target.value)}
                            value={partnerName}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label> Implimentation year : </label>

                            <input type="Number" 
                            placeholder='Enter Implimentation year'
                            name="implimentationYear"
                            onChange={(e) =>setImplimentationYear(e.target.value)}
                            value={implementationYear}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label> Partner Additional Info1 : </label>

                            <input type="text" 
                            placeholder='Enter Partner Additional Info'
                            name="PartnerAdditionalInfo1"
                            onChange={(e) =>setPartnerAddInfo1(e.target.value)}
                            value={addInfo1}
                             className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        <label>Partner Additional Info2 : </label>

                            <input type="text" 
                            placeholder='Enter Partner Additional Info2'
                            name="partnerAdditionalInfo1"
                            onChange={(e) =>setPartnerAddInfo2(e.target.value)}
                            value={addInfo2}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                        
                        {(params.partnerName==null)? <button type="submit" className='btn btn-success  mb-3  '>Save</button>:
                          <button className='btn btn-success mb-3'>Update</button>}
                          <button className='btn btn-warning'>Cancel</button>
                          </div>
                        </div>
                      </div>
                  </form>
                </div>
            </div>
</div>
    </div>
    </div>
  )
}
