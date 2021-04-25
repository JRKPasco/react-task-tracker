import DeleteIcon from "./DeleteIcon";

const Task = ({ task, onDelete }) => {
  return (
    <li className='list-group-item' key={task.id}>
      <div className='row'>
        <div className='col-md-4'>{task.text}</div>
        <div className='col-md-4'>{task.date}</div>
        <div className='col-md-4 d-flex justify-content-end align-items-center'>
          <span style={{ cursor: 'pointer' }} onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </span>
        </div>
      </div>
    </li>
  );
};

export default Task;
