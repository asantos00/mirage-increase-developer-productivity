import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./server";
import "./styles.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://alexandrempsantos.com/api/posts")
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  return (
    <div className="App">
      {posts.map(post => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
