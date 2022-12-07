import React from "react";
import "./Ingredients.css";
import Button from "@mui/material/Button";

export const Ingredients = ({ ingrdeient, fromIngredient, setDrink }) => {
  return (
    <div className="from-ingredient-container">
      {fromIngredient &&
        fromIngredient.map((drink) => (
          <div className="from-ingredient-card">
            <div>
              <h3>{drink.strDrink}</h3>
              <Button
                variant="contained"
                onClick={() => {
                  setDrink(drink.strDrink);
                }}>
                Show more
              </Button>
            </div>
            <img src={drink.strDrinkThumb} alt="" />
          </div>
        ))}
    </div>
  );
};
