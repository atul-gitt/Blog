import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, CreatePost, PostDetail, Navbar } from "./index";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:postId" exact component={PostDetail} />
          <Route path="/create-post" exact component={CreatePost} />
        </Switch>
      </div>
    );
  }
}

export default App;
