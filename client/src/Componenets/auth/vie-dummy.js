// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

// export const ViewOrganisation = () => {
//     const [orgProfile,setOrgProfile]=useState(true)
//     const [orgContact,setOrgContact]=useState(true)
//     const [erpImplimentation,setErpImplimentation]=useState(true)
//     const [amsPartners,setAmsPartners]=useState(true)
//     const [business,setBusiness]=useState(true)
//     const [data,setData]=useState([])
//     const [orgCont,setOrgCont]=useState([])
//     const params=useParams()

// //change organisation profile
// const changeHandler=async()=>{
//     setOrgContact(false)
//     setErpImplimentation(false)
//     setAmsPartners(false)
//     setBusiness(false)
//     if(orgProfile==true){
//        setOrgProfile(false)
        
//     }else{
//         setOrgProfile(true)
//     }
// }
// //change contact
// const changeContact=()=>{
//     setOrgProfile(false)
//     setErpImplimentation(false)
//     setAmsPartners(false)
//     setBusiness(false)
//     if(orgContact==true){
//        setOrgContact(false)
    
//     }else{
//         setOrgContact(true)
//     }
// }
// //change erp details
// const changeErp=()=>{
//     setOrgProfile(false)
//     setOrgContact(false)
//     setAmsPartners(false)
//     setBusiness(false)
//     if(erpImplimentation==true){
//         setErpImplimentation(false)
//     }else{
//         setErpImplimentation(true)

//     }
// }
// //change ams partners

// const changeAms=()=>{
//     setOrgProfile(false)
//     setOrgContact(false)
//     setErpImplimentation(false)
//     setBusiness(false)
//  if(amsPartners==true){
//         setAmsPartners(false)

//     }else{
//         setAmsPartners(true)

//     }
// }

// //change business
// const changeBusiness=()=>{
//     setOrgProfile(false)
//     setOrgContact(false)
//     setErpImplimentation(false)
//     setAmsPartners(false)
//     if(business==true){
//         setBusiness(false)

//     }else{
//         setBusiness(true)

//     }
// }
// //get details
// const searchDetails = async () => {
//     const data1 = await axios.get(`/organisation/get/${params.legalName}`)
//     setData(data1.data)
// }
// useEffect(() => {
//     searchDetails()
// }, [])
// const handleDelete = async (_id) => {
//             try {
//                 const data1 = await axios.delete(`/organisation/${_id}`)
//             } catch (error) {
//                 console.log(error)
//             }
//             handleDelete()
//         }

// //get organisation contact details 
// const searchOrgContactDetails = async () => {
    
//     const data2 = await axios.get(`/orgContact/get/legalName/${params.legalName}`)
//     setOrgCont(data2.data)
// }
// useEffect(() => {
//     searchOrgContactDetails()
// }, [])
 
//   return (
//     <div>
//        <h3>Organisation proile info of : {params.legalName}</h3>
//        <div>
//             <button className='btn btn-primary'>Edit org Profile</button>
//             <button className='btn btn-warning'>Manage org doc</button>
//             <button className='btn btn-success'>Back to search results</button>
//        </div>
//        <div className='orgDetails'>
//          <Link className='orgDetailsOne' onClick={changeHandler}>org profile ||</Link>
//          <Link className='orgDetailsOne'onClick={changeContact}>org contact ||</Link>
//          <Link className='orgDetailsOne'onClick={changeErp} >Erp Implimentation ||</Link>
//          <Link className='orgDetailsOne' onClick={changeAms} >Ams partners ||</Link>
//          <Link className='orgDetailsOne' onClick={changeBusiness}>Business opportunities</Link>
//        </div>
//        <div>
//         {(orgProfile==true)?
//         <div>
//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-sm'>
//                         <table className='table table-responsive   table-bordered table-striped'>
//                             <thead className=''>
//                                 <tr>
//                                     <th>legalName</th>
//                                     <th>industryName</th>
//                                     <th>Address</th>
//                                     <th>erpVEndor</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                              {
//                                 data.map((org) => {
//                                     const { legalName, industryName, address, erpVendor } = org;
//                                     return (
//                                         <>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>{legalName}</td>
//                                                     <td>{industryName}</td>
//                                                     <td>{address}</td>
//                                                     <td>{erpVendor}</td>
//                                                     <td className='btn-group '>
//                                                         <Link to={`/updateOrgProfile/${org._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>
//                                                         <button className='btn btn-danger  w-25 ' onClick={() => handleDelete(org._id)}>Delete</button>
//                                                     </td>
//                                                 </tr>
//                                             </tbody>
//                                         </>
//                                     )
//                                 })
//                             }
//                             <Link to={`/createOrgProfile`} className='btn btn-success w-25 mt-5  ' >Create</Link>
//                         </table>
                            
