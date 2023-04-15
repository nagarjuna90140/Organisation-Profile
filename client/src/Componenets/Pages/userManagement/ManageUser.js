import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const ManageUser = () => {
    const [userData,setUserData]=useState([])
    const [perPage,setPerPage]=useState([])

    const params=useParams()
   const navigate=useNavigate()
const searchUser=async()=>{

try {
    if(params.name==null && params.email==null){
        const value=await axios.get("/user/get")
        setUserData(value.data)
        setPerPage(value.data.slice(0, 5))

        if(value.length==0){
            window.alert("Data not exist")
        }
      else if(params.name==null && params.email!=null){
        const value=await axios.get(`/user/get/email/${params.email}`)
        console.log(value)
        setPerPage(value.data.val.slice(0, 5))
      }
    }
   
    else{
       const value=await axios.get(`/user/get/${params.name}/${params.email}`)
       setUserData(value.data.val)
       setPerPage(value.data.val.slice(0, 5))

       if(value==null){
        window.alert("Data not exist")
        }
    
     } 
    }
catch (error) {
    window.alert("Something went wrong")
}

}
useEffect(()=>{
    searchUser()
},[])
// const handleDelete=async(_id)=>{
//  await axios.delete(`/user/${_id}`)
 
//     //navigate("/searchuser")
// }

//page handler
let pageNumber=[]
for (let i=1;i<Math.ceil(userData.length/5)+1;i++){
    pageNumber.push(i)
}   
 const pageHandler = async (pageNumber) => {
    setPerPage(userData.slice((pageNumber * 5) - 5, pageNumber * 5))
}


  return (
    <div>
        <h3>User-Search Results</h3>
        <Link to='/searchuser' className='btn btn-success mb-2'>New Search</Link>
        <div className='conatiner'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-hover table-striped'>
                            <thead className=''>
                                <th>userName</th>
                                <th>userEmail</th>
                                <th>userPhone</th>
                                <th>userRole</th>
                            </thead>  
                            {perPage.map((item, index) => {
                                const { name, email, phone, role,_id} = item
                                   return (
                                    <tbody>

                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td>{role}</td>
                                        <td className='btn-group '>
                                            <Link to={`/updateUser/${item._id}`} className='btn btn-primary w-25 m-x ' >Edit</Link>
                                            {/* <button className='btn btn-danger  w-25 ' onClick={() => handleDelete(item._id)}>Delete</button> */}
                                        </td>
                                    </tr>
                                    </tbody>
                                   ) 
                        })}
                       
                        </table>
                       
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
                    <button className='btn btn-primary nextpage' >Next</button>
                </div>

            </div>
       
    </div>
  )
}
