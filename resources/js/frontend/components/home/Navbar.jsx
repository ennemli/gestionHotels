import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Nav, NavLink } from '../header'

export default function Navbar() {
  return (
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-center" id="navbarNav">
        <Nav className="navbar-nav">
            <Item className="nav-item">
                <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
            </Item>
            <Item className="nav-item">
                <NavLink to={'/about'} className={'nav-link'}>About</NavLink>
            </Item>
            <Item className="nav-item">
                {/* <NavLink to={'#footer'} >Contact</NavLink> */}
                <a href="#footer" className="nav-link">Contact</a>
            </Item>
<Item className="nav-item">
    <NavLink to={'/aide'} className="nav-link">Aide</NavLink>
</Item>
</Nav>
<Link className="btn btn-lg btn-warning mx-md-2" to="/login">Log In</Link>
</div>
    )
}
