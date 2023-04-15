import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const SearchOrgProfile = () => {
    const navigate=useNavigate()
const [legalName, setLegal] = useState("")
const [industryName, setIndustryName] = useState([])
const [industryData, setIndustryData] = useState([{}])
const [address,setAddress]=useState([])

    const handleChange = (event) => {
        setIndustryName(event.target.value);
    }

    const handleCity=(event)=>{
        setAddress(event.target.value)
    }
   
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/industry")
            setIndustryData(res.data)
        }
        fetchData()
    }, [])
 const searchHandler=(e)=>{
    e.preventDefault()
    try {
        if(legalName.length===0 && industryName.length===0 && address.length===0){
                navigate(`/manageOrgProfile/`)
        }
       else if(legalName.length!=0 && industryName.length===0 && address.length===0){
           navigate(`/manageOrgProfile/${legalName}`)
       }
       else if(legalName.length===0 && industryName.length!=0 && address.length===0){
              navigate(`/manageOrgProfile/${industryName}`)
       }
      else if(legalName.length===0 && industryName.length===0 && address.length!=0){
                    navigate(`/manageOrgProfile/${address}`)
         }
     else if(legalName.length!=0 && industryName.length!=0 && address.length===0){
                navigate(`/manageOrgProfile/${legalName}/${industryName}`)
         }
    else if(legalName.length!=0 && industryName.length===0 && address.length!=0){
                navigate(`/manageOrgProfile/${legalName}/${address}`)
                }
    else if(legalName.length===0 && industryName.length!=0 && address.length!=0){
                navigate(`/manageOrgProfile/${industryName}/${address}`)
                }
    else if(legalName.length!=0 && industryName.length!=0 && address.length!=0){
            navigate(`/manageOrgProfile/${legalName}/${industryName}/${address}`)
            }
       
    
    } catch (error) {
        console.log(error)
    }
   
 }

  return (
<div>

<center><h3 className='searchH3'>Search Organisation Profile</h3></center>
    <div className='searchOrganisation'>
        
        <div className='container'>
           <div className='row'>
             <div className='col-md-12'>
               <form>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <input type="text"className='form-control' placeholder='Enter legalName'  onChange={(e) => setLegal(e.target.value)} />
                            </div>
                       </div>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                        <select className="form-control" onChange={handleChange}>
                            <option value="0">Choose industryName</option> 
                                    {industryData.map((industry) => (
                                    <option key={industry._id} >{industry.industryName}</option>
                        ))}  
                        </select>
                      </div>
                    </div>
                <div className='col-md-6'>
                    <div className='mb-3'>
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
                    <div className='mb-3'>
                 <button className='btn btn-success' onClick={searchHandler}>Search</button> 
                </div>
                 </div>
              
            </form>
            </div>
         </div>
        </div>
    </div>
</div>
  )

}











