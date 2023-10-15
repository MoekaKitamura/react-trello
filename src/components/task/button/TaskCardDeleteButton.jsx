import React from "react";

export const TaskCardDeleteButton = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
}) => {
  const deleteTaskCard = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => deleteTaskCard(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
