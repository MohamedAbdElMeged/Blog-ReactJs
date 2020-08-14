import React, { Component } from 'react'
import './../../styles/login.css'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
export class Register extends Component {

    state = {  
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation:'',
        photo: null
    }

    changeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleImageChange = (e) => {
        this.setState({
          photo: e.target.files[0]
        })
    };

    submitRegister = (e) => {
        e.preventDefault();
        let user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            photo: this.state.photo
        }
        this.props.registerNewUser(user);
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation:'',
            photo: null
        })
    }

    checkRedirection = () => {
        if (this.props.user !== null) {
            return <Redirect to='/'/>
        }else{
            return      <div>
            <div className="container login-container" >
            <div className="row">
                <div className="col-md-12 login-form-1">
                    <h3>Please Register </h3>
                    <form onSubmit={this.submitRegister}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="first_name"
                             placeholder="Your First Name *"   onChange={this.changeInput} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="last_name"
                             placeholder="Your Last Name *"  onChange={this.changeInput} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="email"
                             placeholder="Your Email *" onChange={this.changeInput}  />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control"  name="password"
                             placeholder="Your Password *" onChange={this.changeInput} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password_confirmation"
                             placeholder="Your Password Confirmation *" onChange={this.changeInput} />
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" id="photo" name="photo"
                             placeholder="Your Photo *" onChange={this.handleImageChange}  />
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

        }
    }

    render() {
        return (
        
           this.checkRedirection()
          
        )
    }
}

export default Register
