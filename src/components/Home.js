import React from "react";
import "./Home.css";
import { Navbar } from "react-bootstrap";
import Home1 from "../Images/Home1.png";
import title from "../Images/title.png";
import language from "../Images/language.png";
import Path3 from "../Images/Path3.png";
import image from "../Images/image.png";
import MUSIC from "../Images/MUSIC.png";
import Scroll from "../Images/scroll.png";
import Contact from "../Images/Contact.png";

function Home() {
  return (
    <>
    
      <div className="container">
        <div className="header">
          <img className="main_img" src={Home1} alt="HOME"></img>
          <Navbar className="nav_bar">
            
            <div className="main_title">
              <img className="title" src={title} alt="text"></img>
            </div>
            <div className="button-style">
              <button className="btn"> MUSIC</button>
              <button className="btn">SPORTS</button>
              <button className="btn"> ESPORTS</button>
              <img className="language" src={language} alt="language"></img>
            </div>
          </Navbar>
          <img className="path3" src={Path3} alt="Path"></img>
          <img className="image" src={image} alt="X"></img>
          <div className="home-button">
            <img className="music-btn" src={MUSIC} alt="Music"></img>
            <img className="scroll-btn" src={Scroll} alt="Scroll"></img>
            <div>
              <img className="contact-btn" src={Contact} alt="ContactUs"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
