import { useState } from "react";
import CookContainer from "../CookContainer/CookContainer";
import Recipes from "../Recipes/Recipes";
import toast from "react-hot-toast";

const RecipeContainer = () => {
  const [wannaCooking, setWannaCooking] = useState([]);
  const [uniqueCook, setUniqueCook] = useState([]);

  // wanna cook handler
  const wantToCookHandler = (recipe) => {
    // check no more than one similar data will be added
    if (!uniqueCook.includes(recipe.recipe_id)) {
      // update the previous data into cooking state
      setWannaCooking((prevCooking) => [...prevCooking, recipe]);
      // update the recipe_id into the uniqueCook array
      setUniqueCook((prevUniqueCooking) => [
        ...prevUniqueCooking,
        recipe.recipe_id,
      ]);
    } else {
      toast.error("Already Added..!!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-center md:items-start md:space-x-4 lg:max-w-[1400px] mx-auto mt-16">
      <Recipes wantToCookHandler={wantToCookHandler}></Recipes>
      <CookContainer
        wannaCooking={wannaCooking}
        setWannaCooking={setWannaCooking}
      ></CookContainer>
    </div>
  );
};

export default RecipeContainer;
