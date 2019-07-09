import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import dicorslogo from "./static/discorslogo.png";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.logOut=this.logOut.bind(this)
    console.log("*********8")
    console.log(this.props.signupbutton,this.props.loginbutton)
    // console.log("this.props",this.props.loginbutton);
  }

  logOut(){
    this.props.handleUser("Log In","Signup")
    this.props.loggedOut();
  }

  render() {
    var leftButton;
    var rightButton;
    if(this.props.signupbutton=="Signup"){
      leftButton=<Link to="/create_account">
      <button class="signup">{this.props.signupbutton}</button>
    </Link>
    }
    else{
      leftButton= 
      <button class="signup">{this.props.signupbutton}</button>
    // </Link>
    }

    if(this.props.loginbutton=="Log In"){
      rightButton=<Link className="login_link" to="/login">
      <button class="login">{this.props.loginbutton}</button>
    </Link>
    }
    else{
      rightButton=<Link className="login_link" to="/">
      <button class="login" onClick={this.logOut}>{this.props.loginbutton}</button>
    </Link>
    }

    return (
      <div>
        <div class="topbar_parent">
          <div class="topbar">
            <Link to="/">
              {/* <div class="logo"> */}
              <img class="logoimg" src={dicorslogo} />
              {/* http://www.picturetopeople.org/text_generator/others/transparent/transparent-text-generator.html  dokyo*/}
              {/* </div> */}
            </Link>
            {leftButton}
            {rightButton}
            {/* <a href="">
            <i id="icon" class="fa fa-search " />
          </a>
          <a href="">
            <i id="icon" class="fa fa-bars " />
          </a> */}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default NavigationBar;
