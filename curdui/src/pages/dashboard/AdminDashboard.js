import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row, Table, Button, Nav} from 'react-bootstrap';

import {Link, useNavigate} from 'react-router-dom'


const AdminDashboard = () => {

  const [faculty, setFaculty] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchFaculty = async () => {
      try{
        const response = await fetch('http://localhost:8080/api/registers');
        const data = await response.json();
        setFaculty(data);
      }catch (error) {
        console.error('Error:', error);
      }
  }
  fetchFaculty();
 },[]);

  const deleteFaculty = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/register/${id}`, {
        method: 'DELETE',
      }); 
      if (response.ok) { 
          setFaculty((prevFacultys) => prevFacultys.filter((fac) => fac.id !== id));
      }
     console.log(`Deleted ${id} sucessfully`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const facultyUpdate = (id)=>{
    navigate(`/update/${id}`);
   }

  
  return (
    <>
    <div className='fac' id='fac'>
      <h2>Admin Name</h2>
      <input placeholder="Search" ></input>
      <Nav.Link as={Link} to="/admin" className='nav-link'><Button>New Faculty</Button></Nav.Link>
     </div>
    <Container className="mt-5">
      <Row>
        <Col>
        <h1 className='text-center'>Faculty</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((fac) => (
                <tr key={fac.id}>
                    <td>{fac.id}</td>
                    <td>{fac.name}</td>
                    <td>{fac.email}</td>
                    <td>{fac.phone}</td>
                    <td>{fac.password}</td>
                    <td>{"  "}<Button variant='outline-secondary' onClick={()=>facultyUpdate(fac.id)}>Update</Button>{"  "}
                    <Button variant='outline-danger' onClick={()=>deleteFaculty(fac.id)}>Delete</Button></td>
              
                </tr>
            ))}
          </tbody>

        </Table>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AdminDashboard