import React, { Component } from 'react'
import Logo from '../../bootstrap-solid.svg'
export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light ">
                    {/* <a className="navbar-brand"> */}
                        <img src={Logo} alt="Logo" height="30" width="30" className="navbar-brand"/>
                    {/* </a> */}
                </nav>
            </div>
        )
    }
}

export default NavBar;

