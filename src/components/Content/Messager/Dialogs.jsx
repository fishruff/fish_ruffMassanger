import React from "react";
import state from "../../../state";
import "./Dialogs.css";

const Dialogs = (props) => {

  let MessageItemsElement = state.MassagePage.MessageItems.map(m => <MessageItem Message={m.Message}/>)

  return (
      <div className="Dialog">
        <div className="dialogUser">
        <img src="https://cutt.ly/RnCo5U8" alt="" />
          <p>Fname Lname</p>
        </div>
        <div className="dial">
          <div className="mess">
          {MessageItemsElement} 
          </div>
          <div className="inputMess">
           <input></input>
           <button>send</button>
         </div>
        </div>
      </div>
      
  );
};

const MessageItem =(props)=>{return <p>{props.Message}</p>}

export default Dialogs;
