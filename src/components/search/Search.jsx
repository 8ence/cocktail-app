import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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
  autoComplete,
}) => {
  return (
    <div className="search-container">
      {/* <TextField
        id="drink-field"
        label="Search..."
        variant="filled"
        style={{ backgroundColor: "white", width: "100%", color: "red" }}
        onChange={changeInput}
      /> */}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={autoComplete}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="Drinks" />}
        onInputChange={changeInput}
      />
      <div className="button-container">
        <Button
          variant="contained"
          onClick={() => {
            setRefresh(!refresh);
            searchDrink();
          }}>
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
