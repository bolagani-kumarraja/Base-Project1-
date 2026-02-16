import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import './Header.css'

const Header = () => {
  return (<>
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand to='/'><strong>College Name</strong></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/studentDashboard" className='nav-link'>Students</Nav.Link>
        <Nav.Link as={Link} to="/faculty" className='nav-link'>Faculty</Nav.Link>
        <Nav.Link as={Link} to="/adminDashboard" className='nav-link'>Admin</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    </>
  )
}

export default Header