import React  from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-nav">
                        <Link className="nav-link"  aria-current="page" to="/logout">Logout</Link>
                        <Link className="nav-link"  aria-current="page" to="/users">Users</Link>
                </div>
            </div>
        </nav>
    )
}