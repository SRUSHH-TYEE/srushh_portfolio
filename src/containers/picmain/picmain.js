import React, { useState } from "react";
import "./Picmain.scss"

const Picmain = () => {
    return (
      <div className="greeting-image-div">
      <div className="wavy-frame-container">
        <div className="wavy-frame">
          <img
            className="profile-image-my"
            alt="your profile picture"
            src={require("../../assets/images/mypic.jpg")}
          />
        </div>
      </div>
    </div>
      );
    }
   

export default Picmain;