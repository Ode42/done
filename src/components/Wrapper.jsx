import AddHabit from "./habits/AddHabit";
import ShowHabits from "./habits/ShowHabits";
import { useState } from "react";

const Wrapper = () => {
  const [data, setData] = useState({ habits: [] });

  const addHabitToData = (habit) => {
    let habits = data["habits"];
    habit.id = habits.length;
    habits.push(habit);
    setData({ habits: habits });
    console.log(data);
  };

  return (
    <div>
      <AddHabit addHabit={addHabitToData} />
      <ShowHabits habits={data.habits} />
    </div>
  );
};

export default Wrapper;
