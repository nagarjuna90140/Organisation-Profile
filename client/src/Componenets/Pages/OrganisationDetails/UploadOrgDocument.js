import React, { useState } from 'react'
import axios from 'axios';

export const UploadOrgDocument = () => {
    const [file,setFile]=useState("")
const createFile=async()=>{
const data=await axios.post("/orgDocument/create",{file})
console.log("inserted"+data)
}
  return (
    <div>


    <div className='col-sm-5'>
        <div className='card m-3'>
            <div className='register'>
                <h1>Upload a file  </h1>
                <form onSubmit={createFile}>
                    <div className='mb-3'>
                        <input type="file"
                        value={file}
                            placeholder='Enter erpVendor Name'
                            className="form-control" onChange={(e)=>setFile(e.target.value)} />
                    </div>


                    <center> <button type="submit" className='btn btn-primary col-sm-5'>Save</button></center>

                </form>
            </div>
        </div>

    </div>

</div>
  )
}
