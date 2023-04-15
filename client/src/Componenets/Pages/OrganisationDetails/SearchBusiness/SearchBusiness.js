import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const SearchBusiness = () => {
    const [softwareTechnology,setSoftwareTechnology]=useState("")
    const [opportunityType,setOppType]=useState([])
    const [softTech,setSoftTech]=useState([{}])

const navigate=useNavigate()

const searchBusinessOpportunity = async () => {

const data2 = await axios.get(`/software/get/`)
   setSoftTech(data2.data)
}
useEffect(() => {
    searchBusinessOpportunity()
}, [])

//opportunity type
const changeHandler=async(e)=>{
    setOppType(e.target.value)
}
const changeSoft=async(e)=>{
     setSoftwareTechnology(e.target.value)
}
//onclick on button
const searchBusinessHandler=async()=>{
    if(softwareTechnology.length!=0 && opportunityType.length!=0){
        navigate(`/displayBusinessSearch/${softwareTechnology}/${opportunityType}`)
    }
    else if(softwareTechnology.length===0 && opportunityType.length===0){
        navigate(`/displayBusinessSearch`)

    }
    else if(softwareTechnology.length!=0 && opportunityType.length===0){
        navigate(`/displayBusinessSearch/${softwareTechnology}`)

    }
}

  return (
    <div>
         <center><h3 style={{marginTop:"20px"}} className="searchH3">Search Business Opportunity</h3></center>
        <div className='searchBusinessSoftware'>
       
        <div className='container'>
           <div className='row'>
             <div className='col-md-12'>
               <form>
               
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label>SoftwareTechnology : </label>
                                <select onChange={changeSoft} >
                                    <option value="0"> Choose SoftwareTechnology</option>
                                    {softTech.map((soft) => (
                                    <option key={soft._id} >{soft.softwareTechnology}</option>
                                    ))}  
                                </select>    
                            </div>
                       </div>
                       <div className='col-md-6'>
                            <div className='mb-3'>
                                <label>Opportunity Type : </label>
                                <select onChange={changeHandler}>
                                    <option> Choose Opportunity Type </option>
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
                            
                                <button className='btn btn-success btn-sm w-50 mx-5' onClick={searchBusinessHandler}>Search</button>
                            </div>
                      
                       
                    </form>
               </div>
            </div>
        </div>
        </div>
    </div>
  )
}
