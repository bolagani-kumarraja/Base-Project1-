import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row, Table,Button} from 'react-bootstrap';
import './StudentDashboard.css'


const StudentDashboard = () => {

  const [student, setStudent] = useState([]);
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
  return (
    <>
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

export default StudentDashboard