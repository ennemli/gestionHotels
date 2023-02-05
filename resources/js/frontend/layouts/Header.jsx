import { Item, Nav, NavLink } from '../components/header'
import { Link } from 'react-router-dom'
import '../style/header/style.css'
export default function Header() {
    return (
        <header className="bg-main">
            <div className="col col-md-6 m-auto">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Nav className="navbar-nav">
                                <Item className="nav-item">
                                    <NavLink to={''} className={'nav-link'}>Home</NavLink>
                                </Item>
                                <Item className="nav-item">
                                    <NavLink to={'contact'} className="nav-link">Contact</NavLink>
                                </Item>
                            </Nav>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    )
} 