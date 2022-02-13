import AddHabit from "./habits/AddHabit";
import ShowHabits from "./habits/ShowHabits";
import { useState } from "react";

const Wrapper = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    const newHabits = habits;
    newHabits.push(habit);
    setHabits(newHabits);
  };

  return (
    <div>
      <AddHabit habits={habits} />
      <ShowHabits callback={addHabit} />
    </div>
  );
};

export default Wrapper;
