import React, { useState } from "react";
import "./Sidebar.css";
import Bottomnav from "./Bottomnav";
import Sidebarchat from "./Sidebarchat";
import mySvg from "../assets/avatar.jpg";
import addicon from "../assets/User_add.svg";
const Sidebar = () => {
  const [button, setButton] = useState();

  const submithandler = () => {
    alert("add new contact");
    setButton(true);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img className="profile" src={mySvg} alt="profile" />
        <div className="sidebar-right">
          <h2>Diana</h2>
        </div>
      </div>
      <div className="sidebar-chats">
        <Sidebarchat />
        <button className="addbtn" onClick={submithandler}>
          <img src={addicon} alt="add" />
        </button>
      </div>

      <Bottomnav />
    </div>
  );
};

export default Sidebar;
