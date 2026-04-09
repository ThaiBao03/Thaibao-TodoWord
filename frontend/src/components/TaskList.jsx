import React from "react";
import TaskEmptyState from "./TaskEmptyState";
import TaskCard from "./ui/TaskCard";

const TaskList = ({ filteredTasks, filter, handleTaskChanged }) => {
  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter}></TaskEmptyState>;
  }

  return (
    <div className="space-y-2">
      {filteredTasks.map((task, index) => (
        <TaskCard
          key={task._id ?? index}
          task={task}
          index={index}
          handleTaskChanged={handleTaskChanged}
        ></TaskCard>
      ))}
    </div>
  );
};

export default TaskList;
