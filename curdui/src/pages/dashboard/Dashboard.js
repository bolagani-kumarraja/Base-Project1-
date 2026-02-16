import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Container, Row, Table} from 'react-bootstrap';
import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStudents = async () => {
      try{
        const response = await fetch('http://localhost:8080/api/students');
        const data = await response.json();
        setStudent(data);
      }catch (error) {
        console.error('Error:', error);
      }
  }
  fetchStudents();
 },[]);

  const deleteStudent = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/student/${id}`, {
        method: 'DELETE',
      }); 
      if (response.ok) { 
          setStudent((prevStudents) => prevStudents.filter((stud) => stud.id !== id));
      }
     console.log(`Deleted ${id} sucessfully`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
   const userUpdate = (id)=>{
    navigate(`/student/${id}`);
   }
  return (
    <>
     <div className='fac' id='fac'>
      <h2>Faculty Name</h2>
      <input placeholder="Search" ></input>
      <Nav.Link as={Link} to="/student" className='nav-link'><Button>New Student</Button></Nav.Link>
     </div>
    <Container className="mt-5">
      <Row>
        <Col>
        <h1 className='text-center'>Students</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {student.map((stud) => (
              <tr key={stud.id}>
                <td>{stud.id}</td>
                <td>{stud.name}</td>
                <td>{stud.email}</td>
                <td>{stud.phone}</td>
                <td>{stud.dept}</td>
                <td>{"  "}<Button variant='outline-secondary' onClick={()=>userUpdate(stud.id)}>Update</Button>{"  "}
                <Button variant='outline-danger' onClick={()=>deleteStudent(stud.id)}>Delete</Button></td>
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

export default Dashboard