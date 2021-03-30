import React, { useState, useEffect } from "react";
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
      <form onSubmit={getSearch}>
        <input
          value={search}
          type="text"
          placeholder="Search..."
          onChange={updateSearch}
        ></input>
        <button>Search</button>
      </form>
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
    </div>
  );
}; //end body component

export default Body;
