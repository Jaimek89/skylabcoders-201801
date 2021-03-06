import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(){

    return (
        <div>
            <header>
                <nav id="header" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
                                </li>
                            </ul>
                        </div>
                </nav>
            </header>
        </div>
    )
}

export default Header