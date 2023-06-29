import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../features/goals/goalsSlice";
import { toast } from "react-toastify";

function AddGoals() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      dispatch(addGoal({ text }));
    } else {
      toast.error("Goals Can't Be Empty");
      return;
    }
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={onChange}
            placeholder="Add Goal"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  );
}

export default AddGoals;
