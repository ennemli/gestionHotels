import React from 'react'
import Header from '../layouts/Header'
import Navbar  from '../components/home/Navbar'
import Section from '../layouts/Section'
export default function SignUp() {
  
  return (
    <>
    <Header Navbar={Navbar}/>
    <Section>
    <div className='row'>

<div className='col-6' style={{margin:"25vh auto",padding:"1.2rem",boxShadow:"0 0 6px 2px #eeeeee, 0 0 5px 1px #0171c345"}}>
    <div className="form-floating w-100  mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="First Name" />
                        <label htmlFor="floatingInputGroup1">First Name</label>
                    </div>
                    <div className="form-floating w-100  mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Last Name" />
                        <label htmlFor="floatingInputGroup1">Last Name</label>
                    </div>
                    <div className="form-floating w-100  mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Email" />
                        <label htmlFor="floatingInputGroup1">Email</label>
                    </div>
                    <div className="form-floating w-100  mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Password" />
                        <label htmlFor="floatingInputGroup1">Password</label>
                    </div>
                    <div className="form-floating w-100  mb-2">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Password Confirmation" />
                        <label htmlFor="floatingInputGroup1">Password Confirmation</label>
                    </div>
                    <button type="button" className='btn btn-outline-primary'>Sign Up</button>
                    </div>
                    </div>
    </Section>
    </>
  )
}
