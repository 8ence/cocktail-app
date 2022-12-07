import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";

export const Search = ({
  changeInput,
  searchDrink,
  setSearchRandom,
  searchRandom,
  setRefresh,
  refresh,
  setDrinkDatas,
}) => {
  return (
    <div className="search-container">
      <TextField
        id="drink-field"
        label="Search..."
        variant="filled"
        style={{ backgroundColor: "white", width: "100%", color: "red" }}
        onChange={changeInput}
      />
      <div className="button-container">
        <Button variant="contained" onClick={searchDrink}>
          Lets Drink
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setSearchRandom(true);
            setRefresh(!refresh);
            setDrinkDatas(undefined);
          }}>
          {!searchRandom ? "Search Random" : "Search Again"}
        </Button>
      </div>
    </div>
  );
};
