import React from "react";

const SearchResults = ({ recipes, setRecipes }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.fields.id}>
            <h1>{recipe.fields.title}</h1>
            <img
              src={recipe.fields.image.fields.file.url}
              height="100px"
              alt={recipe.fields.title}
            />
            <ul>
              {recipe.fields.ingredients.map((ingredient) => {
                return (
                  <li>
                    {ingredient.quantity}
                    {ingredient.measure}
                    {ingredient.food}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
