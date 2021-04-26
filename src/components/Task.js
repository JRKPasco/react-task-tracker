import DeleteIcon from './DeleteIcon'
import ReminderIcon from './ReminderIcon'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li className='list-group-item' onDoubleClick={() => onToggle(task.id)}>
      <div className='row'>
        <div className='col-md-4'>{task.text}</div>
        <div className='col-md-4'>{task.date}</div>
        <div className='col-md-1 offset-3 d-flex justify-content-between align-items-center'>
          <span>{task.reminder ? <ReminderIcon /> : ''}</span>
          <span style={{ cursor: 'pointer' }} onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </span>
        </div>
      </div>
    </li>
  )
}

export default Task
