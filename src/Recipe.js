import React from "react";
import './App.css';


const Recipe = ({foodName,calories,ingredients,image}) => {
    return(
        <div className="show-recipe">
            <h1 className="title-syle">{foodName}</h1>
            <hr className="line"></hr>
            <p>Calories (kcal): {calories} per serving</p>
            <hr className="line"></hr>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img className="image" src={image} alt=""/>
        </div>
    );
}

export default Recipe;