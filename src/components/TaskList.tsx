import React from "react";
import { Task } from "../interfaces/ITask";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ deleteTask, tasks }: Props) => {
  return (
    <>
      {tasks.map((t) => (
        <div className="col-md-4 pb-2" key={t.id}>
          <TaskCard task={t} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};

export default TaskList;
