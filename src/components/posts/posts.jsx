import React, { Component } from 'react'
import Post from './post';
export class posts extends Component {

    render() {
        return (
            <div className="container">          
                {this.props.posts.map(post =>
                     <Post key={post.id} post={post} deletePost={this.props.deletePost} user={this.props.user} />
                     )}
            </div>
        )
    }
}

export default posts
