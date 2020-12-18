import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        this.setState({
          posts,
        });
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div class="home">
        <h1>Uefa Nation Blog</h1>
        <div id="blog-by">by Aakash</div>
        {posts.map((post) => (
          <div class="post">
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
