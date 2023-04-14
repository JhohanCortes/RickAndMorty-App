import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({characters, onClose}) => {

    return (
        <div className="cards">
            {characters.map (( {name, status, species, gender, origin, image, id}) => {
                return <Card
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
                onClose={onClose}
                />
            })
            }
        </div>
    )
}

export default Cards