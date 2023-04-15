import axios from 'axios'
import React, { useState } from 'react'


export const Industry = () => {


const [industryName,setIndustryName]=useState("")

    const handleSubmit=async(e)=>{
      
        e.preventDefault()

    const res=await axios.post("/industry/",
    {industryName})
    console.log(res.data)

} 
      
       
    

  return (
    <div>
        
      
                <div className='col-sm-5'>
                    <div className='card m-3'>
                <div className='register'>
                    <h1>Create Industry Sector</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input type="text"
                                placeholder='Enter legal Name'
                                value={industryName}
                                onChange={(e)=>setIndustryName(e.target.value)}
                                name="name"
                                className="form-control"  />
                        </div>
                        

                       <center> <button type="submit" className='btn btn-primary col-sm-5'>Save</button></center>
                     
                    </form>
                    </div>
                </div>
              
            </div>
        
    </div>
  )
}

