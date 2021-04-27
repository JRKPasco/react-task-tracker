import { useState } from 'react'
import Header from './components/Header'
import Tasklist from './components/Tasklist'
import TaskForm from './components/TaskForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container } from 'react-bootstrap'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000) + 1,
        ...task,
      },
    ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <Container className='mt-3'>
      <Card>
        <Header>
          <TaskForm addTask={addTask} />
        </Header>
        <Tasklist
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      </Card>
    </Container>
  )
}

export default App
