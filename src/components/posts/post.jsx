import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRecycle} from '@fortawesome/free-solid-svg-icons'
import Comments from './../comments/comments';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import AddComment from './../comments/AddComment';

export class post extends Component {

    // state ={
    //     comments: []
    // }

    // getComments = () => {
    //     Axios.get(`http://localhost:3000/api/v1/posts/${this.props.post.id}/comments`)
    //     .then(res => this.setState({comments: res.data }));
    // }

    componentDidMount(){
        //setInterval(this.getComments, 5000);
    }

    formateDate = () => {
        let date = new Date(this.props.post.created_at).toLocaleDateString();
        let time = new Date(this.props.post.created_at).toLocaleTimeString();
        return date + " " + time ;
    };


    AddComment = (comment) =>{
        const cookies = new Cookies();
        let token =cookies.get('access_token');
        Axios.post(`http://localhost:3000/api/v1/posts/${comment.post_id}/comments`,{
            body: comment.body,
            post_id: comment.post_id
        },{
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => this.setState({
            comments: [...this.state.comments,res.data]
        }))
    }

    checkDeleteButton = () => {
        if (this.props.user !== null && this.props.user.id === this.props.post.user.id) {
            return <button className="btn btn-link" onClick={() => this.props.deletePost(this.props.post.id)}>
            <FontAwesomeIcon icon={faRecycle}  size="sm" /></button>;
        }
    }

    checkUserFromComment = () => {
        if (this.props.user !== null) {
            return  <AddComment postId={this.props.post.id} AddComment={this.AddComment} />
        }
    }

    render() {
        const {title ,body , user} = this.props.post ;
        return (                 
            <React.Fragment>
                <div className="card">
                    <p className="card-header">{user.first_name + " " + user.last_name}
                    
                        {this.checkDeleteButton()}
                    </p>                 
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                    </div>
                    <div className="card-footer">
                         <small className="text-muted">
                         {this.formateDate()}
                         </small>
                    </div>                   
                </div>    
                <Comments comments={this.props.post.comments}   />  
                {this.checkUserFromComment()}
                <br/>
                
            </React.Fragment>
        )
    }
}

// {this.formateDate}

export default post
