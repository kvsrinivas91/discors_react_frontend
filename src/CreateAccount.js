import React from 'react'
import './static/CreateAccount.css';
import {Link} from 'react-router-dom'
let baseUrl= process.env.PRODUCTION ? "http://ec2-18-217-54-224.us-east-2.compute.amazonaws.com:3000" : "http://localhost:3000";

// let data="iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg=="
function CreateAccount() {
    return (
        <div>
              <div class="main_container">
  <div class="newaccount_bar ">
    <div class="newaccount_icon">
      <b>Create new account</b>
    </div>
    < Link to={{pathname:'/'}}>
    <div class="close_mark">
      <img class="close_mark_logo" src="https://image.flaticon.com/icons/svg/32/32178.svg"/>
    </div>
    </ Link>
  </div>

  {/* <hr/> */}

    {/* <div class="create_sites ">
      <div class="flex_container">
        <button class="facebook flex_container_logo">
          <img 
          src={`data:image/png;base64,${data}`}/>
          with Facebook
        </button>

        <button class="google flex_container_logo">
            <img src="http://pngimg.com/uploads/google/google_PNG19635.png"/>
          with Google
        </button>
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
      </div>
    </div> */}

  {/* <hr/> */}

  <div class="user text_color">
    Email
  </div>

  <form action="http://localhost:3000/users" method="post" className="form-inline">

  <input type="text" name="email"  required/>

  <div class="text_light">Never shown to the public</div>

  <br/>
  
  <div class="user text_color">
    Username
  </div>
  <input type="text" name="username"  required/>
  <div class="text_light">unique, no spaces, short</div>

  <br/>
  
  <div class="user text_color">
    Name
  </div>
  <input type="text" name="name"  required/>
  <div class="text_light">your full name(optional)</div>

  <br/>
  
  <div class="password text_color">
      Password
  </div>
  <input class="input" type="password" name="password"  required/>
  
  

  <div class="text_light">at least 10 characters</div>
  <br/>

  <hr/>
  <div class="flex_bottom">
    <div  class="create_new_button">  <button  type="submit">Submit</button></div>
    
      {/* <div class="login">
         <a href="login.html"> <center>Log in</center></a>
      </div> */}
  </div>
  </form>

</div>
        </div>
    )
}

export default CreateAccount
