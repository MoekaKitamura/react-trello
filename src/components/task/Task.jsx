import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
