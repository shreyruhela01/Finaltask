import React from "react";
import "./Collaboration.css";
import colla from "../Images/colla.png";
import Group from "../Images/Group.png";
import boy from "../Images/boy.png";
import basket from "../Images/basket.png";
import scooter from "../Images/scooter.png";
import computer from "../Images/computer.png";
import stand from "../Images/stand.png";
import xtixs from "../Images/xtixs.png";

function Collaboration() {
  return (
    <div className="collabration">
      <div className="col-main">
        <img className="image_sec5" src={colla}></img>
      </div>

      <div className="backx"></div>

      <p className="cola-para-1">
        XTIXS has multiple integrations available to ensure the relationship
        between fan and business is succient.<br/> we are agnostic & collabrative by
        choice.
      </p>

      <div className="colla-bt">
        <button className="colla-bts">SPORTS</button>
        <button className="colla-bts"> RESELL/TICKETSWAP</button>
        <button className="colla-bts">TRAVEL SOLUTIONS</button>
        <button className="colla-bts">INSURANCE</button>
      </div>
      <div className="colla-items">
        <div className="frame1">
          <div className="frame1-para">
            The world we live in is becoming increaigly unpredicable and a
            numbers of eventualities amy arise putting your business and
            customer at risk
          </div>
          <div className="frame1-img">
            <img src={Group}></img>
          </div>
        </div>
        <div className="frame2">
          <img src={boy}></img>
        </div>

        <div className="frame3">
          <img src={basket}></img>
          <div className="frame3-para">
            To mitigate the risks of event cancellation,Event Protect have
            developed partnerships to support worldwide delivery of our
            comprehensive package suited to cover all types of events
          </div>
          <button className="frame3-bt">SPORTS</button>
        </div>

        <div className="frame4">
          <div>
            <button className="frame4-bt">INSURANCE</button>
            <img src={scooter} />
          </div>
        </div>
      </div>
      <div className="col-upper">
        <img src={xtixs}></img>
        <div className="upper-item">
          <div className="left">
            <p>KNOW YOUR FANS.</p>
          </div>
          <div>
            <img className="computer" src={computer}></img>
            <img className="stand_com" src={stand}></img>
          </div>
          <div className="right">
            <p>UNLOCK NEW VALUE.</p>
          </div>
        </div>
      </div>
      <br/> <br/>
      <p className="col-last">
        With FanXP, you as an event organizer get to dive deeper into your fan
        profile in order to deliver a better experience using data as your
        decision maker. Collect the identity, location and engagement habits of
        every fan and put that data to work. Our partner with Pumpjack
        simplifies the collection of data point and insights to help you grow
        your commercial opportunities.
      </p>
      <br />
      <hr></hr>
    </div>
  );
}

export default Collaboration;
