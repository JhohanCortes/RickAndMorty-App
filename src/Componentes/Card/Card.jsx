import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, image, id, onClose }) => {
  return (
    <div className="card">
      
      <Link to={`/detail/${id}`}>
        <div className="card-image-wrapper">
          <button  className="card-button" onClick={() => onClose(id)}>X</button>
          <div className="card-name">{name}</div>
          <img src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
};

export default Card;