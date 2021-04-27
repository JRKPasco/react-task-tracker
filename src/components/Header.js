import { Card } from 'react-bootstrap'

const Header = ({ children }) => {
  return (
    <Card.Header>
      <h4 className='align-self-center'>Task Tracker</h4>
      {children}
    </Card.Header>
  )
}

export default Header
