import React, { Component } from 'react'
import './../../styles/login.css'
import {Link} from 'react-router-dom';

export class login extends Component {
    render() {
        return (
            <div className="container login-container" >
                <div className="row">
                    <div className="col-md-12 login-form-1">
                        <h3>Please Login </h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" value="" />
                            </div>
                            <center><div className="form-group ">
                                <input type="submit" className="btnSubmit " value="Login" />
                            </div></center>
                            <br />
                            <div className="form-group">

                                <Link to="/register" className="ForgetPwd m-2">Register</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default login
