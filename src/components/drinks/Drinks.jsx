import React, { useState } from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import "./Drinks.css";

export const Drinks = ({ drinkDatas, modal, setModal }) => {
  return (
    <div className="drink-card-container">
      {!modal &&
        drinkDatas.map((drink, index) => (
          <motion.div
            className="drink-card"
            key={index}
            animate={{ x: 0, scale: 1 }}
            initial={{ x: -100, scale: 0 }}>
            <div className="details">
              <h3>{drink.strDrink}</h3>
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
            <div className="image">
              <img src={drink.strDrinkThumb} alt="" />
            </div>
          </motion.div>
        ))}
      {modal}
    </div>
  );
};
