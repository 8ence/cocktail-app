import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";

export const Search = ({ changeInput, searchDrink }) => {
  return (
    <div className="search-container">
      <TextField
        id="drink-field"
        label="Search..."
        variant="filled"
        style={{ backgroundColor: "white", width: "100%", color: "red" }}
        onChange={changeInput}
      />
      <Button variant="contained" onClick={searchDrink}>
        Lets Drunk
      </Button>
    </div>
  );
};
