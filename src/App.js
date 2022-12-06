import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Search } from './components/search/Search';
import { Drinks } from './components/search/drinks/Drinks';

function App() {
  
  const [drink, setDrink] = useState();
  const [updateDrink, setUpdateDrink] = useState();
  const [drinkDatas, setDrinkDatas] = useState();
  const [modal, setModal] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };

    // eslint-disable-next-line no-lone-blocks
    {
      drink !== undefined &&
        fetch(
          `${process.env.REACT_APP_API_URL}?s=${drink}`,
          options
        )
          .then((response) => response.json())
          .then((data) => setDrinkDatas(data.drinks))
          .catch((err) => console.error(err));
    }
  }, [drink]);

  const searchDrink = () => {
    setDrink(updateDrink);
  };

  const changeInput = (evt) => {
    setUpdateDrink(evt.target.value);
  };
  return (
    <div className="App">
      {!modal && <Search searchDrink={searchDrink} changeInput={changeInput}/>}
      {drinkDatas !== undefined && <Drinks drinkDatas={drinkDatas} modal={modal} setModal={setModal}/>}
    </div>
  );
}

export default App;
