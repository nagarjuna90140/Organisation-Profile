import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import { useNavigate } from 'react-router-dom';

import { ViewOrganisation } from '../../auth/viewOrganisation'


export const OrgProfile = () => {
const [data,setData]=useState([])
const [perPage,setPerPage]=useState([])
const [auth,setAuth]=useAuth()

const params=useParams()
const navigate=useNavigate()

//get details
const searchDetails = async () => {
    const data1 = await axios.get(`/organisation/get/legalName/${params.legalName}`)
  setData(data1.data)
  setPerPage(data1.data.slice(0, 5))

}

useEffect(() => {
    searchDetails()
}, [params.legalName])

//page handler
let pageNumber=[]
for (let i=1;i<Math.ceil(data.length/5)+1;i++){
    pageNumber.push(i)
}   
 const pageHandler = async (pageNumber) => {
    setPerPage(data.slice((pageNumber * 5) - 5, pageNumber * 5))
}
//file upload handler
const fileUploadhandler=async()=>{
    navigate("/uploadFile")
}

//delete
// const handleDelete = async (_id) => {
//             try {
//                 const data1 = await axios.delete(`/organisation/${_id}`)
//             } catch (error) {
//                 console.log(error)
//             }
//             handleDelete()
//         }

  return (
  <div>
        <ViewOrganisation/>

        <div>
             <button className='btn btn-primary mb-4 mx-3'>Edit org Profile</button>
             <button onClick={fileUploadhandler} className='btn btn-warning mb-4 mx-3'>Manage org doc</button>
             <button className='btn btn-success mb-4 mx-3'>Back to search results</button>
       </div>
        <div  className=''>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-responsive  table-bordered table-striped'>
                            <thead className=''>
                                <tr>
                                    <th>legalName</th>
                                    <th>industryName</th>
                                    <th>Address</th>
                                    <th>erpVEndor</th>
                                   {(auth?.user?.role==="Admin")?<th>Action</th>:<></>} 
                                </tr>
                            </thead>
                             {
                                perPage.map((org) => {
                                    const { legalName, industryName, address, erpVendor } = org;
                                    return (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{legalName}</td>
                                                    <td>{industryName}</td>
                                                    <td>{address}</td>
                                                    <td>{erpVendor}</td>
                                                    <td className='btn-group '>
                                                    {(auth?.user?.role==="Admin")?<Link to={`/updateOrgProfile/${org._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>:<></>} 
                                                        {/* <button className='btn btn-danger  w-25 ' onClick={() => handleDelete(org._id)}>Delete</button> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                            <Link to={`/createOrgProfile`} className='btn btn-success w-25 mt-5  ' >Create</Link>
                        </table>
                            
                        </div>
                    </div>
                </div>   
        </div>
        <div>
               <div>
                 <button className=' btn btn-primary nextpage' >Prev</button>
               </div>

               {pageNumber.map((page) => (
                     <>
                         <div className='pagebutton' onClick={() => pageHandler(page)}>{page}</div>
                     </>
                 ))}
                 <div> 
                    <button className=' btn btn-primary nextpage' >Next</button>
                </div>

            </div>
  </div>
  )
}
