const ShowHabits = (props) => {
  return (
    <div className="showHabits">
      <h1>Habits</h1>
      {props.habits.map((habit) => {
        return (
          <div>
            <h2>{habit.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ShowHabits;
