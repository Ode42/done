import { useState } from "react";

const AddHabit = () => {
  return (
    <div className="addHabit">
      <h1>Add habit</h1>
      <form>
        <label for="name">Habit name: </label>
        <input name="name" />
        <button type="button">Send habit</button>
      </form>
    </div>
  );
};

export default AddHabit;
