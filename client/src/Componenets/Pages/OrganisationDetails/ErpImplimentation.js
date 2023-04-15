import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';



import { ViewOrganisation } from '../../auth/viewOrganisation'


export const ErpImplimentation = () => {
    const [erpImplimentation,setErpImplimentation]=useState([])
    const [perPage,setPerPage]=useState([])
    const [auth,setAuth]=useAuth()


    const params=useParams()
    const navigate=useNavigate()   
    //get organisation contact details 
  const searchErpImplimentation = async () => {
      
      const data2 = await axios.get(`/erpPartner/get/legal/${params.legalName}`)
      setErpImplimentation(data2.data)
      setPerPage(data2.data.slice(0, 5))

  }
//page handler
let pageNumber=[]
for (let i=1;i<Math.ceil(erpImplimentation.length/5)+1;i++){
    pageNumber.push(i)
}   
 const pageHandler = async (pageNumber) => {
    setPerPage(erpImplimentation.slice((pageNumber * 5) - 5, pageNumber * 5))
}
  useEffect(() => {
    searchErpImplimentation()
  }, [params.legalName])
  return (
    <div>
        <ViewOrganisation/>
        <Link to={`/addNewErpPartner/${params.legalName}`} className='btn btn-success mb-4 mx-3'>Add  New Erp Partner</Link>

        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-responsive   table-bordered table-striped'>
                            <thead className=''>
                                <tr>
                                    <th>PartnerName</th>
                                    <th>Add Info1</th>
                                    <th>Add Info2</th>
                                    <th>implementationYear</th>
                                   {(auth?.user?.role==="Admin")? <th>Action</th>:<></>}
                                </tr>
                            </thead>
                            {
                                perPage.map((erpImp)=>{
                                    const { partnerName, addInfo1, addInfo2, implementationYear } = erpImp;

                                    return (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{partnerName}</td>
                                                    <td>{addInfo1}</td>
                                                    <td>{addInfo2}</td>
                                                    <td>{implementationYear}</td>
                                                   
                                                  
                                                    <td className='btn-group '>
                                                    {(auth?.user?.role==="Admin")?<Link to={`/updateErpPartner/${params.legalName}/${erpImp.partnerName}`} className='btn btn-primary w-25 m-x ' >Edit</Link>:<></>} 
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
                 <button className='btn btn-primary nextpage'  >Prev</button>
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
