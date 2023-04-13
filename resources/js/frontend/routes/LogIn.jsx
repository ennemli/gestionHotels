import React from 'react'
import Header from '../layouts/Header'
import Navbar  from '../components/home/Navbar'
import Section from '../layouts/Section'
import { NavLink } from 'react-router-dom'
export default function LogIn() {
  
  return (
    <>
    <Header Navbar={Navbar}/>

    <Section>
        
        <div className='row'>

            <div className='col-6' style={{margin:"25vh auto",padding:"1.2rem",boxShadow:"0 0 6px 2px #eeeeee, 0 0 5px 1px #0171c345"}}>
                    <div className="form-floating w-100 mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Email" />
                        <label htmlFor="floatingInputGroup1">Email</label>
                    </div>
                    <div className="form-floating w-100 mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Password" />
                        <label htmlFor="floatingInputGroup1">Password</label>
                    </div>
                    
                    <button type="button" className='btn btn-outline-primary '>Log In</button>
                    <NavLink to={'/signup'} className="btn btn-outline-warning mx-2">Sign Up</NavLink>
                    </div>
                    </div>
    </Section>
    </>
  )
}
