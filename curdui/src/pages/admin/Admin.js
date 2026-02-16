import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import './Admin.css'

const Admin = () => {
  return (<>
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand to='/menu'><strong>CRUD UI</strong></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/student" className='nav-link'>Students</Nav.Link>
        <Nav.Link as={Link} to="/faculty" className='nav-link'>Faculty</Nav.Link>
        <Nav.Link as={Link} to="/register" className='nav-link'>Admin</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    
    
    </>
  )
}

export default Admin