import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/tart.png'

const Navigationbar = () => {

  return (
    <Navbar className='navbar-style' variant="dark">
    <Container fluid className='px-5'>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="45"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#memes">About</Nav.Link>
      <Nav.Link href="#memes">Experiences</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigationbar