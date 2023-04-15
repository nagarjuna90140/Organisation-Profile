// import axios from 'axios'
// import React,{useState,useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// export const CreateOrgProfile = () => {
//     const [formData,setFormData]=useState({legalName:"",parentName:"",crmName:"",industryName:"",
// noOfEmployees:"",turnOverRange:"",websiteUrl:"",orgEmail:"",phnNumber:"",address:"",orgAddInfo:"",
// erpVendor:"",year:"",erpAddInfo:""})
// // const [industryData,setIndustryData]=useState([{}])
// // const [erpData,setErpData]=useState([{}])
// // const [industryName,setIndustryName]=useState("")
// // const [erpVendor,setErpVendor]=useState("")
//  const params=useParams()
//  const navigate=useNavigate()
// const handleInput=async(e)=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
// }

// const handleSubmit=async(e)=>{
//  e.preventDefault()
//  const allInputValues={legalName:formData.legalName,parentName:formData.parentName,crmName:formData.crmName,industryName:formData.industryName,
// noOfEmployees:formData.noOfEmployees,turnOverRange:formData.turnOverRange,websiteUrl:formData.websiteUrl,orgEmail:formData.orgEmail,
// phnNumber:formData.phnNumber,address:formData.address,orgAddInfo:formData.orgAddInfo,erpVendor:formData.erpVendor,
// year:formData.year,erpAddInfo:formData.erpAddInfo}
// //console.log(allInputValues)
// if(params.id==null){
//     if(formData.industryName.length==0){
//         alert("industry Name is missing")
//     }else{
//         if(formData.erpVendor.length==0){
//             alert("erp vendor is missing")
//         }else{
//             const res=await axios.post("/organisation",allInputValues)
//             console.log(res)
//             navigate("/viewOrgProfile")
//         }
//     }
// }
// // const data=await axios.post("/organisation",allInputValues)
// // console.log(data)



// }

// // useEffect(() => {
// //             const fetchData = async () => {
// //                 const res = await axios.get("/industry")
// //                 setIndustryData(res.data)
// //             }
// //             fetchData()
// //  }, [])

// //  useEffect(() => {
// //         const fetchData = async () => {
// //             const res = await axios.get("/erpVendor")
// //             setErpData(res.data)
// //         }
// //         fetchData()
// // }, [])

// // const handleChange = (event) => {
// //         setIndustryName(event.target.value); 
// //         setErpVendor(event.target.value);
// //       }

//   return (
//     <div>
//         <div className='container'>
         
//               <div className='col-md-12'>
//                {(params.id==null)? <h3>Create Organisation Profile</h3> : <h3>Update Organisation Profile {params.id}</h3> } 
//                 <form onSubmit={handleSubmit}>
//                 <div className='row'>
             
//                     <div className='col-md-6'>
//                         <div className='mb-3 mt-3'>
//                             <input type="text" placeholder='enter legalName' name="legalName" value={formData.legalName} onChange={handleInput}  className='form-control' />
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3 mt-3'>
//                             <input type="text" placeholder='enter parentName'name="parentName" value={formData.parentName} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="text" placeholder='enter crmName' name="crmName" value={formData.crmName} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                         <input type="text" placeholder='enter industryName' name="industryName" value={formData.industryName} onChange={handleInput}  className='form-control'/>

//                         {/* <select className="form-control" onChange={handleChange}>
//                                     <option value="0">choose industryName</option>
//                                     {industryData.map((industry) => (
//                                     <option key={industry._id} >{industry.industryName}</option>
//                                     ))}
//                                 </select> */}
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="Number" placeholder='enter noOfEmployeesName'name="noOfEmployees" value={formData.noOfEmployees} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
                  
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="Number" placeholder='enter turn over range' name="turnOverRange" value={formData.turnOverRange} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="text" placeholder='enter website url' name="websiteUrl" value={formData.websiteUrl} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="text" placeholder='enter organisation email'name="orgEmail" value={formData.orgEmail} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="Number" placeholder='enter Phone Number'name="phnNumber" value={formData.phnNumber} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div> <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="text" placeholder='enter address'name="address" value={formData.address} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div> <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="text" placeholder='enter orgAddInfo'name="orgAddInfo" value={formData.orgAddInfo} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div> <div className='col-md-6'>
//                         <div className='mb-3'>
//                         <input type="text" placeholder='enter erpVendor' name="erpVendor" value={formData.erpVendor} onChange={handleInput}  className='form-control'/>

//                         {/* <select className="form-control" onChange={handleChange}>
//                                         <option value="0">choose erpVendor</option>
//                                         {erpData.map((vendor) => (
//                                             <option key={vendor._id} >{vendor.erpVendor}</option>
//                                         ))}
//                                   </select>                     */}
//                             </div>
//                     </div> 
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="Number" placeholder='enter year' name="year"value={formData.year} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='mb-3'>
//                             <input type="text" placeholder='enter erpAddInfo' name="erpAddInfo" value={formData.erpAddInfo} onChange={handleInput}  className='form-control'/>
//                         </div>
//                     </div>
//                     <div className='col-md-12'>
//                      {(params.id==null)?<button type="submit" className='btn btn-primary'>Save</button>
//                     :<button type="submit" className='btn btn-primary'>Update</button> }                     
//                     </div>
                   
//                </div>
//              </form>
//             </div>
//         </div>
//     </div>
//   )
// }






import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {  useNavigate ,useParams} from 'react-router-dom';


export const CreateOrgProfile = () => {

  
    const [legalName, setLegalName] = useState("")
    const [parentName, setParentName] = useState("")
    const [crmName, setCrmName] = useState("")
    const [industryName, setIndustryName] = useState("")
    const [noOfEmployees, setNoOfEmployees] = useState("")
    const [turnOverRange, setTurnOverRange] = useState("")
    const [websiteUrl, setWebsiteUrl] = useState("")
    const [orgEmail, setOrgEmail] = useState("")
    const [phnNumber, setPhnNumber] = useState("")
    const [address, setAddress] = useState("")
    const [orgAddInfo, setOrgAddInfo] = useState("")
    const [erpVendor, setErpVendor] = useState("")
    const [year, setYear] = useState("")
    const [erpAddInfo, setErpAddInfo] = useState("")
    const [industryData, setIndustryData] = useState([{}])
    const [erpData, setErpData] = useState([{}])
  
    const params=useParams()
    console.log(params.legalName)
    console.log(params.contactName)
    console.log(legalName)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            
        if(params.id==null){
            if (industryName.length == 0) {
                    window.alert("industryName is missing")
                } else {
                      if (erpVendor.length == 0) {
                        window.alert("erp vendor details are missing")
                      } 
                         else{
                           const res = await axios.post("/organisation/",
                           {
                            legalName,parentName, crmName, industryName, noOfEmployees,
                            turnOverRange, websiteUrl, orgEmail, phnNumber, address,
                            orgAddInfo, erpVendor, year, erpAddInfo
                          })
                             console.log(res.data)
                             navigate(`/viewOrgProfile/${legalName}`)

                        }
                    }
                }else{
                    const {value1}=await axios.put(`/organisation/${params.id}`,{
                        legalName,parentName, crmName, industryName, noOfEmployees,
                        turnOverRange, websiteUrl, orgEmail, phnNumber, address,
                        orgAddInfo, erpVendor, year, erpAddInfo
                        })

                    const {value}=await axios.put(`/organisation/${params.id}`,{
                    legalName,parentName, crmName, industryName, noOfEmployees,
                    turnOverRange, websiteUrl, orgEmail, phnNumber, address,
                    orgAddInfo, erpVendor, year, erpAddInfo
                    })
                    console.log(value)
                    navigate(`/viewOrgProfile/${legalName}`)
                }
        } catch (error) {
            window.alert("something went wrong")
        }
    } 
 useEffect(()=>{
        const getUser=async()=>{
       const reqData=await axios.put(`/organisation/${params.id}`)
       setLegalName(reqData.data.data.legalName)
       setParentName(reqData.data.data.parentName)
       setCrmName(reqData.data.data.crmName)
       setIndustryName(reqData.data.data.industryName)
       setNoOfEmployees(reqData.data.data.noOfEmployees)
       setTurnOverRange(reqData.data.data.turnOverRange)
       setWebsiteUrl(reqData.data.data.websiteUrl)
       setOrgEmail(reqData.data.data.orgEmail)
       setPhnNumber(reqData.data.data.phnNumber)
       setAddress(reqData.data.data.address)
       setOrgAddInfo(reqData.data.data.orgAddInfo)
       setErpVendor(reqData.data.data.erpVendor)
       setYear(reqData.data.data.year)
       setErpAddInfo(reqData.data.data.erpAddInfo)
       //setIndustryData(reqData.data.industryData)

        }
        getUser()
},[params.id])

useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/industry")
            setIndustryData(res.data)
        }
        fetchData()
    }, [])

const handleChange = (event) => {
        setIndustryName(event.target.value);
    }
const handleCity=(event)=>{
    setAddress(event.target.value)
}

//erp data
useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/erpVendor")
            setErpData(res.data)
        }
        fetchData()
    }, [])

