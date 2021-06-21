import React from "react";
import "./ContentProfile.css";
import ProfileInfo from "./ProfileInfo";
import MyPost from "./MyPost";

const ContentProfile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPost state={props.state} />
    </div>
  );
};

export default ContentProfile;
