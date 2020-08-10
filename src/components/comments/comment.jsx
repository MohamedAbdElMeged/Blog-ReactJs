import React, { Component } from 'react'

export class comment extends Component {

    formateDate = () => {
        let date = new Date(this.props.comment.created_at).toLocaleDateString();
        let time = new Date(this.props.comment.created_at).toLocaleTimeString();
        return date + " " + time ;
    };


    render() {
        const {body, user } = this.props.comment;
        return (
            <div>
                    <div className="card container">
                    <p className="card-header">{user.first_name + " " + user.last_name + "     "}
                    <small>commented</small>
                    </p>                 
                    <div className="card-body">
                        <p className="card-text">{body}</p>
                    </div>
                    <div className="card-footer">
                         <small className="text-muted">
                         {this.formateDate()}
                         </small>
                    </div>                   
                </div>   
            </div>
        )
    }
}

export default comment
