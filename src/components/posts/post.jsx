import React, { Component } from 'react'

export class post extends Component {

    formateDate = () => {
        let date = new Date(this.props.post.created_at).toLocaleDateString();
        let time = new Date(this.props.post.created_at).toLocaleTimeString();
        return date + " " + time ;
    };

    render() {
         //new Date(( - ).toLocaleDateString()).getHours();
        return (
            <React.Fragment>
                <div className="card">
                    <h5 className="card-header">{this.props.post.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title}</h5>
                        <p className="card-text">{this.props.post.body}</p>
                    </div>
                    <div className="card-footer">
                         <small className="text-muted">
                         {this.formateDate()}
                         </small>
                    </div>
                </div>
                <br/>
            </React.Fragment>
        )
    }
}

// {this.formateDate}

export default post
