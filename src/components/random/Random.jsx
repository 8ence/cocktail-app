import React from "react";
import "./Random.css";

export const Random = ({ randomDrinkData }) => {
  return (
    <div className="random-drink-container">
      {randomDrinkData &&
        randomDrinkData.map((random) => (
          <div className="random-drink">
            <h2>{random.strDrink}</h2>
            <img src={random.strDrinkThumb} alt="" />
            <div className="random-ingredients">
              <div className="random-ingredient-list">
                <p>{random.strIngredient1}</p>
                <p>{random.strIngredient2}</p>
                <p>{random.strIngredient3}</p>
                <p>{random.strIngredient4}</p>
                <p>{random.strIngredient5}</p>
                <p>{random.strIngredient6}</p>
                <p>{random.strIngredient7}</p>
                <p>{random.strIngredient8}</p>
                <p>{random.strIngredient9}</p>
              </div>
              <div className="random-instruction">
                <p>{random.strInstructions}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
