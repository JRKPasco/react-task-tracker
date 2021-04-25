import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  ); 
};

export default Tasks;
