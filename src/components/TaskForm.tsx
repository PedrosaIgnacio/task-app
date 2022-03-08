import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/ITask";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type HandleFormSubmit = FormEvent<HTMLFormElement>;

interface Props {
  addNewTask: (task: Task) => void;
}
const initialState = {
  title: "",
  description: "",
};
const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: HandleFormSubmit) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
  };
  return (
    <div className="card card-body text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          className="form-control mb-3 rounded"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 "
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus className="mx-2" />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
