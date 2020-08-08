import React, { Component } from 'react'

export class post extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <h5 className="card-header">{this.props.post.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title}</h5>
                        <p className="card-text">{this.props.post.body}</p>
                    </div>
                    <div class="card-footer">
                         <small class="text-muted">{new Date(this.props.post.created_at).toLocaleDateString()}
                         {' '} {new Date(this.props.post.created_at).toLocaleTimeString()}</small>
                    </div>
                </div>
                <br/>
            </React.Fragment>
        )
    }
}

export default post
