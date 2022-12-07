import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Search } from './components/search/Search';
import { Drinks } from './components/drinks/Drinks';
import { Random } from './components/random/Random';

function App() {
  
  const [drink, setDrink] = useState();
  const [updateDrink, setUpdateDrink] = useState();
  const [drinkDatas, setDrinkDatas] = useState();
  const [modal, setModal] = useState();
  const [randomDrinkData, setRandomDrinkData] = useState()
  const [searchRandom, setSearchRandom] = useState(false)
  const [refresh, setRefresh] = useState(false)

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

  useEffect(() => {
    const random = {
	method: 'GET',
	headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/random.php', random)
	.then(response => response.json())
	.then(response => {
    setRandomDrinkData(response.drinks)
  })
	.catch(err => console.error(err));
  }, [refresh])

  const searchDrink = () => {
    setDrink(updateDrink);
  };

  const changeInput = (evt) => {
    setUpdateDrink(evt.target.value);
  };
  return (
    <div className="App">
      {!modal && <Search searchDrink={searchDrink} changeInput={changeInput} setSearchRandom={setSearchRandom} searchRandom={searchRandom} setRefresh={setRefresh} refresh={refresh} setDrinkDatas={setDrinkDatas}/>}
      {drinkDatas && <Drinks drinkDatas={drinkDatas} modal={modal} setModal={setModal}/>}
      {searchRandom && drinkDatas === undefined && <Random randomDrinkData={randomDrinkData}/>}

    </div>
  );
}

export default App;
