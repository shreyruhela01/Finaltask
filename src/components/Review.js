import React from "react";
import "./Review.css";

function Review() {
  return (
    <div className="Section">
      <div className="child-container fourth-sec">
        <div className="child-4">
          <div className="img4 img4-1">
            <h1>1M+</h1>
          </div>
          <p>Engaged email subscribers</p>
        </div>
        <div className="child-4">
          <div className="img4  img4-2">13+</div>
          <p>Location on all continents</p>
        </div>
        <div className="child-4">
          <div className="img4 img4-3">80+</div>
          <p>Active countries and and translated into 10+ languages</p>
        </div> 
        <div className="child-4">
          <div className="img4 img4-4">300k+</div>
          <p> Social media followers</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
