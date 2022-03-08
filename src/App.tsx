import React from "react";
import "./App.css";
import { useState } from "react";
import { Task } from "./interfaces/ITask";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { FaReact } from "react-icons/fa";

interface Props {
  title: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  const [counter, setCounter] = useState<number>(2);

  const addNewTask = (task: Task) => {
    setCounter(counter + 1);
    setTasks([...tasks, { ...task, id: counter }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <FaReact className="mx-2" />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
