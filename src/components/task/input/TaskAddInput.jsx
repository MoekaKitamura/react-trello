import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const maxId =
      taskList.length === 0 ? -1 : Math.max(...taskList.map((task) => task.id));
    setTaskList([
      ...taskList,
      { id: maxId + 1, draggableId: `task-${maxId + 1}`, text: inputText },
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
