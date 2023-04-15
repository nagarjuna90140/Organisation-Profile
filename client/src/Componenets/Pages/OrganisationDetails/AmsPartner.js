import React,{useState,useEffect} from 'react'
import { ViewOrganisation } from '../../auth/viewOrganisation'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';

import axios from 'axios';

const AmsPartner = () => {
  const [amsPartner,setAmsPartner]=useState([])
  const [perPage,setPerPage]=useState([])
  const [auth,setAuth]=useAuth()


  const params=useParams()
 
  //get organisation contact details 
const searchAmsPartner = async () => {
    
    const data2 = await axios.get(`/amsPartner/get/legal/${params.legalName}`)
    setAmsPartner(data2.data)
    setPerPage(data2.data.slice(0, 5))

}
useEffect(() => {
    searchAmsPartner();
}, [])

//page handler
let pageNumber=[]
for (let i=1;i<Math.ceil(amsPartner.length/5)+1;i++){
    pageNumber.push(i)
}   
 const pageHandler = async (pageNumber) => {
    setPerPage(amsPartner.slice((pageNumber * 5) - 5, pageNumber * 5))
}
  return (
    <div>
    <ViewOrganisation/>
    <Link to={`/addNewAmsPartner/${params.legalName}`} className='btn btn-success mb-4 mx-3'>Add New Ams Partner</Link>
                <div>
                    <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-responsive   table-bordered table-striped'>
                            <thead className=''>
                                <tr>
                                    <th>Partner Name</th>
                                    <th>partnerAddInfo1</th>
                                    <th>partnerAddInfo2</th>
                                    <th>AmsExpireyDate</th>
                                    {(auth?.user?.role==="Admin")? <th>Action</th>:<></>}
                                </tr>
                            </thead>
                            {
                                perPage.map((ams)=>{
                                    const { partnerName, partnerAddInfo1, partnerAddInfo2, AmsExpireyDate } = ams;
                                    
                                    return (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{partnerName}</td>
                                                    <td>{partnerAddInfo1}</td>
                                                    <td>{partnerAddInfo2}</td>
                                                    <td>{AmsExpireyDate}</td>
                                                
                                                  
                                                    <td className='btn-group '>
                                                    {(auth?.user?.role==="Admin")?<Link to={`/updateAmsPartner/${params.legalName}/${ams.partnerName}`} className='btn btn-primary w-25 m-x ' >Edit</Link>:<></>} 
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div>
               <div>
                 <button className=' btn btn-primary nextpage' onClick={() => setPerPage(pageNumber - 1)}>Prev</button>
               </div>

               {pageNumber.map((page) => (
                     <>
                         <div className=' btn btn-primary pagebutton' onClick={() => pageHandler(page)}>{page}</div>
                     </>
                 ))}
                 <div> 
                    <button className=' btn btn-primary nextpage' onClick={() => setPerPage(pageNumber + 1)}>Next</button>
                </div>

            </div>
            </div>
        
   
  )   
  
}

export default AmsPartner