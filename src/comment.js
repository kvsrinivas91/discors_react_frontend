import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import axios from "axios";
import "./static/comment.css";
import { Link, Redirect } from "react-router-dom";
let baseUrl="http://localhost:3000";
// import Axios from "axios";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" }; // You can also pass a Quill Delta here
    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("$$$$$$$$$1",this.props.comment.match.params.topic_id)
  }
  
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/topics/${this.props.comment.match.params.topic_id}/comments`, {
        comment: {content: this.state.comment}
      },{ ...this.state })
      .then(res => {
        this.props.comment.history.push(`/topic/${this.props.comment.match.params.topic_id}`);
        // console.log("|||||||||||",this.props)
        // <Redirect to='/' />
        // console.log(res);
        // console.log(res.data);
        // console.log("{}{}{}{}{}{}{}",this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleContentChange(content, delta, source, editor) {
    console.log(content)
    this.setState({
        comment : content,
    });
  }

  render() {
    return (
      <div>
        <div class="main_container">
          {/* {this.state.text} */}
          <form onSubmit={this.handleSubmit} method="post" className="form-inline">
          <div class="text_editor editor-container">
            <ReactQuill
              value={this.state.comment}
              onChange={this.handleContentChange}
            />
          </div>
          <button class="submit_button">
            <div class="submit_comment">Reply</div>
          </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MyComponent;
