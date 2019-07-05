import React from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
// let baseUrl= process.env.PRODUCTION ? "http://ec2-18-191-225-185.us-east-2.compute.amazonaws.com:3000" : "http://localhost:3000";
let baseUrl ="https://clone.discors.tk/topics";   

const { Component } = React;

const Item = ({ data })=>{
  return (

    <div>
   <div class="sub-container ">
   <div class="topic-main ">
   < Link className="link_topic" to={{pathname:`/topic/${data.id}`, state: {topicId: data.id}}}>
     <div class="topic-up">
       {data.name}
     </div>
     </Link>
     <div class="topic-down flex-container">

      {(() => {
        switch (data.category) {
          case "discourse":   return <div class="topic-image topic-image1"></div>;
          case "tech": return <div class="topic-image topic-image2"></div>;
          case "movies": return <div class="topic-image topic-image3"></div>;
          case "videos": return <div class="topic-image topic-image4"></div>;
          default:      return <div class="topic-image topic-image5"></div>;
        }
      })()}

       <div class="topic-down-text">
         {data.category}
       </div>
     </div>
 </div>
 
     
  <div class="user-logos ">
    {/* <img class="user-logo-image" src={data.likedUserIcon[0].url}/>       */}
    {data.likedUserIcon.map((url, index)=>(
      <img class="user-logo-image1" src={url.url}/>
    ))}
   
 </div>

 <div class="no1">
   {data.viewCount}
 </div>

 <div class="no2">
 {data.comments}
 {/* {console.log("~~~~~~~~11",data)} */}
 </div>

 <div class="no3">
 <Moment fromNow ago>{data.createdAt}</Moment>
 </div>
</div>
<hr className="hr_main" />


</div>

  );
};


class TopicListItem extends Component{

constructor(){
  super();
  this.state={
    topics:[]
  }
  this.handleCategoryChange=this.handleCategoryChange.bind(this);
}

handleCategoryChange(event) {

  this.setState({
    category: event.target.value
    
  });

  axios.get(`${baseUrl}/categories/${event.target.value}/topics`)
    .then(res=>{
      // console.log("*****************1",this.state.topics);
      // var v=this.state.topics;
      // res.data.topic.map(topic_item=>(
      // v.push(topic_item)
      // ))
      this.setState({
        topics:res.data.topic
      });
      // console.log("*****************2",this.state.topics);
    })
   
  
};
  componentDidMount(){
    this.fetch();
  }

   async fetch(){
     
    await axios.get(`${baseUrl}/topics`)
    .then(res=>{
      // console.log("*****************1",this.state.topics);
      var v=this.state.topics;
      res.data.topic.map(topic_item=>(
      v.push(topic_item)
      ))
      this.setState(this.state.topics=v);
      // console.log("*****************2",this.state.topics);
    })
   }


   render(){
    return (
    <div>
    <div class="main-container">  
    
    <div class="cat_bar">
    <select className="categories" value={this.state.category} onChange ={this.handleCategoryChange} name="tag" id="sel1">
      <option>all </option>
      <option>discourse</option>
      <option>movies</option>
      <option>videos</option>
      <option>tech</option>
    </select>
    
    <Link to="/newtopic">
    <div className="new_topic_container">
      <div className="new_topic"><i class="fa fa-plus" aria-hidden="true"> New Topics</i></div>
      </div>
    </Link>
    </div>
    <hr className="hr_first"></hr>


    {this.state.topics.map(item=>(
      <Item data={item}/>
      
    ))}

    </div>

    </div>
    );
   }
  }
  
  export default TopicListItem;
