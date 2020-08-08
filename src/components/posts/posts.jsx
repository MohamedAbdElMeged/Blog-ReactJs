import React, { Component } from 'react'
import Post from './post';
export class posts extends Component {
    // state = {
    //    posts: [
    //         {
    //             id: 1,
    //             title: "post one",
    //             body: "post one body"
    //         },
    //         {
    //             id: 2,
    //             title: "post two",
    //             body: "post two body"
    //         }
    //     ]
    // };

    render() {
        return (
            <div className="container">          
                {this.props.posts.map(post =>
                     <Post key={post.id} post={post} />
                     )}
            </div>
        )
    }
}

export default posts
