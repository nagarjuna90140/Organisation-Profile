import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//import { SearchOrgProfile } from './SearchOrgProfile'

export const Display = () => {
    const [searchData, setSearchData] = useState([])
    const [perPage, setPerPage] = useState([])

    const params = useParams()
   
    const navigate = useNavigate()
    const searchDetails = async () => {
        if (params.legalName == null && params.industryName == null && params.address == null) {
            const data1 = await axios.get(`/organisation/get/all/profiles`)
            setSearchData(data1.data)
            setPerPage(data1.data.slice(0, 5))

        } 
        else if(params.legalName != null && params.industryName != null && params.address != null)
        {
            const data1 = await axios.get(`/organisation/search/${params.legalName}/${params.industryName}/${params.address}`)
            setSearchData(data1.data.val)
            setPerPage(data1.data.val.slice(0, 5))

        }
        else if (params.legalName != null && params.industryName == null && params.address == null){
            
            const data1 = await axios.get(`/organisation/get/legalName/${params.legalName}`)
            setSearchData(data1.data)
            setPerPage(data1.data.slice(0, 5))
          
        }
        else if (params.legalName == null && params.industryName != null && params.address == null){
            
            const data1 = await axios.get(`/organisation/get/industryName/${params.industryName}`)
            console.log(data1.data)
            setPerPage(data1.data.slice(0, 5))
        }
        else if (params.legalName == null && params.industryName == null && params.address != null){
            
            const data1 = await axios.get(`/organisation/getAll/${params.address}`)
           setSearchData(data1.data)
            setPerPage(data1.data.slice(0, 5))
        }
       else if (params.legalName != null && params.industryName != null && params.address == null){
            
            const data1 = await axios.get(`/organisation/search/${params.legalName}/${params.industryName}`)
           setSearchData(data1.data.val)
            setPerPage(data1.data.val.slice(0, 5))
        }

    }
    useEffect(() => {
        searchDetails()
    }, [])

    //page handler
    let pageNumber = []
    for (let i = 1; i < Math.ceil(searchData.length / 5) + 1; i++) {
        pageNumber.push(i)
    }
    const pageHandler = async (pageNumber) => {
        setPerPage(searchData.slice((pageNumber * 5) - 5, pageNumber * 5))
    }

    //delete 
    const handleDelete = async (_id) => {
        const data1 = await axios.delete(`/organisation/${_id}`).then((resp) => {
            window.alert("deleted")
        })

    }

   
    return (
        <>
            <div>
                <center><h3 style={{marginTop:"20px"}}>Search organisation Details</h3></center>
                <Link to={`/searchOrgprofiles`} className='btn btn-success mb-4 mx-3' >New Search</Link>

            </div>
            <div className='conatiner'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-sm table-hover '>
                            <thead className='tableHead'>
                                <th >LegalName</th>
                                <th  >IndustryName</th>
                                <th > Address</th>
                                <th  >ErpVendor</th>
                                <th >Action</th>
                            </thead>
                            {perPage.map((item, index) => {
                                const { legalName, industryName, address, erpVendor, _id } = item
                                return (
                                    <tbody>

                                        <tr key={index}>
                                            <td  >{legalName}</td>
                                            <td >{industryName}</td>
                                            <td  >{address}</td>
                                            <td >{erpVendor}</td>
                                            <td className='btn-group '>
                                                <Link to={`/updateOrgProfile/${item._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>
                                                <button className='btn btn-danger  w-25 ' onClick={() => handleDelete(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
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

            </div>
        </>
    )

}
