import React, { Component } from 'react'
import Logo from '../../bootstrap-solid.svg'
import {Link} from 'react-router-dom';
export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light navbar-expand-lg ">

                <Link className="nav-link" to="/"><img src={Logo} alt="Logo" height="30" width="30" className="navbar-brand"/></Link>
                            
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link> </li>                         
                        </ul>

                  

                </nav>
            </div>
        )
    }
}

export default NavBar;

