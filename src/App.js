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

function App() {
  return (
    <div>
    <Router>
        <div> 
        <NavigationBar/>
          
          <Switch>
            <Route exact path='/' component={TopicListItem}></Route>
            <Route exact path='/login' component={LogIn}></Route>
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

export default App;