const handleErp = (event) => {
        setErpVendor(event.target.value);
    }

     return (
        <div className='organisationProfile'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        {(params.id==null)?<center><h3> Create Organisation Profile</h3></center> :<center> <h3> Update {params.id}  Profile </h3></center> }<hr/>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'> 
                                    <label>legal Name : </label>
                             
                                      <input type="text"
                                    placeholder='Enter legal Name'
                                    value={legalName}
                                    onChange={(e) =>setLegalName(e.target.value)}
                                    name="name"
                                    className="form-control" />
                               
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className='mb-3'>
                            <label>Parent Name : </label>

                                <input type="text"
                                    placeholder='enter Parent Name'
                                    value={parentName}
                                    onChange={(e) => setParentName(e.target.value)}
                                    name="parentName"
                                    className="form-control" />
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className='mb-3'>
                            <label>CRM Name : </label>

                                <input type="text"
                                    placeholder='enter CRM Name '
                                    value={crmName}
                                    onChange={(e) => setCrmName(e.target.value)}
                                    name="crmName"
                                    className="form-control" />
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className="mb-3">
                            <label>Industry Name : </label>

                                <select className="form-control" onChange={handleChange}>
                                    <option value="0">choose industryName</option>
                                    {industryData.map((industry) => (
                                        <option key={industry._id} >{industry.industryName}</option>
                                    ))}
                                </select>
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className="mb-3">
                            <label>No of Employees  : </label>

                                <input type="Number"
                                    placeholder='Enter no of employees'
                                    value={noOfEmployees}
                                    onChange={(e) => setNoOfEmployees(e.target.value)}
                                    className="form-control" />
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className="mb-3">
                            <label>TurnOver Range  : </label>

                                <input type="Number"
                                    placeholder='Enter turn over range'
                                    value={turnOverRange}
                                    onChange={(e) => setTurnOverRange(e.target.value)}
                                    className="form-control" />
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className="mb-3">
                            <label>Website Url  : </label>

                                <input type="text"
                                    placeholder='Enter website url'
                                    value={websiteUrl}
                                    onChange={(e) => setWebsiteUrl(e.target.value)}
                                    className="form-control" />
                            </div>
                            </div>
                            <div className='col-md-6'>

                            <div className="mb-3">
                            <label>Email Id : </label>

                                <input type="email"
                                    placeholder='Enter orgEmail '
                                    value={orgEmail}
                                    onChange={(e) => setOrgEmail(e.target.value)}
                                    className="form-control" />
                            </div>
                            </div>
                            <div className='col-md-6'>

                           
                                <div className="mb-3">
                                <label>Phone Number : </label>

                                    <input type="Number"
                                        placeholder='Enter  phone number '
                                        value={phnNumber}
                                        onChange={(e) => setPhnNumber(e.target.value)}
                                        className="form-control" />
                                </div>
                                </div>
                                <div className='col-md-6'>

                                <div className="mb-3">
                                <label>Address : </label>

                     <select className="form-control" onChange={handleCity}>
                        <option value="0">Choose City</option>
                          <option >Telangana</option>
                          <option >Karnataka</option>
                          <option >Chennai</option>
                          <option >Chattisgarh</option>
                          <option >Karnataka</option>
                          <option >Mumbai</option>
                          <option >Delhi</option>
                          <option >Orissa</option>
                          <option >Rajasthan</option>
                          <option >Assam</option>
                          <option >Arunachal Pradesh</option>
                          <option >tripura</option>
                          <option >Assam</option>
                        </select>
                                </div>
                                </div>
                                <div className='col-md-6'>

                                <div className="mb-3">
                                <label> Organisation Add Info : </label>

                                    <input type="text"
                                        placeholder='Enter orgAddInfo '
                                        value={orgAddInfo}
                                        onChange={(e) => setOrgAddInfo(e.target.value)}
                                        className="form-control" />
                                </div>
                                </div>
                                <div className='col-md-6'>

                                <div className="mb-3">
                                <label>Erp Vendor  : </label>


                                    <select className="form-control" onChange={handleErp}>
                                        <option value="0">choose erpVendor</option>
                                        {erpData.map((vendor) => (
                                            <option key={vendor._id} >{vendor.erpVendor}</option>
                                        ))}
                                    </select>
                              

                                </div>
                                </div>
                                <div className='col-md-6'>

                                <div className="mb-3">
                                <label>Year  : </label>

                                    <input type="Number"
                                        placeholder='Enter year '
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        className="form-control" />
                                </div>
                                </div>
                                <div className='col-md-6'>

                                <div className="mb-3">
                                <label>Erp AddInfo  : </label>

                                    <input type="erpAddInfo"
                                        placeholder='Enter erpAddInfo '
                                        value={erpAddInfo}
                                        onChange={(e) => setErpAddInfo(e.target.value)}
                                        className="form-control" />
                                </div>
                                </div>
                                <div className='col-md-6'>

                            <div className="mb-3">
                                {(params.id==null)?<button type="submit" className='btn btn-primary'>Save</button>
                                :<button type="submit" className='btn btn-primary'>Update</button> } 
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

