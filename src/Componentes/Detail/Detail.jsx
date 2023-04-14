import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css"

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'c59957df75cb.f1a442aca22952cb7edc';


const Detail = () => {
    
    const { id } = useParams() // recoge un objeto con una sola propiedad ( en este caso id )
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id]); //Es importante tener esta array de dependencia para que no haga un loop infinito

    return ( 
        <div className="detail-container">
            <img src={character.image} alt={character?.name} className="character-image" />
            <div className="character-details">
                <h2>{character?.name}</h2> 
                <ul>
                    <li><strong>Status:</strong> {character?.status}</li>
                    <li><strong>Species:</strong> {character?.species}</li>
                    <li><strong>Gender:</strong> {character?.gender}</li>
                    <li><strong>Origin:</strong> {character?.origin?.name}</li>
                </ul>
            </div>
        </div>
    )
}

export default Detail
