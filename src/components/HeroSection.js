import React from "react";
import { Button } from "./Button";
import '../App.css';
import './HeroSection.css';


function HeroSection() {

  return (
    <div className="hero-container">
      <h1>TRAVEL THE WORLD</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonSize='btn--primary'
          buttonStyle='btn--outline'
        > GET STARTED
        </Button>

        <Button
          className='btns'
          buttonSize='btn--large'
          buttonStyle='btn--primary'
        > WATCH DEMO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>)
 };


export default HeroSection;