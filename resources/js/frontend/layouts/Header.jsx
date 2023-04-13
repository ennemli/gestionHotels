import { Link } from 'react-router-dom'
import '../style/header/style.css'
export default function Header({Navbar}) {
    return (
        <header className="bg-main p-3">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid col col-lg-6 d-lg-flex justify-content-lg-center">
                        <Link className="navbar-brand" to="/">Hotel</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Navbar/>
                        
                    </div>
                </nav>
        </header>
    )
} 