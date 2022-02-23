import AddHabit from "./habits/AddHabit";
import ShowHabits from "./habits/ShowHabits";
import { useState } from "react";
import "./../assets/habits.css";

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
    <div className="wrapper">
      <ShowHabits habits={data.habits} />
      <AddHabit addHabit={addHabitToData} />
    </div>
  );
};

export default Wrapper;
