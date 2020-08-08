import React, { Component } from 'react'

export class AddPost extends Component {
    state = {
        title : '',
        body: ''
    };

    changeTitle = (e) => { 
        this.setState({ [e.target.name]: e.target.value})
        // let post = this.state.post;
        // post.title = e.target.value;
        // this.setState(post);
    }
    changeBody = (e) => { 
        this.setState({ [e.target.name]: e.target.value})
    //    let post = this.state.post;
    //    post.body = e.target.value;
    //    this.setState(post);
    }




    SubmitPost = (e) => {
        e.preventDefault();
        let post = {
            title: this.state.title,
            body: this.state.body
        }
      this.props.AddNewPost(post);
      this.setState({ title: '' , body:''})
    }

    render() {
        return (
            <div className="container">
                <h3>Add New Post</h3>
                <form onSubmit={this.SubmitPost} >
                    <div className="form-group">
                        <input type="text"
                        className="form-control" name="title" placeholder="add title"
                        autoComplete="off" value ={this.state.title} onChange={this.changeTitle}/>
                    </div>
                    <div className="form-group">
                        <textarea type="text"
                        className="form-control" name="body" 
                        placeholder="add body" value ={this.state.body} onChange={this.changeBody}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-control btn btn-primary" value="submit">Add Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost
