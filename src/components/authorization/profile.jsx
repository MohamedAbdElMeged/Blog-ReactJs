import React, { Component } from 'react'
import './../../styles/profile.css'
// import posts from '../posts/posts'

export class profile extends Component {

    formateDate = () => {
        if (this.props.user !== null){
            let date = new Date(this.props.user.created_at).toLocaleDateString();
            let time = new Date(this.props.user.created_at).toLocaleTimeString();
            return date + " " + time ;
        }
    };

    getNumberOfPosts = () => {
        if (this.props.user !== null) {
            let postsLength = this.props.posts.filter(post => post.user.id === this.props.user.id).length
            return postsLength.toString() + " Blog Posts"
        }
    }

    render() {
        return (
            // <div>
            //     <img 
            //          alt={this.props.user.first_name} height="200" width="200" className="navbar-brand"/>
            // </div>

<div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card">

                    <div className="card-body">
                        <div className="card-title mb-4">
                            <div className="d-flex justify-content-start">
                                <div className="image-container">
                                    <img src={"http://localhost:3000/"+this.props.user.photo.url} id="imgProfile" alt=""className="img-thumbnail"  />
                                </div>
                                <div className="userData ml-3">
                                    <h2 className="d-block">
                                    {this.props.user.first_name}
                                    </h2>
                                    <h6 className="d-block">{this.getNumberOfPosts()}</h6>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                                    </li>
                                </ul>
                                <div className="tab-content ml-1" id="myTabContent">
                                    <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                        

                                        <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label >Full Name</label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {this.props.user.first_name + " " + this.props.user.last_name}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                            {this.props.user.email}
                                            </div>
                                        </div>
                                        <hr />
                                        
                                        
                                        <div className="row">
                                            <div className="col-sm-3 col-md-2 col-5">
                                                <label >Joined At</label>
                                            </div>
                                            <div className="col-md-8 col-6">
                                                {this.formateDate()}
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default profile
