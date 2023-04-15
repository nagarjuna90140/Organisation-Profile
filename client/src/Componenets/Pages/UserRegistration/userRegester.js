import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export const UserRegester = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")
    const params=useParams()
    const navigate=useNavigate()
    
const submitHandler=async(e)=>{
    e.preventDefault()
    try {
      if(params.id==null){

        if(name.length==0){
            window.alert("Name is missing")
          }else{
              if(email.length==0){
                  window.alert("Email is missing")
              }else{
                  const data=await axios.post(`/user/register`,{name,email,phone,role,password})
                  console.log(data)
                  window.alert("Successfully created user")
                  navigate('/manageuser/')
              }
            }
          }
          else{
          const data=await axios.put(`/user/update/${params.id}`,{name,email,phone,role,password})
          console.log(data)
         navigate('/manageuser/')  
      }
    } catch (error) {
      console.log(error)

    }

}
useEffect(()=>{
  const updateUser=async()=>{
 const reqData=await axios.put(`/user/update/${params.id}`)
 setName(reqData.data.data.name) 
 setEmail(reqData.data.data.email) 
 setPhone(reqData.data.data.phone)
 setRole(reqData.data.data.role)
 setPassword(reqData.data.data.password)
}
  updateUser()
},[params.id])
  return (
    <div>
        {(params.id==null)?<center><h3>Create user</h3></center>: <center><h3>Update user : {params.id}</h3></center>}
         <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <form onSubmit={submitHandler}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>Enter Name : </label>
                            <input type="text" 
                            placeholder='Enter Name'
                            onChange={(e) =>setName(e.target.value)}
                            value={name}
                            name="name"
                            className='form-control'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>Enter Email : </label>
                            <input type="email"
                              onChange={(e) =>setEmail(e.target.value)}
                              value={email}
                            placeholder='Enter Email'
                            name="email"
                            className='form-control'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>Enter Phone Number : </label>
                            <input type="number"
                              onChange={(e) =>setPhone(e.target.value)}
                              value={phone}
                            placeholder='Enter Phone Number'
                            name="phone"
                            className='form-control'/>
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>Enter Role : </label>
                           <select className='form-control' onChange={(e)=>setRole(e.target.value)}>
                            <option value="0">Choose a Role</option>
                            <option>Sales Officer</option>
                            <option>Admin</option>
                            <option>user</option>
                           </select>
                        </div>
                       </div>
                       <div className='col-md-6'>
                        <div className='mb-3'>
                          <label>Enter Passowrd : </label>
                            <input type="password"
                              onChange={(e) =>setPassword(e.target.value)}
                              value={password}
                            placeholder='Enter Password'
                            name="password"
                            className='form-control'/>
                        </div>
                       </div>
                       
                </div>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                        {(params.id==null)?<button type="submit" className='btn btn-primary'>Save</button>:
                        <button type="submit" className='btn btn-primary'>Update</button>} 
                        </div>
                       </div>
            </form>
        </div>
    </div>
 </div>
</div>
  )
}
