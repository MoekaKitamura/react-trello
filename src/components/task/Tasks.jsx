import React from "react";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
};
