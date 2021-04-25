import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create CV",
      date: "26 Apr",
      reminder: true,
    },
    {
      id: 2,
      text: "Create Portfolio",
      date: "26 Apr",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <Header />
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;
