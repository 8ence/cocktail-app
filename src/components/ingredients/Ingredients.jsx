import React from "react";
import "./Ingredients.css";
import Button from "@mui/material/Button";

export const Ingredients = ({ ingredient, fromIngredient, setDrink }) => {
  return (
    <div className="from-ingredient-container">
      <h4>Check what u can do with {ingredient}</h4>
      {/* {fromIngredient &&
        fromIngredient.map((drink, index) => (
          <div className="from-ingredient-card" key={index}>
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
        ))} */}
      {fromIngredient && fromIngredient !== "None Found" ? (
        <div className="from-ingredient-card-container">
          {fromIngredient &&
            fromIngredient.map((drink, index) => (
              <div className="from-ingredient-card" key={index}>
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
      ) : (
        <div>Nincs hozzá pia</div>
      )}
    </div>
  );
};
