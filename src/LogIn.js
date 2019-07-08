import React from "react";
import "./static/LogIn.css";
import { Link,Redirect } from "react-router-dom";
import axios from "axios";
// let baseUrl = process.env.PRODUCTION
//   ? "http://ec2-18-191-225-185.us-east-2.compute.amazonaws.com:3000"
//   : "http://localhost:3000";
let baseUrl ="https://www.discors.tk";   


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email:" ",password:" ", redirect: false  }; // You can also pass a Quill Delta here
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.renderRedirect = this.renderRedirect.bind(this);
    
    // this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log("$$$$$$$$$1", this.props.comment.match.params.topic_id);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `${baseUrl}/session`,
        {
          user: { email: this.state.email,password:this.state.password }
        }
      )
      // console.log("!!!this.props",this.props)
      .then(response => {
        // console.log("@@@@",res)
        if(response.data==="failed"){
          alert("Wrong username/email or password ")
          this.setState({
            redirect: true
          });
          
        }
        else{
          this.props.onLoadEvent(response.data.user.username,"logout")
          // this.props.history.push(
          //   `/`
          // );
          // <Redirect to='/target' />
          this.setState({
            redirect: true
          });
          // console.log("@@@@99",this.state.redirect);
          // this.renderRedirect()
        }
        
        // console.log("|||||||||||",this.props)
        // <Redirect to='/' />
        // console.log(res);
        // console.log(res.data);
        // console.log("{}{}{}{}{}{}{}",this.state);
      })
      .catch(err => {
        console.log("!!!!!",err);
      });
      console.log("@@@@99",this.state.redirect);

  }

  handleEmailChange(value) {
    console.log(value);
    // console.log("this.ref.title.value111".this.ref.title.value)

    this.setState({
      email: this.refs.email.value
    });
  }

  handlePasswordChange(value) {
    console.log(value);
    this.setState({
      password: this.refs.password.value
    });
  }

 

  render() {
    
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
    

    return (
      <div>
        <div class="main_container">
          <div class="login_bar ">
            <div class="login_icon">
              <b>Log In</b>
            </div>
            <Link to={{ pathname: "/" }}>
              <div class="close_mark">
                <img
                  class="close_mark_logo"
                  src="https://image.flaticon.com/icons/svg/32/32178.svg"
                />
              </div>
            </Link>
          </div>

          {/* <hr/> */}

          {/* <div class="login_sites ">
  <div class="flex_container">
    <div class="facebook flex_container_logo">
      <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
      with Facebook
    </div>

    <div class="google flex_container_logo">
        <img src="http://pngimg.com/uploads/google/google_PNG19635.png"/>
      with Google
    </div>
  </div>
  <div class="flex_container">
    <div class="github flex_container_logo">
        <img src="http://chittagongit.com/download/419235"/>
      with GitHub
    </div>
    
    <div class="twitter flex_container_logo">
        <img src="https://www.indiantelevision.com/sites/default/files/styles/340x340/public/images/tv-images/2019/03/07/twitter.jpg"/>
      with Twitter
    </div>
  </div>
  <div class="flex_container">  
    <div class="email  ">
        <img src="https://img.icons8.com/color/48/000000/secured-letter.png"/>
      with email
    </div>
  </div>
</div> */}

          {/* <hr/> */}
          <div class="user text_color">User</div>
          <form
            onSubmit={this.handleSubmit}
            method="post"
            className="form-inline"
          >
            <input
              type="email"
              name="email"
              placeholder="email or username"
              onChange={this.handleEmailChange}
              ref="email"
              required
            />
            <div class="password text_color">Password</div>
            <input
              class="input"
              type="password"
              name="password"
              placeholder="Password"
              ref="password"
              onChange={this.handlePasswordChange}
              required
            />

                  {/* <div class="forgot_pwd text_color">
        I forgot my password
      </div> */}

            {/* <hr/> */}
            <div class="flex_bottom">
              <button class="login_button" type="submit">
                {" "}
                Log in
              </button>
              {/* <div class="create">
       <a href="create_account.html"> <center>Create New Account</center></a>
    </div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MyComponent;

