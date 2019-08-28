import React from "react";
import "./Body.css"



function Body(props) {
  return (
      <div className="bodyContainer">
          <div className="pictureElement">
              <h3>Picture of the Day</h3>
              <img id="mainPicture" src={props.pic} alt="Random"/>
          </div>
          <div className="infoBox">
          <div className="info">
              <div className="picTitle">
              <h2>Title: {props.title}</h2>
              </div>
              <div>
                  
                  <p> 
                     <b className="boldBody">Explanation:</b> {props.body}
                  </p>
              </div>
        </div>
            </div>
    </div>
  );

}

export default Body;