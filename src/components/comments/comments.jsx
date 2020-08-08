import React, { Component } from 'react'
import Comment from './comment';


export class comments extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment =>
                    <Comment key={comment.id} comment={comment} AddComment={this.props.AddComment}  />
                )}
            </div>
        )
    }
}

export default comments
