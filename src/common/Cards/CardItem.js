import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

function CardItem(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li className="cards__item">
        <div
          className="cards__item__link"
          to={props.path}
          onClick={handleModal}
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="travelling"
              className="cards__item__img"
            ></img>
          </figure>

          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text} </h5>
          </div>
        </div>
      </li>

      {showModal && (
        <Modal
          onClose={handleModal}
          src={props.src}
          label={props.label}
          text={props.text}
        />
      )}
    </>
  );
}

export default CardItem;
