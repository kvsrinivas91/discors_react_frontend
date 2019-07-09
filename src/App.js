import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar";
import TopicListItem from "./TopicListItem";
import CreateAccount from "./CreateAccount";
import LogIn from "./LogIn";
import Topic from "./topic";
import newtopic from "./newtopic";
import Comment from "./comment"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginbutton:"Log In",signupbutton:"Signup", isLoggedIn:false }; // You can also pass a Quill Delta here
    this.handleUser=this.handleUser.bind(this)
    this.loggedOut=this.loggedOut.bind(this)
    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  loggedOut(){
    this.setState({isLoggedIn:false});
  }
  
  handleUser(item,item1){
    this.setState({loginbutton:item1});
    this.setState({signupbutton:item});
    this.setState({isLoggedIn:true});
  }

  render() {
    return (
      <div>
    <Router>
        <div> 
        <NavigationBar loginbutton={this.state.loginbutton} signupbutton={this.state.signupbutton} handleUser={this.handleUser} loggedOut={this.loggedOut}/>
          
          <Switch>
            <Route exact path='/' component={TopicListItem}></Route>
            {/* <Route exact path='/login' component={LogIn}></Route> */}
            <Route path="/login" render={() => (<LogIn {...this.handleUser} onLoadEvent={this.handleUser} />)} /> 

            <Route exact path='/create_account' component={CreateAccount}></Route>           
            <Route exact path='/:topic_id/comment' render={(p) => <Comment comment={p}/>}></Route>
            {/* <Route exact path='/topic' component={topic}></Route> */}
            <Route exact path='/topic/:topic_id' render={(p) => <Topic topic={p}/>}></Route>
            {/* <Route exact path='/topic/:topic_id' component={Topic}></Route> */}
            <Route exact path='/newtopic' component={newtopic}></Route>
            {/* <Route exact path='/create_account' component={CreateAccount}></Route> */}
            {/* <Route component={NotFoundComponent}></Route> */}
          </Switch>
        </div>
      </Router>

  </div>
    );
  }
}

export default MyComponent;


