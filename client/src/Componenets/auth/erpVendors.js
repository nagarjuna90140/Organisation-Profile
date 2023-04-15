import axios from 'axios'
import React, { useState } from 'react'

export const ErpVendor = () => {
    const [erpVendor, setErpVendor] = useState("")
    const handleSubmit = async (e) => {

        e.preventDefault()

        const res = await axios.post("/erpVendor/",
            { erpVendor })

        console.log(res.data)


    }
    return (
        <div>


            <div className='col-sm-5'>
                <div className='card m-3'>
                    <div className='register'>
                        <h1>Create erpVendor </h1>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <input type="text"
                                    placeholder='Enter erpVendor Name'
                                    value={erpVendor}
                                    onChange={(e) => setErpVendor(e.target.value)}
                                    name="erpVendor"
                                    className="form-control" />
                            </div>


                            <center> <button type="submit" className='btn btn-primary col-sm-5'>Save</button></center>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

