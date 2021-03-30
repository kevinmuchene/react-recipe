import React, { useEffect } from "react";

const APP_ID = "742d5385";
const APP_KEY = "6f2f4156d908b7af3d69c91a2bb763cd";

const Body = () => {
  useEffect(() => {}); //end useEffect hook

  const getRecipes = async () => {
    const response = await fetch(
      `htttps://api.edamam.com/search?&q=&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
  }; //end getRecipes function

  const updateSearch = (e) => {}; //end updateSearch
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={updateSearch}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}; //end body component

export default Body;
