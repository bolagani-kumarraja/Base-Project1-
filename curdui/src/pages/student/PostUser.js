import './PostUser.css'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dept: ""
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {   
            const response = await fetch('http://localhost:8080/api/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Success:', data);
            navigate('/faculty');
        }catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <>
    <div className='center-form'>
        <h1>Post New Student User</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                    type="text" 
                    name='name'
                    placeholder="Enter name" 
                    value={formData.name} 
                    onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                    type="email" 
                    name='email'
                    placeholder="Enter E-mail" 
                    value={formData.email} 
                    onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                    type="text" 
                    name='phone'
                    placeholder="Enter Phone Number" 
                    value={formData.phone} 
                    onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                    type="text" 
                    name='dept'
                    placeholder="Enter Department" 
                    value={formData.dept} 
                    onChange={handleInputChange}/>
            </Form.Group>

            <Button variant="Primary" type="submit" className='btn btn-primary'>Submit</Button>
        </Form>
    </div>
    </>
  )
}

export default PostUser