import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const EditOrgProfile = () => {
    const {id}=useParams()
    const [editForm,setEditForm]=useState({legalName:"",parentName:"",crmName:"",industryName:"",
 noOfEmployees:"",turnOverRange:"",websiteUrl:"",orgEmail:"",phnNumber:"",address:"",orgAddInfo:"",
    erpVendor:"",year:"",erpAddInfo:""})

    const navigate=useNavigate()
const handleInput=(e)=>{
    setEditForm({...editForm,[e.target.name]:e.target.value})
}
    useEffect(()=>{
        const getUser=async()=>{
       const reqData=await axios.put(`/organisation/${id}`)

      //setEditForm(reqData.data.data)
        }
        getUser()
    },[id])

const handleUpdate=async(e)=>{
    e.preventDefault();
    const editInput={legalName:editForm.legalName,parentName:editForm.parentName,crmName:editForm.crmName,industryName:editForm.industryName,
         noOfEmployees:editForm.noOfEmployees,turnOverRange:editForm.turnOverRange,websiteUrl:editForm.websiteUrl,orgEmail:editForm.orgEmail,
         phnNumber:editForm.phnNumber,address:editForm.address,orgAddInfo:editForm.orgAddInfo,erpVendor:editForm.erpVendor,
        year:editForm.year,erpAddInfo:editForm.erpAddInfo}
    console.log(editInput)
    let res=await axios.put(`/organisation/${id}`,editInput)
    console.log(res.data.data)
    navigate("/viewOrgProfile")
}
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h3>Edit organisation Profile {id}</h3>
                <form onSubmit={handleUpdate}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter legal Name'
                            name="legalName"
                            value={editForm.legalName}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter parent Name'
                            name="parentName"
                            value={editForm.parentName}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter crm Name'
                            name="crmName"
                            value={editForm.crmName}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter industry Name'
                            name="industryName"
                            value={editForm.industryName}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter erp vendor Name'
                            name="erpVendor"
                            value={editForm.erpVendor}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="Number" 
                            placeholder='enter noOfEmployees Name'
                            name="noOfEmployees"
                            value={editForm.noOfEmployees}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="Number" 
                            placeholder='enter turnOverRange'
                            name="turnOverRange"
                            value={editForm.turnOverRange}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter orgEmail'
                            name="orgEmail"
                            value={editForm.orgEmail}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="Number" 
                            placeholder='enter phnNumber'
                            name="phnNumber"
                            value={editForm.phnNumber}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter address'
                            name="address"
                            value={editForm.address}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter orgAddInfo'
                            name="orgAddInfo"
                            value={editForm.orgAddInfo}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="Number" 
                            placeholder='enter year'
                            name="year"
                            value={editForm.year}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                            <input type="text" 
                            placeholder='enter erpAddInfo'
                            name="erpAddInfo"
                            value={editForm.erpAddInfo}
                            onChange={handleInput}
                            className='form-control'/>
                        </div>
                        </div>
                        
                      </div>
                      <button  className='btn btn-primary w-25 m-x ' >Update</button>
                 </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}
