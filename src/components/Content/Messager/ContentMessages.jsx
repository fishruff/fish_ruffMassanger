import React from "react";
//import state from "../../../state";
import "./ContentMessages.css";
import Dialogs from "./Dialogs";
import MessageUser from './MessageUser';

const ContentMessages = (props) => {
  let UsersInfoElement = props.state.UsersInfo.map(u => <MessageUser UserName={u.UserName} id={u.id} LMessage={u.LMessage}/> );

  return (
    <div className="content">
      <div className="Messages">
       <div className="users">
          { UsersInfoElement }
       </div>
       <div className="dialogs">
          <Dialogs />
       </div>
      </div>
    </div>
        
  );
};

export default ContentMessages;
