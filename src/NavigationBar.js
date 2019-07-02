import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import dicorslogo from "./static/discorslogo.png";

function NavigationBar() {
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
            <button class="signup"> Signup</button>
          </Link>

          <Link className="login_link" to="/login">
            <button class="login">Log in</button>
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

export default NavigationBar;
