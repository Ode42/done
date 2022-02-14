import { useState } from "react";

const AddHabit = (props) => {
  const [name, setName] = useState("");

  const addHabitButtonPressed = () => {
    props.addHabit({
      name: name,
    });
    setName("");
  };

  return (
    <div className="addHabit">
      <h1>Add habit</h1>
      <form>
        <label for="name-field">Habit name: </label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={addHabitButtonPressed}>
          Add habit
        </button>
      </form>
    </div>
  );
};

export default AddHabit;
