import React from "react";
import { Task } from "../interfaces/ITask";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskCard: React.FC<Props> = ({ deleteTask, task }: Props) => {
  return (
    <div className="card card-body text-dark rounded text-center">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          task.id && deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
