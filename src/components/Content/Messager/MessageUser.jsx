import React from "react";
import "./MessageUser.css";
import { NavLink } from "react-router-dom";



const MessageUser = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="content">
      
      <NavLink to={path}>
      <div className="Message">
        <div className="user">
          <img src="https://cutt.ly/RnCo5U8" alt="" />
          <p>{props.UserName}</p>
        </div>
          <p>{props.LMessage}</p>
    </div>
      </NavLink>
      </div>
  );
};

export default MessageUser;
