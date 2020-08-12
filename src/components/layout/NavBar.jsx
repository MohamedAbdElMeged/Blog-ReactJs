import React, { Component } from 'react'
import Logo from '../../bootstrap-solid.svg'
import {Link} from 'react-router-dom';
//import Cookies from 'universal-cookie';
export class NavBar extends Component {



    checkLogged = () => {
        
        if (this.props.user !== null) {
            return <React.Fragment>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className="nav-link btn btn-link" >{this.props.user.first_name}</button>                               
                </li>    
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={this.props.logOut}>Logout</button>                               
                </li>          
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/login">Logout</Link>                               
                </li>                        */}
                </ul>
            </React.Fragment>


        }else{
            return <React.Fragment>
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>                               
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link> </li>                         
                        </ul>
            </React.Fragment>
        }
    }



    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light navbar-expand-lg ">

                <Link className="nav-link" to="/"><img src={Logo} alt="Logo" height="30" width="30" className="navbar-brand"/></Link>
                                {this.checkLogged()}
                </nav>
            </div>
        )
    }
}

export default NavBar;

