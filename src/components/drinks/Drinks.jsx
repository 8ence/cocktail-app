import React, { useState } from "react";
import "./Drinks.css";
import Button from "@mui/material/Button";

export const Drinks = ({ drinkDatas, modal, setModal }) => {
  return (
    <div className="drink-card-container">
      {!modal &&
        drinkDatas.map((drink, index) => (
          <div className="drink-card" key={index}>
            <div className="details">
              <h2>{drink.strDrink}</h2>
              <p>{drink.strCategory}</p>
            </div>
            <div className="image">
              <img src={drink.strDrinkThumb} alt="" />
              <Button
                variant="contained"
                onClick={() =>
                  setModal(
                    <div className="modal-container">
                      <div className="ingredients-container">
                        <img src={drink.strDrinkThumb} alt="" />
                        <div className="ingredient">
                          <p>{drink.strIngredient1}</p>
                          <p>{drink.strIngredient2}</p>
                          <p>{drink.strIngredient3}</p>
                          <p>{drink.strIngredient4}</p>
                          <p>{drink.strIngredient5}</p>
                          <p>{drink.strIngredient6}</p>
                          <p>{drink.strIngredient7}</p>
                          <p>{drink.strIngredient8}</p>
                          <p>{drink.strIngredient9}</p>
                        </div>
                      </div>
                      <div className="instruction">
                        <p>{drink.strInstructions}</p>
                      </div>
                      <Button variant="contained" onClick={() => setModal()}>
                        Back
                      </Button>
                    </div>
                  )
                }>
                Show More
              </Button>
            </div>
          </div>
        ))}
      {modal}
    </div>
  );
};
