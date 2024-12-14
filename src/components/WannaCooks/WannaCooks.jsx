import TableRow from "../TableRow/TableRow";
import PropTypes from "prop-types";

const WannaCooks = ({ wannaCooking, wannaCookHandler }) => {
  return (
    <div className="mt-5 w-full">
      <h1 className="text-2xl font-semibold pb-3">
        Wanna Cook: {wannaCooking.length}
      </h1>
      <hr className="" />
      {/* table data  */}
      <div className="overflow-x-auto mt-6">
        <table className="table md:table-sm xl:table-md">
          <thead>
            <tr>
              <th className="text-[14px]">Sl</th>
              <th className="text-[14px]">Name</th>
              <th className="text-[14px]">Time</th>
              <th className="text-[14px]">Calories</th>
              <th className="text-[14px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {wannaCooking.map((ck, idx) => (
              <TableRow
                key={ck.recipe_id}
                count={idx + 1}
                cook={ck}
                wannaCookHandler={wannaCookHandler}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WannaCooks.propTypes = {
  wannaCooking: PropTypes.array.isRequired,
  wannaCookHandler: PropTypes.func.isRequired,
};

export default WannaCooks;
