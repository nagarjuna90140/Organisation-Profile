
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';




export const DisplayBusinessOpportunities = () => {
    const [businessOpportunity,setBusinessOpportunity]=useState([])
    const [perPage,setPerPage]=useState([])

    const params=useParams()
    console.log(params.legalName)
    
   
    //get organisation contact details 
  const searchBusinessOpportunity = async () => {
    if(params.softwareTechnology==null && params.opportunityType==null && params.legalName==null){
        const data2 = await axios.get(`/business/get`)
        setBusinessOpportunity(data2.data)
        setPerPage(data2.data.slice(0, 5))
    }else if(params.softwareTechnology!=null && params.opportunityType!=null){
        const data2 = await axios.get(`/business/get/${params.softwareTechnology}/${params.opportunityType}`)
        setBusinessOpportunity(data2.data)
        setPerPage(data2.data.slice(0, 5))

    }else if(params.softwareTechnology!=null && params.opportunityType==null){
        const data2 = await axios.get(`/business/get/${params.softwareTechnology}`)
        setBusinessOpportunity(data2.data)
        setPerPage(data2.data.slice(0, 5)) 
    }
      
     

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

        <div>
            <div >
        <center><h2 style={{marginTop:"20px",marginBottom:"20px"}}>Business Opportunities ....Search results</h2></center>
          
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
                                    <th>Action</th>
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
                                                        <Link to={`/updateBusinessOpp/${params.legalName}/${businessOpp.softwareTechnology}`} className='btn btn-primary w-25 m-x ' >Edit</Link>
                                                        <button className='btn btn-danger  w-25 '>Delete</button>
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

