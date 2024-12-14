import { useState } from "react";
import CurrentCook from "../CurrentCook/CurrentCook";
import WannaCooks from "../WannaCooks/WannaCooks";
import PropTypes from "prop-types";

const CookContainer = ({ wannaCooking, setWannaCooking }) => {
  const [currentCook, setCurrentCook] = useState([]);
  let [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setTotalCalorie] = useState(0);
  const [showRow, setShowRow] = useState(false);

  // currently cooking handler
  const wannaCookHandler = (recipe) => {
    const removeData = wannaCooking.filter(
      (cook) => cook.recipe_id !== recipe.recipe_id
    );
    setWannaCooking(removeData);
    const presentCook = wannaCooking.find(
      (cook) => cook.recipe_id === recipe.recipe_id
    );
    setCurrentCook((prevPresentCook) => [...prevPresentCook, presentCook]);
    const time = extractNumbers(recipe.preparing_time);
    setTotalTime((prevTime) => prevTime + time);
    const calorie = extractNumbers(recipe.calories);
    setTotalCalorie((prevCalorie) => prevCalorie + calorie);
    setShowRow(true);
  };

  const extractNumbers = (str) => {
    const num = str.replace(/[^0-9]/g, "");
    return parseInt(num);
  };

  return (
    <div className="flex flex-col mt-5 md:mt-0 border-t-2 border-t-amber-400 shadow-xl items-center justify-center text-center rounded-2xl">
      <WannaCooks
        wannaCooking={wannaCooking}
        wannaCookHandler={wannaCookHandler}
      ></WannaCooks>
      <CurrentCook
        currentCook={currentCook}
        totalTime={totalTime}
        totalCalorie={totalCalorie}
        showRow={showRow}
      ></CurrentCook>
    </div>
  );
};

CookContainer.propTypes = {
  wannaCooking: PropTypes.array.isRequired,
  setWannaCooking: PropTypes.func.isRequired,
};

export default CookContainer;
