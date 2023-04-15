import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const SearchUser = () => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const navigate=useNavigate()
const handleSearch=async()=>{
  if(name.length===0 && email.length==0){
    navigate('/manageuser/')
  }
  else if(name.length!=0 && email.lengt!=0){
    navigate(`/manageuser/${name}/${email}`)
  }else if(name.length!=0 && email.length===0){
    navigate(`/manageuser/${name}`)

  }
  else if(name.length===0 && email.length!=0){
    navigate(`/manageuser/email/${email}`)

  }
}
//add new user
const addUserHandler=()=>{
  navigate(`/addUser`)
}

  return (
    <div>
      <center><h2 style={{marginTop:"20px",marginBottom:"20px"}}>Search User...</h2></center>
    <div className='searchUser'>
        <div className='col-md-6'>
                <div className=''>
                    <div className='register '>
                        
                        <form onSubmit={handleSearch}>
                          <br></br>
                        
                            <div className='mb-2'>
                                <input type="text"
                                    placeholder='Enter user Name'
                                    onChange={(e)=>setName(e.target.value)}
                                    name="name"
                                    className="form-control" />
                             </div>
                             <div className='mb-2'>
                                <input type="email"
                                    placeholder='Enter user email'
                                    onChange={(e)=>setEmail(e.target.value)}
                                    name="name"
                                    className="form-control" />
                             </div>
                             <div>
                             </div>
                          <div className='buttonHandler'>
                             <button type="submit" className="btn btn-success "> Search</button>
                             </div>
                        </form>
                        <div className='buttonHandler'>
                        <button  className='btn btn-secondary ' >cancel</button>
                        <button onClick={addUserHandler} className='btn btn-primary'>Add user</button> 
                        </div>
                     </div>
                </div>
        </div>
    </div>
    </div>
  )
}
