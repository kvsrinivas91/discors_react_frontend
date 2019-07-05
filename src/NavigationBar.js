import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import dicorslogo from "./static/discorslogo.png";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("*********8")
    console.log(this.props.signupbutton,this.props.loginbutton)

    // console.log("this.props",this.props.loginbutton);
  }

  render() {
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
            <Link to="/create_account">
              <button class="signup">{this.props.signupbutton}</button>
            </Link>

            <Link className="login_link" to="/login">
              <button class="login">{this.props.loginbutton}</button>
            </Link>
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
