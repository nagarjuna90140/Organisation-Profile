import React,{useState,useEffect} from 'react'
import { ViewOrganisation } from '../../auth/viewOrganisation'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import axios from 'axios';

const OrgContact = () => {
  const [orgCont,setOrgCont]=useState([])
  const [perPage,setPerPage]=useState([])
  const [auth,setAuth]=useAuth()
  const params=useParams()
 
  //get organisation contact details 
const searchOrgContactDetails = async () => {
    
    const data2 = await axios.get(`/orgContact/get/legal/${params.legalName}`)
    setOrgCont(data2.data)
    setPerPage(data2.data.slice(0, 5))

}
useEffect(() => {
    searchOrgContactDetails()
}, [params.legalName])
//page handler
let pageNumber=[]
for (let i=1;i<Math.ceil(orgCont.length/5)+1;i++){
    pageNumber.push(i)
}   
 const pageHandler = async (pageNumber) => {
    setPerPage(orgCont.slice((pageNumber * 5) - 5, pageNumber * 5))
       }

function pageNavigate(){
  
    setPerPage(pageNumber-1)
}
  return (
    <div className='orgContact'>
    <ViewOrganisation/>
    <Link to={`/addnewContact/${params.legalName}`} className='btn btn-success mb-4 mx-3'>Add new contact</Link>
                <div>
                    <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className="table table-hover table-striped table-bordered">
                            <thead className="bg-primary">
                                <tr>
                                    <th>ContactName</th>
                                    <th>Designation</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>LinkedIn</th>
                                   {(auth?.user?.role==="Admin")?<th>Action</th>:<></>} 
                                </tr>
                            </thead>
                            {
                                perPage.map((orgContact)=>{
                                    const { contactName, designation, email, role ,LinkedIn,legalName} = orgContact;

                                    return (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{contactName}</td>
                                                    <td>{designation}</td>
                                                    <td>{email}</td>
                                                    <td>{role}</td>
                                                    <td>{LinkedIn}</td>
                                                  
                                                    <td className='btn-group'>
                                               
                                                     {(auth?.user?.role==="Admin")?<><Link to={`/update/${orgContact.legalName}/${orgContact.contactName}`} className='btn btn-primary '>Edit</Link></>:<></>} 
                                                 
                                                        {/* <Link to={`/update/${orgContact.legalName}/${orgContact.contactName}`} className='btn btn-primary ' >Edit</Link> */}
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
                 <button className=' btn btn-primary nextpage' >Prev</button>
               </div>

               {pageNumber.map((page) => (
                     <>
                         <div className='pagebutton' onClick={() => pageHandler(page)}>{page}</div>
                     </>
                 ))}
                 <div> 
                    <button className='btn btn-primary nextpage' >Next</button>
                </div>

            </div>

     </div>
        
   
  )   
  
}

export default OrgContact