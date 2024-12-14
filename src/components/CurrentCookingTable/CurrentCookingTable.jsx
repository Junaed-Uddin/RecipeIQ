import PropTypes from "prop-types";

const CurrentCookingTable = ({ currentCooking, count }) => {
  const { recipe_name, preparing_time, calories } = currentCooking;
  return (
    <tr>
      <th>{count}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
    </tr>
  );
};

CurrentCookingTable.propTypes = {
  currentCooking: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};
export default CurrentCookingTable;