//                         </div>
//                     </div>
//                 </div>   
//         </div>
//          :<></> }
//          <div>
//             {(orgContact==true)?<div>
                

//                 <Link to={`/addnewContact/${legal}`} className='btn btn-success'>Add new contact</Link>
//                 <div>
//                     <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-sm'>
//                         <table className='table table-responsive   table-bordered table-striped'>
//                             <thead className=''>
//                                 <tr>
//                                     <th>ContactName</th>
//                                     <th>Designation</th>
//                                     <th>Email</th>
//                                     <th>Role</th>
//                                     <th>LinkedIn</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             {
//                                 orgCont.map((orgContact)=>{
//                                     const { contactName, designation, email, role ,LinkedIn} = orgContact;

//                                     return (
//                                         <>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>{contactName}</td>
//                                                     <td>{designation}</td>
//                                                     <td>{email}</td>
//                                                     <td>{role}</td>
//                                                     <td>{LinkedIn}</td>
                                                  
//                                                     {/* <td className='btn-group '>
//                                                         <Link to={`/updateOrgProfile/${org._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>
//                                                         <button className='btn btn-danger  w-25 ' onClick={() => handleDelete(org._id)}>Delete</button>
//                                                     </td> */}
//                                                 </tr>
//                                             </tbody>
//                                         </>
//                                     )
//                                 })
//                             }
//                             </table>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             </div>:<h3><></></h3>}
//          </div>
//        </div>
//     </div>
//   )
// }



//**********************************************************************1st method********************* */


// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'


// export const ViewOrganisation = () => {
//     const [data, setData] = useState([])
//     const [perPage, setPerPage] = useState([])
//     const [searchData, setSearchData] = useState([{}])
//     const params = useParams()
// //searching details .........
// const searchDetails = async () => {
//     const data1 = await axios.get(`/organisation/search/${params.legalName}/${params.industryName}`)
//     setSearchData(data1.data.val)
// }
// useEffect(() => {
//     searchDetails()
// }, [])


//     const getAllOrgProfiles = async () => {
//         const data = await axios.get("/organisation")
//         setData(data.data);
//         setPerPage(data.data.slice(0, 5))
//     }
//     useEffect(() => {
//         getAllOrgProfiles();
//     }, [])
//     //pageHandler for pagination
//     let pageNumber = []
//     for (let i = 1; i < Math.ceil(data.length / 5) + 1; i++) {
//         pageNumber.push(i)
//     }
//     const pageHandler = async (pageNumber) => {
//         setPerPage(data.slice((pageNumber * 5) - 5, pageNumber * 5))
//     }



//     //Delete Organisation Profile
//     const handleDelete = async (_id) => {
//         try {
//             const data1 = await axios.delete(`/organisation/${_id}`)
//         } catch (error) {
//             console.log(error)
//         }
//         handleDelete()
//     }
//     useEffect(() => {
//         handleDelete();
//     }, [handleDelete])


//     return (
//         <>
//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-sm'>
//                         <table className='table table-responsive   table-bordered table-striped'>
//                             <thead className=''>
//                                 <tr>
//                                     <th>legalName</th>
//                                     <th>industryName</th>
//                                     <th>Address</th>
//                                     <th>erpVEndor</th>
//                                 </tr>
//                             </thead>
//                             {
//                                 perPage.map((org) => {
//                                     const { legalName, industryName, address, erpVendor } = org;
//                                     return (
//                                         <>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>{legalName}</td>
//                                                     <td>{industryName}</td>
//                                                     <td>{address}</td>
//                                                     <td>{erpVendor}</td>
//                                                     <td className='btn-group '>
//                                                         <Link to={`/updateOrgProfile/${org._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>
//                                                         <button className='btn btn-danger  w-25 ' onClick={() => handleDelete(org._id)}>Delete</button>
//                                                     </td>
//                                                 </tr>
//                                             </tbody>
//                                         </>
//                                     )
//                                 })
//                             }
//                             <Link to={`/createOrgProfile`} className='btn btn-success w-25 mt-5  ' >Create</Link>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div> <button className='nextpage' onClick={() => setPerPage(pageNumber - 1)}>Prev</button></div>
//                 {pageNumber.map((page) => (
//                     <>

//                         <div className='pagebutton' onClick={() => pageHandler(page)}>{page}</div>
//                     </>
//                 ))}

//             </div>
//             <div><button className='nextpage' onClick={() => setPerPage(pageNumber + 1)}>Next</button></div>
//         </>

//     )
// }



