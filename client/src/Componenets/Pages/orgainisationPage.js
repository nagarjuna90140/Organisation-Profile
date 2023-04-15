import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/auth'

export default function OrgainisationPage() {
    const [auth,setAuth]=useAuth()
    return (
        <div className='container'>
            <div className='organisation'>
                <div className='cole-md-3'>

                <div className='mb-3'>
                    <h4>Create Organisation Profile</h4>
                    <Link to='/createOrgProfile'>create organisation profile</Link>
                    <Link to='/Vieworganization'>View organisation profile</Link>
                </div>
                </div>
            </div>
            {(auth?.user?.role==="Admin")?<>
            <div className='organisation'>
            <div className='cole-md-3'>
            <div className='mb-3'>
                    <h4>Add New Industry</h4>
                    <Link to='/industry'>Add new industrySector</Link>
                </div>
            </div>
            </div>
            <div className='organisation'>
            <div className='cole-md-3'>
                <div className='mb-3'>
                    <h4>Add erpVendor</h4>
                    <Link to='/erpVendor'>Add new erpVendor</Link>
                </div>
                </div>
            </div>
            </>:<>
            
            </>}
           
            <div className='organisation'>
            <div className='cole-md-3'>
            <div className='mb-3'>
                    <h4>Search organisations</h4>
                    <Link to='/searchOrgprofiles'>search</Link>
                </div>
                </div>
            </div>
            <div className='organisation'>
                <div className='cole-md-3'>
                    <div className='mb-3'>
                        <h4>Manage Users</h4>
                        <Link to='/searchuser'>click here</Link>
                    </div>
                </div>
            </div>
            <div className='organisation'>
                <div className='cole-md-3'>
                    <div className='mb-3'>
                        <h4>Search Business Opportunity</h4>
                        <Link to='/searchBusinessOpportunity'>click here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
