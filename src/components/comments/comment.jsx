import React, { Component } from 'react'

export class comment extends Component {

    formateDate = () => {
        let date = new Date(this.props.comment.created_at).toLocaleDateString();
        let time = new Date(this.props.comment.created_at).toLocaleTimeString();
        return date + " " + time ;
    };


    render() {
        const {id , body } = this.props.comment;
        return (
            <div>
                    <div className="card container">
                    <p className="card-header">{id}
                    {/* <button className="btn btn-link" onClick={() => this.props.deletePost(id)}>
                        <FontAwesomeIcon icon={faRecycle}  size="sm" /></button> */}
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
