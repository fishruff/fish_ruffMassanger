import React from "react";
import profileImg from "./../../../img/profile-img.png";
import "./ContentProfile.css";

const ProfileInfo = (props)=>{
  return(
    <div className="Head">
    <div className="me">
      <img src={profileImg} className="profileImg" alt="" />
    </div>
    <div className="Name">
      <h2>Fish Ruff</h2>
      <div className="about">
        <p>lorem sad sadas cxv qwe sad asd asd</p>
      </div>
    </div>
  </div>
  )
}


export default ProfileInfo;
