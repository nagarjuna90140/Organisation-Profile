import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import { ViewOrganisation } from '../../auth/viewOrganisation'

export const BusinessOpportunity = () => {
    const [businessOpportunity,setBusinessOpportunity]=useState([])
    const [perPage,setPerPage]=useState([])
    const [auth,setAuth]=useAuth()


    const params=useParams()
    
   
//get organisation contact details 
  const searchBusinessOpportunity = async () => {
     const data2 = await axios.get(`/business/get/by/legalName/${params.legalName}`)
       setBusinessOpportunity(data2.data)
        setPerPage(data2.data.slice(0, 5)) 
  }
  useEffect(() => {
    searchBusinessOpportunity()
  }, [params.legalName])

  //page handler
let pageNumber=[]
for (let i=1;i<Math.ceil(businessOpportunity.length/5)+1;i++){
    pageNumber.push(i)
}   
 const pageHandler = async (pageNumber) => {
    setPerPage(businessOpportunity.slice((pageNumber * 5) - 5, pageNumber * 5))
}
  return (
    <div>
        <ViewOrganisation/>
        <Link to={`/addNewBusinessOpp/${params.legalName}`} className='btn btn-success mb-4 mx-3'>Add  New Business Opportunity</Link>

        <div>
            <div >

          
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-responsive   table-bordered table-striped'>
                            <thead className=''>
                                <tr>
                                    <th>Opportunity Type</th>
                                    <th>Software Technology</th>
                                    <th>Date</th>
                                    <th>Opportunity AddInfo</th>
                                    <th>ST AddInfo</th>
                                    {(auth?.user?.role==="Admin")? <th>Action</th>:<></>}
                                </tr>
                            </thead>
                            {
                                perPage.map((businessOpp)=>{
                                    const { opportunityType, softwareTechnology, date, opportunityAddInfo,stAddInfo } = businessOpp;

                                    return (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{opportunityType}</td>
                                                    <td>{softwareTechnology}</td>
                                                    <td>{date}</td>
                                                    <td>{opportunityAddInfo}</td>
                                                    <td>{stAddInfo}</td>
                                                   
                                                  
                                                    <td className='btn-group '>
                                                    {(auth?.user?.role==="Admin")?<Link to={`/updateBusinessOpp/${params.legalName}/${businessOpp._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>:<></> }  
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
                    <button className=' btn btn-primary nextpage' >Next</button>
                </div>

            </div>
      </div>
    </div>
  )
}
