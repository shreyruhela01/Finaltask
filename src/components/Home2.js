import React from "react";
import "./Home2.css";
import scr1 from "../Images/scr1.png";
import scr2 from "../Images/scr2.png";
// import black from './Images/black.png';
import design from "../Images/design.png";
import xtixs from "../Images/xtixs.png";
import rectangle4 from "../Images/rectangle4.png";
import ecllipse from '../Images/ecllipse.png';

function Home2() {
  return (
    <>
      <div className="home2">
        <div className="home2pic">
          <div className="title">
            <p className="title1">
              FOR TRUE <br /> CREATORS.
            </p>
            <div className="paragraph">
              <p className="title2">
                We are building a future proof ticketing platform with
                <br />a collaborative mindset, appreciating the nuances of{" "}
                <br />
                being an extension of your brand when engaging with <br /> your
                fans. A flexible and proactive attitude that will <br />
                make xtixs feel like your partner rather than a service
                provider.
              </p>
            </div>
            <button className="btn1">
              {" "}
              BOOK A DEMO{" "}
              <img className="design" src={design} alt="design"></img>
            </button>
            <br /> <br />
          </div>
          <div className="scr1">
            <img src={scr2} alt="scr1"></img>
          </div>
          <div className="scr2">
            <img src={scr1} alt="scr1"></img>
          </div>
          <div>
            <img className="blur" src={rectangle4} alt="blur"></img>
            <img className="blur1" src={ecllipse} alt="blur"></img>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className="xtixs">
          <img src={xtixs} alt="X"></img>
        </div>
      </div>
    </>
  );
}

export default Home2;
