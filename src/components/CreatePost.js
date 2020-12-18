import React, { Component } from "react";
import { firestore } from "../firebase";

class CreatePost extends Component {
  state = {
    title: "",
    subTitle: "",
    content: "",
  };
  hnadleFormSubmit = (e) => {
    e.preventDefault();
    firestore.collection("posts").add({ ...this.state, createdAt: new Date() });
  };
  render() {
    const { title, subTitle, content } = this.state;
    return (
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={this.hnadleFormSubmit}>
          <div class="form-field">
            <label>Post Title</label>
            <input
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div class="form-field">
            <label>Post Sub-Title</label>
            <input
              value={subTitle}
              onChange={(e) => this.setState({ subTitle: e.target.value })}
            />
          </div>
          <div class="form-field">
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => this.setState({ content: e.target.value })}
            ></textarea>
          </div>
          <button class="create-post-btn">Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
