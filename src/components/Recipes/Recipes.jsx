import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ wantToCookHandler }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="">
      {/* recipes data  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            wantToCookHandler={wantToCookHandler}
            recipe={recipe}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  wantToCookHandler: PropTypes.func.isRequired,
};

export default Recipes;
