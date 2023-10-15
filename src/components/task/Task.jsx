import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="taskBox">
      <p>{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
};
