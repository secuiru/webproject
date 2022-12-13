import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="" to="/">WebApp</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
{/*                         <li className="nav-item">
                            <Link className="nav-link" to="/protected">Temp&co2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/protected1">Emissions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/protected2">All charts</Link>
                        </li> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Charts
                            </a>
                            <ul class="dropdown-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/protected">Temp&co2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/protected1">Emissions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/protected2">All charts</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}
