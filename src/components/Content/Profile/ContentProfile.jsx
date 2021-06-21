import React from "react";
import "./ContentProfile.css";
import ProfileInfo from './ProfileInfo'
import MyPost from './MyPost'

const ContentProfile = () => {
  return (
    <div className="content">
      <ProfileInfo/>
      <MyPost/>
    </div>
  );
};

export default ContentProfile;
