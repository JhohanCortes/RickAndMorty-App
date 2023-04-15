import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, image, id, onClose }) => {
  return (
    <div className="card">
      
        <div className="card-image-wrapper">
          <button  className="card-button" onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
          <div className="card-name">{name}</div>
          <img src={image} alt={name} />
      </Link>
        </div>
    </div>
  );
};

export default Card;