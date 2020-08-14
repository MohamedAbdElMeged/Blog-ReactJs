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
import Profile from './components/authorization/profile'

import About from './components/pages/about';




export class App extends Component {
  state ={
    posts: [],
    user: null
  };
  registerNewUser = (user) => {
    const cookies = new Cookies();
    console.log(user);
    let formData = new FormData();
    formData.append('photo',user.photo);
    formData.append('first_name',user.first_name);
    formData.append('last_name',user.last_name);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('password_confirmation',user.password_confirmation);
    Axios.post('http://localhost:3000/api/v1/users',
    formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => 
      {
        cookies.set('access_token', res.data.access_token, { path: '/' });
        localStorage.setItem('refresh_token', res.data.refresh_token);
        this.setState({user: res.data.user});
      }).catch(
        function (error) {
          console.log('Show error notification!')
          
        }
      );
  }

  logOut = () =>{
    const cookies = new Cookies();
    let token =cookies.get('access_token');

    Axios.delete("http://localhost:3000/api/v1/sessions",{
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      this.setState({user: null});
      cookies.remove("access_token");
      localStorage.removeItem("refresh_token")
    });
  }


  Login = (email , password) => {
   const cookies = new Cookies();
   Axios.post("http://localhost:3000/api/v1/sessions",{
     email: email,
     password: password
   }).then(res => {
    cookies.set('access_token', res.data.access_token, { path: '/' }); localStorage.setItem('refresh_token', res.data.refresh_token);
    this.setState({user: res.data.user});
   }).catch(
    function (error) {
      console.log('Show error notification!')
      
    }
  );


  }

  componentDidMount(){
    Axios.get("http://localhost:3000/api/v1/posts")
    .then(res => this.setState({posts: res.data}));
    this.getUser();

  }


  getUser = () => {
    const cookies = new Cookies();
    let token =cookies.get('access_token');
    if (token !== undefined) {

    
    Axios.get("http://localhost:3000/api/v1/current_user",{
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      this.setState({user: res.data});
      //console.log(this.state.user , "user Get User");
    });
  } 
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

  formatAddNewPost = () => {
    if (this.state.user !== null) {
      return <AddPost AddNewPost= {this.AddNewPost} />
    }
  }

  render() {
    return (
      
      <Router>
        
          <NavBar logOut={this.logOut} user={this.state.user} />  
            <Route exact path="/" render={props => (
              <React.Fragment>
                {this.formatAddNewPost()}
                
                <br/>
                <Posts posts={this.state.posts} deletePost={this.deletePost} user={this.state.user}/>
            </React.Fragment>
            )}/>
            <Route path="/login" component={() => <Login Login={this.Login} user={this.state.user}  />}/>
            <Route path="/register" component={() => <Register registerNewUser={this.registerNewUser} user={this.state.user}/>}/>
            <Route path="/profile" component={() => <Profile  user={this.state.user}/>}/>

            <Route path="/about" component={About}/>


    </Router>
    )
  }
}

export default App



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


  // checkAuth = () =>{
  //   const cookies = new Cookies();
  //   let token =cookies.get('access_token');
  //   if (token !== undefined) {
  //     let user = this.getUser();
  //     if (user !== undefined) {
  //       this.setState({user: user});
  //     }
  //   } 
  // }