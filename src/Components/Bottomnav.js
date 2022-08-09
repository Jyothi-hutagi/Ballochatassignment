import React, { useState } from "react";
import "./Bottomnav.css";
import img from "../assets/Home.svg";
import img1 from "../assets/Filter.svg";
import img2 from "../assets/Search.svg";

const Bottomnav = () => {
  const[btn,setBtn]= useState()

  const clicked=()=>{
    alert('Button was clicked')
    setBtn(true)
  }

  return (
    <div className="bottombar">
      <div className="bottomnav">
        <button className="iconbtn" onClick={clicked}>
          <img className="bn-tab" src={img} alt="home" />
        </button>
        <button className="iconbtn" onClick={clicked}>
          <img className="bn-tab" src={img1} alt="filter" />
        </button>
        <button className="iconbtn" onClick={clicked}>
          <img className="bn-tab" src={img2} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Bottomnav;
