import React, { Component } from "react";
import { firestore } from "../firebase";

class PostDetail extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    const { match } = this.props;
    firestore
      .collection("posts")
      .doc(match.params.postId)
      .get()
      .then((snapshot) => {
        this.setState({
          post: snapshot.data(),
        });
      });
  }

  render() {
    const { post } = this.state;
    return (
      <div class="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
