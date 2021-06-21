import React from "react";
import "./NewPost.css";

const NewPost = (props) => {
  return (
    <div className="Post">
      <div className="name">
        <img
          src="https://cutt.ly/tnMyc5d"
          alt=""
        />
        <div className="info">
          <a href="localhost:3000">
            <h3>Fish Ruff</h3>
          </a>
          <p>{today}</p>
        </div>
      </div>
      <div className="PostContent">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + month + "-" + day;

export default NewPost;
