import React from "react";
import NewPost from "./NewPost";
import "./ContentProfile.css";
//import state from "../../../state";

const MyPost = (props) => {
  let PostItemElement = props.state.ProfilePage.PostItem.map((m) => (
    <NewPost message={m.message} />
  ));

  return (
    <div className="MyPost">
      <div className="addPost">
        <h3>Add new post</h3>
        <textarea></textarea>
        <button onKeyPress="">send!</button>
      </div>

      <div className="posts">{PostItemElement}</div>
    </div>
  );
};

export default MyPost;
