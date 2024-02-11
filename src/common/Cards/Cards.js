import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const listDestination = [
  {
    src: "images/img1.jpg",
    text: "Explore the beauty of nature",
    label: "Adventure",
    path: "/",
    additionalInfo: ""
  },
  {
    src: "images/img2.jpg",
    text: "Touring the beautiful city",
    label: "Adventure",
    path: "/",
  },
  {
    src: "images/img3.jpg",
    text: "A visit to the Arab countries",
    label: "Adventure",
    path: "/",
  },
  {
    src: "images/img4.jpg",
    text: "A journey through the Sahara desert",
    label: "Adventure",
    path: "/",
  },
  {
    src: "images/img5.jpg",
    text: "Exploring the beauty of Nature, water fall",
    label: "Adventure",
    path: "/",
  },
  {
    src: "images/img6.jpg",
    text: "Exploring the beauty of Nature and seeing different cities",
    label: "Adventure",
    path: "/",
  },
  {
    src: "images/img7.jpg",
    text: "Exploring the beauty of Nature and seeing different cities",
    label: "Adventure",
    path: "/",
  },
  {
    src: "images/img-8.jpg",
    text: "Exploring the beauty of Nature and seeing different cities",
    label: "Adventure",
    path: "/",
  },
];

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these beautiful Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {listDestination.map((item, index) => (
              <CardItem
                key={index}
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
              />
            ))}
          </ul>
          <button className="view_more">View more</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
