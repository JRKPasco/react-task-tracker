import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className='list-group'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default Tasks
