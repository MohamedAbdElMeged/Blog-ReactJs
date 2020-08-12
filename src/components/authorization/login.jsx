import React, { Component } from 'react'
import './../../styles/login.css'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

export class login extends Component {
    state = {
        email: '',
        password: ''
    }

    changeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitLogin = (e) => {
        e.preventDefault();
        this.props.Login(this.state.email, this.state.password);
        this.setState({email: '' , password: ''});
        
    }

    checkRedirect = () => {
        if (this.props.user === null){
            return             <div className="container login-container" >
            <div className="row">
                <div className="col-md-12 login-form-1">
                    <h3>Please Login </h3>
                    <form onSubmit={this.submitLogin}>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder="Your Email *" name="email" onChange={this.changeInput}  />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control"
                             placeholder="Your Password *" name="password" onChange={this.changeInput} />
                        </div>
                        <center><div className="form-group ">
                            <button type="submit" className="btnSubmit" value="submit" >Login</button> 
                        </div></center>
                        <br />
                        <div className="form-group">

                            <Link to="/register" className="ForgetPwd m-2">Register</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        }else{
            return <Redirect to="/" /> 
        }
    }

    render() {
        return (
            this.checkRedirect()
        )
    }
}

export default login
