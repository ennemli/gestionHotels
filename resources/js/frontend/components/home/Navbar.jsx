import React from 'react'
import { Item, Nav, NavLink } from '../header'

export default function Navbar() {
  return (
    <div className="collapse navbar-collapse d-md-flex justify-content-md-center" id="navbarNav">
<Nav className="navbar-nav">
<Item className="nav-item">
    <NavLink to={''} className={'nav-link'}>Home</NavLink>
</Item>
<Item className="nav-item">
    <NavLink to={'about'} className={'nav-link'}>About</NavLink>
</Item>
<Item className="nav-item">
    <NavLink to={'contact'} className="nav-link">Contact</NavLink>
</Item>
<Item className="nav-item">
    <NavLink to={'aid'} className="nav-link">Aid</NavLink>
</Item>
</Nav>
<button className="btn btn-lg btn-warning mx-md-2">Sign In</button>
</div>
    )
}
