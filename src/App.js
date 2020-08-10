import React ,{Component} from 'react';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Posts from './components/posts/posts';
import AddPost from './components/posts/AddPost';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Login from './components/authorization/login'
import Register from './components/authorization/register'



export class App extends Component {
  state ={
    posts: []
  };

  // constructor(){
  //   super();   
  //   // localStorage.setItem('myData', "data");
    
  //   const cookies = new Cookies();
  //   Axios.post("http://localhost:3000/api/v1/sessions",{
  //     "email":"mo@mo.com",
  //     "password": "12345678"
  
  // })
  // .then(res => {cookies.set('access_token', res.data.access_token, { path: '/' }); localStorage.setItem('refresh_token', res.data.refresh_token);});
  // }


  loginUser = () => {
    
  }

  componentDidMount(){
    Axios.get("http://localhost:3000/api/v1/posts")
    .then(res => this.setState({posts: res.data}));
    

  }

  AddNewPost = (postObject) => {
    const cookies = new Cookies();
    Axios.post("http://localhost:3000/api/v1/posts",{
      post:{
        title: postObject.title,
        body: postObject.body
      }
    },
    {
      headers: { Authorization: `Bearer ${cookies.get('access_token')}` }
    }
    )
    .then(res => this.setState({ posts: [res.data , ...this.state.posts ] }));
  };

  deletePost = (id) => {
    Axios.delete(`http://localhost:3000/api/v1/posts/${id}`,{
      method: 'DELETE'
    }).then(res => { this.setState({posts: [...this.state.posts.filter(post => post.id !== id)]} ) })
  }

  

  render() {
    return (
      
      <Router>
          <NavBar />  
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddPost AddNewPost= {this.AddNewPost} />
                <br/>
                <Posts posts={this.state.posts} deletePost={this.deletePost}/>
            </React.Fragment>
            )}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>

    </Router>
    )
  }
}

export default App

