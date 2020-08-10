import React, { Component } from 'react'
import './../../styles/login.css'
import {Link} from 'react-router-dom';
export class Register extends Component {
    render() {
        return (
            <div>
                <div className="container login-container" >
                <div className="row">
                    <div className="col-md-12 login-form-1">
                        <h3>Please Register </h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your First Name *"  value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Last Name *"  value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password Confirmation *" value="" />
                            </div>
                            <center><div className="form-group ">
                                <input type="submit" className="btnSubmit " value="Register" />
                            </div></center>
                            <br />
                            <div className="form-group">
                                <Link to="/login" className="ForgetPwd m-2">Login</Link>
                                {/* <a href="#" className="ForgetPwd m-4">Forget Password?</a> */}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Register
