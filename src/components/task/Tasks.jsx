import React from "react";
// see https://github.com/atlassian/react-beautiful-dnd#documentation-
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { reorder } from "../../reorder";

export const Tasks = ({ taskList, setTaskList }) => {
  const hundleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={hundleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <Task
                  key={task.id}
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
