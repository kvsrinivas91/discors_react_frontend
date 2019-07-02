import React from 'react';
import './static/LogIn.css';
import {Link} from 'react-router-dom'

function LogIn() {
    return (
    <div>
        <div class="main_container">
  <div class="login_bar ">
    <div class="login_icon">
      <b>Log In</b>
    </div>
    < Link to={{pathname:'/'}}>
    <div class="close_mark">
      <img class="close_mark_logo" src="https://image.flaticon.com/icons/svg/32/32178.svg"/>
    </div>
    </ Link>
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
  <div class="user text_color">
    User
  </div>
  <input type="text" name="username" placeholder="email or username" required/>
  <div class="password text_color">
      Password
  </div>
  <input class="input" type="password" name="password" placeholder="Password" required/>
  {/* <div class="forgot_pwd text_color">
    I forgot my password
  </div> */}

  {/* <hr/> */}
  <div class="flex_bottom">
      <button class="login_button" type="submit"> Log in</button>
      {/* <div class="create">
         <a href="create_account.html"> <center>Create New Account</center></a>
      </div> */}
  </div>

</div>
  </div>
    );
  }
  
  export default LogIn;
