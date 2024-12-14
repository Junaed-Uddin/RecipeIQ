import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Recipe = ({ recipe, wantToCookHandler }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="card flex flex-col justify-between lg:card-compact bg-base-100 border-t-2 border-t-amber-400 shadow-xl">
      <figure>
        <img
          className="w-full p-3 h-56 rounded-3xl object-cover"
          src={recipe_image}
          alt="recipe-image"
        />
      </figure>
      <div className="p-4 md:p-5 divide-y divide-dashed">
        <div className="mb-3 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold py-2 truncate">
            {recipe_name}
          </h2>
          <p className="text-gray-500">{short_description}</p>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-[15px] mb-3 mt-1 font-semibold">
            Ingredients: {ingredients.length}
          </p>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </div>
        <div className="py-3 flex flex-col flex-grow">
          <div className="flex space-x-8 mb-5">
            <div className="flex items-center space-x-2">
              <CiClock2 className="text-xl" />
              <p>{preparing_time}</p>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineFire className="text-xl" />
              <span>{calories}</span>
            </div>
          </div>
          <button
            onClick={() => {
              wantToCookHandler(recipe);
            }}
            className="btn btn-sm px-7 h-10 w-full md:w-24 mt-1 rounded-3xl text-white btn-success"
          >
            Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  wantToCookHandler: PropTypes.func.isRequired,
};

export default Recipe;
