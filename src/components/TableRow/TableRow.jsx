import PropTypes from 'prop-types';

const TableRow = ({ cook, count, wannaCookHandler }) => {
  const { recipe_name, preparing_time, calories } = cook;
  return (
    <tr>
      <th>{count}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <td>
        <button
          onClick={() => wannaCookHandler(cook)}
          className="btn btn-sm btn-success text-white"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  cook: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  wannaCookHandler: PropTypes.func.isRequired,
}

export default TableRow;
