import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import axios from "axios";
import "./static/newtopic.css";
import { Link, Redirect } from "react-router-dom";
let baseUrl= process.env.PRODUCTION ? "https://www.discors.tk" : "http://localhost:3000";
// let baseUrl ="https://www.discors.tk";   

// import Axios from "axios";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: " ", title: " ", category: "dicourse" }; // You can also pass a Quill Delta here
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/topics`, { ...this.state })
      .then(res => {
        this.props.history.push("/")
        console.log(res);
        console.log(res.data);

      })
      .catch(err => {
        console.log(err);
      });
  }

  handleTitleChange(value) {
    console.log(value);
    this.setState({
      title: this.refs.title.value
    });
  }
  handleCategoryChange(event) {
    // console.log(value);
    // console.log("#####1",event.target)

    this.setState({
      // category: this.refs.category.value
      category: event.target.value
    });
  }
  handleContentChange(content, delta, source, editor) {
    this.setState({
      content: content
    });
  }

  render() {
    return (
      <div>
        <div class="main_container">
          <div class="new_topic1">
            {/* <button class="new_back" type="submit">
              {" "}
              <img src="https://image.flaticon.com/icons/svg/1059/1059106.svg" />{" "}
            </button>{" "} */}
            <div class="newtopic_icon">Create a new topic</div>
            <Link to={{ pathname: "/" }}>
              <div class="close_mark">
                <img
                  class="close_mark_logo"
                  src="https://image.flaticon.com/icons/svg/32/32178.svg"
                />
              </div>
            </Link>
          </div>
          <form
            onSubmit={this.handleSubmit}
            method="post"
            className="form-inline"
          >
            <div class="title_class">
              <input
                type="text"
                name="title"
                placeholder="Type title, or paste a link here"
                onChange={this.handleTitleChange}
                ref="title"
                required
              />
            </div>

            <div class="dropdowns">
              {/* <div class="category">
                <button class="dropbtn">
                  Dropdown
                  <i class="fa fa-caret-down" />
                </button>
              </div> */}
              {/* <div class="tags">
                <input
                  type="text"
                  name="category"
                  ref="category"
                  onChange={this.handleCategoryChange}
                  placeholder="category"
                  required
                />
              </div> */}
              {/* <div className="form-group"> */}
                       <select className="form-control" value={this.state.category} onChange ={this.handleCategoryChange} name="tag" id="sel1">
                         <option>Uncategorised </option>
                         <option>discourse</option>
                         <option>movies</option>
                         <option>videos</option>
                         <option>tech</option>
                       </select>
               {/* </div> */}
            </div>

            {/* {this.state.text} */}
            <div class="text_editor editor-container">
              <ReactQuill
                value={this.state.content}
                onChange={this.handleContentChange}
                placeholder="Content"
              />
            </div>

            <div class="last_row">
              <button class="create_button">
                <div class="create_topic">
                  <i class="fa fa-plus" /> Create Topic
                </div>
              </button>

              {/* <div class="cancel text_color">cancel</div>

              <div class="hide_preview text_color">&#60;&#60; hide_preview</div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MyComponent;
