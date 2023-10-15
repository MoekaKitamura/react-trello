import React from "react";

export const Tasks = ({ inputText, taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div className="task" key={task.text}>{task.text}</div>
      ))}
    </div>
  );
};
