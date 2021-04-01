import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import DisplayRecipe from "./DisplayRecipe";

const APP_ID = "742d5385";
const APP_KEY = "6f2f4156d908b7af3d69c91a2bb763cd";

const Body = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]); //end useEffect hook

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setRecipes(data.hits);
  }; //end getRecipes function

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }; //end updateSearch

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <form className="form" onSubmit={getSearch}>
        <input
          className="input"
          value={search}
          type="text"
          placeholder="Search..."
          onChange={updateSearch}
        ></input>
        <button>Search</button>
      </form>

      {query !== "" ? (
        <div className="cards">
          {recipes.map((recipe) => (
            <DisplayRecipe
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}
              calories={recipe.recipe.calories}
            />
          ))}
        </div>
      ) : (
        <div id="loading">
          <div>
            <p id="load_status">Search for any food recipe</p>
          </div>
          <Spinner animation="grow" variant="info"></Spinner>
          <Spinner animation="grow" variant="warning"></Spinner>
          <Spinner animation="grow" variant="success"></Spinner>
        </div>
      )}
    </div>
  );
}; //end body component

export default Body;
