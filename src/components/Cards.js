import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out other beautiful Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem
            src='images/img1.jpg'
            text='Exploring the beauty of Nature and seeing different cities'
            label='Adventure'
            path="/services"
          />
          <CardItem
            src='images/img2.jpg'
            text='Touring the beautiful city'
            label='Adventure'
            path="/services"
          />
          <CardItem
            src='images/img3.jpg'
            text='A visit to the Arab coutries'
            label='Adventure'
            path="/services"
            />
          <CardItem
            src='images/img4.jpg'
            text='A journey through the Shahara desert'
            label='Adventure'
            path="/services"
          />
          </ul>

          <ul className="cards__items">
          <CardItem
            src='images/img5.jpg'
            text='Exploring the beauty of Nature, water fall'
            label='Adventure'
            path="/services"
          />
          <CardItem
            src='images/img6.jpg'
            text='Exploring the beauty of Nature and seeing different cities'
            label='Adventure'
            path="/services"
          />
          <CardItem
            src='images/img7.jpg'
            text='Exploring the beauty of Nature and seeing different cities'
            label='Adventure'
            path="/services"
            />
          <CardItem
            src='images/img8.jpg'
            text='Exploring the beauty of Nature and seeing different cities'
            label='Adventure'
            path="/services"
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
