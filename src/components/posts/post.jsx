import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRecycle} from '@fortawesome/free-solid-svg-icons'
import Comments from './../comments/comments';
import Axios from 'axios';
import AddComment from './../comments/AddComment';

export class post extends Component {

    state ={
        comments: []
    }

    

    componentDidMount(){
        Axios.get(`http://localhost:3000/api/v1/posts/${this.props.post.id}/comments`)
        .then(res => this.setState({comments: res.data }));
        
    }

    formateDate = () => {
        let date = new Date(this.props.post.created_at).toLocaleDateString();
        let time = new Date(this.props.post.created_at).toLocaleTimeString();
        return date + " " + time ;
    };


    AddComment = (comment) =>{
        Axios.post(`http://localhost:3000/api/v1/posts/${comment.post_id}/comments`,{
            body: comment.body,
            post_id: comment.post_id
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

    render() {
        const {id , title ,body , user} = this.props.post ;
        //console.log(this.props.user , "vdds");
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
                <Comments comments={this.state.comments}   />  
                <AddComment postId={id} AddComment={this.AddComment} />
                <br/>
                
            </React.Fragment>
        )
    }
}

// {this.formateDate}

export default post
