import Reactm, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='' className="navbar-logo">
                        Travel <i class="fas fa-globe-asia"></i>
                    </Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar
