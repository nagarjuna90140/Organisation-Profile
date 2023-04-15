import React,{useState} from 'react'
import { useAuth } from './auth'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
export const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [auth,setAuth]=useAuth();
    const navigate=useNavigate()
    const location=useLocation()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
         const res=await axios.post(`user/login`,
         {email,password})
         if(res && res.data.success){
            navigate(location.state || '/dashboard')
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
                
            })
            localStorage.setItem("auth",JSON.stringify(res.data))
            navigate("/dashboard")
         }else{
          window.alert("something went wrong")         }
        }catch(error){
            window.alert("error")
        }
    }
  return (
    <div>
    <div className='form-container'>
    <div className='register'>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
           
            <div className='mb-3'>
                <input type="email"
                placeholder='enter email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control" required/>
            </div>
    
            <div className='mb-3'>
                <input type="password"
                placeholder='enter password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control" required/>
            </div>
          
            <button type="submit" className='btn btn-primary'>Login</button>
        </form>
    </div>
</div>
</div>
  )
}
