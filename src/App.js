import React ,{Component} from 'react';
import NavBar from './components/layout/NavBar';
import './App.css';
import Posts from './components/posts/posts';
import AddPost from './components/posts/AddPost';
import Axios from 'axios';

export class App extends Component {
  state ={
    posts: []
  };

  componentDidMount(){
    Axios.get("http://localhost:3000/api/v1/posts")
    .then(res => this.setState({posts: res.data}));
  }

  AddNewPost = (postObject) => {
    Axios.post("http://localhost:3000/api/v1/posts",{
      post:{
        title: postObject.title,
        body: postObject.body
      }
    })
    .then(res => this.setState({ posts: [...this.state.posts , res.data] }));
  };

  render() {
    return (
      <div>
        <NavBar />
        <AddPost AddNewPost= {this.AddNewPost}/>
        <br/>
        <Posts posts={this.state.posts}/>
  </div>
    )
  }
}

export default App

