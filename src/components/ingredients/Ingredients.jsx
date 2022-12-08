import React from "react";
import "./Ingredients.css";
import Button from "@mui/material/Button";
import sad from "./sad.svg";

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
              <div
                className="from-ingredient-card"
                key={index}
                style={{
                  backgroundImage: `url(${drink.strDrinkThumb})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundColor: "#FFFFF",
                }}>
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
        <div className="empty-drink">
          <p>Sorry, we dont find any drink from {ingredient}</p>
          <img src={sad} alt="" />
        </div>
      )}
    </div>
  );
};
