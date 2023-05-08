import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li className="cards__item" onClick={toggleModal}>
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            ></img>
          </figure>

          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text} </h5>
          </div>
        </Link>
      </li>

      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <img src={props.src} alt="Travel Image" className="modal__img" />
            <p>{props.text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardItem;
