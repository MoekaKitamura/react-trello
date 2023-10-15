import React from "react";
// see: https://www.npmjs.com/package/uuid
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;

    const taskId = uuid();
    setTaskList([
      ...taskList,
      { id: taskId, draggableId: `task-${taskId}`, text: inputText },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
