import CurrentCookingTable from "../CurrentCookingTable/CurrentCookingTable";
import PropTypes from 'prop-types';

const CurrentCook = ({ currentCook, totalTime, totalCalorie, showRow }) => {
  return (
    <div className="my-14 w-full">
      <h1 className="text-2xl font-semibold pb-3">
        Currently Cooking: {currentCook.length}
      </h1>
      <hr className="" />
      {/* table data  */}
      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr>
              <th className="text-[14px]">Sl</th>
              <th className="text-[14px]">Name</th>
              <th className="text-[14px]">Time</th>
              <th className="text-[14px]">Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentCook.map((ck, idx) => (
              <CurrentCookingTable
                key={ck.recipe_id}
                currentCooking={ck}
                count={idx + 1}
              ></CurrentCookingTable>
            ))}
            {/* total time and calorie display  */}
            {showRow && (
              <tr>
                <td></td>
                <td></td>
                <td>Total Time: {totalTime} Minutes</td>
                <td>Total Calorie: {totalCalorie} Calories</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentCook.propTypes = {
  currentCook: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalorie: PropTypes.number.isRequired,
  showRow: PropTypes.bool.isRequired,
}

export default CurrentCook;
