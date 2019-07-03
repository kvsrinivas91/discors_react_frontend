import React from "react";
import axios from "axios";
import "./static/topic_app.css";
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
// let baseUrl="http://ec2-18-217-54-224.us-east-2.compute.amazonaws.com:3000";
let baseUrl="http://localhost:3000"

// import 'moment-timezone';
var HtmlToReactParser = require('html-to-react').Parser;

var htmlToReactParser = new HtmlToReactParser();
 

const { Component } = React;

const Item = ({ data }) => {
  return (
    <div >
      <div class="title">
        <h3>{data.name}</h3>
      </div>

      <div class="topic-down flex-container">
        {/* <div class="topic-image topic-image1" /> */}
        {(() => {
        switch (data.category) {
          case "discourse":   return <div class="topic-image topic-image1"></div>;
          case "tech": return <div class="topic-image topic-image2"></div>;
          case "movies": return <div class="topic-image topic-image3"></div>;
          case "videos": return <div class="topic-image topic-image4"></div>;
          default:      return <div class="topic-image topic-image5"></div>;
        }
      })()}
        <div class="topic-down-text">{data.category}</div>
      </div>
      <hr/>
      <br/>
      <div class="sub_container">
        {/* <hr/>   */}
        <div class="b_b user">
              <img class="tt1" src={data.url}/>{console.log("222222",data.url)}
        </div>
        <div class="sub_container_top">
          <div class="left">
            
            <div class="sub_name">{data.username}</div>
          </div>

          <div class="sub_container_top_right">
            <div class="one">0</div>

            <div class="pencil">
              <i
                class="fa fa-pencil"
                style={{ fontSize: "20px", color: "#848484" }}
              >
                {" "}
              </i>
            </div>

            <div class="date">  <Moment fromNow ago>{data.createdAt}</Moment> </div> 
          </div>
        </div>
        
        <div class="sub_container_body">
          <p>{htmlToReactParser.parse(data.content)}</p>
        </div>
        <div class="sub_container_body_bottom">
          <div class="heart flexicon1">
            {" "}
            <i class="fa fa-heart-o" />
          </div>
          <div class="chain flexicon2">
            <i class="fa fa-chain" />
          </div>
          {/* <div class="dots flexicon3">
            <i class="fa fa-ellipsis-h" />
          </div> */}
          
          <div class="delete flexicon3">
            <i class="fa fa-trash" />
          </div>
          
          {/* <Link to="/comment"> */}
          < Link to={{pathname:`/${data.id}/comment`, state: {topicId: data.id}}}>
            {console.log("$$$$$$$$$$$$3",data.id )}
            <div id="replyid"  class="reply flexicon4">
              <i class="fa fa-reply" /> Reply
            </div>
          </Link>

        </div>
        <br />
        <div class="bottom_bar">
          <div class="created">
            <div>created</div>
            <div>
              <img
                class="tt1"
                src={data.url}
                />
              <Moment fromNow ago>{data.createdAt}</Moment> ago
            </div>
          </div>
          <div class="lastreply">
            <div>Last reply</div>
            {/* <div><img class="tt1" src={data.comments[data.comments.length-1].url}/></div> */}
            {console.log("5555555555555555",data)}
          </div>
          <div class="replies">
            <div class="four">{data.replyCount}</div>
            <div>replies</div>
          </div>

          <div class="views">
            <div class="four">{data.viewCount}</div>
            <div>views</div>
          </div>

          <div class="users">
            <div class="four">{data.userCount}</div>
            <div>users</div>
          </div>

          <div class="icons">
            {/* <img class="tt2" src='<%= topic["comments"][i]["url"] %>'/> */}
          </div>
        </div>
      </div>
      {data.comments.map(cmt => (
        <div class="sub_container1">
          <hr />
          <div class="b_b user">
                <img class="tt1" src={cmt.url} />
              </div>
          <div class="sub_container_top">
           
            <div class="left">
              
              <div class="sub_name">{cmt.username}</div>
            </div>
            <div class="sub_container_top_right">
              <div class="one">0</div>
              <div class="date"> <Moment fromNow ago>{cmt.createdAt}</Moment> ago</div>
            </div>
          </div>

          <div class="sub_container_body">
            <p>{htmlToReactParser.parse(cmt.content)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

class topic extends Component {
  constructor(props) {
    super();
    this.state = {
      topic_current: []
    };
    // console.log("&&&&&&&&&1", props.topic.location.pathname);
    // console.log("&&&&&&&&&2", this.props);
  }
  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    console.log("&&&&&&&&&3", this.props.topic.match.params.topic_id);

    var url = `${baseUrl}/topics/${this.props.topic.match.params.topic_id}`;

    await axios.get(url).then(response => {
      // console.log("**********1", response.data.topic);
      var v = this.state.topic_current;
      v.push(response.data.topic);

      this.setState((this.state.topic_current = v));
      // console.log("**********2", this.state.topic_current);
    });
  }
  
//
  render() {
    return (
      <div>
        <div className="main_container_topic">
          {this.state.topic_current.map(item => (
            <Item data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default topic;
