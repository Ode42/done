import AddHabit from "./habits/AddHabit";
import ShowHabits from "./habits/ShowHabits";
import { useState } from "react";

const Wrapper = () => {
  return (
    <div>
      <AddHabit />
      <ShowHabits />
    </div>
  );
};

export default Wrapper;
