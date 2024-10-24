import { Link } from "react-router-dom";
import "./home.css";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {

  const [typingStatus, setTypingStatus] = useState("human")

  return (
    <div className="home">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>SAGE AI</h1>
        <h2>Your AI-powered assistant</h2>
        <h3>
          Offering fast, personalized solutions to boost productivity and
          streamline tasks effortlessly.
        </h3>
        <p>This AI ChatBot clone, developed by Rishin, integrates Gemini AI for intelligent interactions. It’s a full-stack application with user authentication, a robust backend to store data, and a responsive frontend designed with React and JavaScript for a seamless user experience.</p>
        <Link to="dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src={typingStatus === "human" ? "/human1.jpeg" : "bot.png"} alt="" />
            <TypeAnimation
              sequence={[
                "Human: Why this AI over others?",
                2000,()=>{
                  setTypingStatus("bot")
                },
                "SAGE: Cause we better",
                2000,()=>{
                  setTypingStatus("human")
                },
                "Human: Prove It",
                2000,()=>{
                  setTypingStatus("bot")
                },
                "SAGE: WAIT. they don't love u like i love u",
                2000,
                ()=>{
                  setTypingStatus("human")
                },
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
