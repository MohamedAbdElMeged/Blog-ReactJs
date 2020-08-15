import React, { Component } from 'react'

export class AddComment extends Component {

    state ={
        body: ''
    }

    constructor(props) {
        super(props);
    
        this._isMounted = false;
    // rest of your code
    }

    changeBody = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }

    componentDidMount(){
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
     }

    submitComment = (e) => {
        let comment = {
            post_id: this.props.postId,
            body: this.state.body
        }
        e.preventDefault();
        this.props.AddComment(comment);
        this.setState({body: ''});
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitComment} >
                    <div className="form-group">
                        <textarea type="text"
                        className="form-control" name="body" 
                        placeholder="Add New Comment" value ={this.state.body} onChange={this.changeBody}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-control btn btn-primary" value="submit">Add Comment</button>
                    </div>
                </form>
                </div>

        )
    }
}

export default AddComment
