import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) {
      alert('Please add a task')

      return
    }

    addTask({ text, date, reminder })

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row className='align-items-baseline'>
        <Col md={4}>
          <Form.Control
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            placeholder='Add Day & Time'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Check
            custom
            inline
            type='checkbox'
            id='reminder'
            label='Set Reminder'
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </Col>
        <Col className='d-flex justify-content-end' md={1}>
          <Button varient='primary' type='submit'>
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default TaskForm
