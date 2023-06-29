import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalsSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="goal">
        <button
          className="close"
          onClick={() => dispatch(deleteGoal(goal._id))}
        >
          <FaWindowClose color="red" size="1.4rem" />
        </button>
        <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
        <h2>{goal.text}</h2>
      </div>
    </>
  );
}

export default GoalItem;
