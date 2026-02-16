import React  from 'react'
import './Registrtion.css'
import { useState } from 'react'
import {Form , Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [formData,setFormData]= useState({
        name:"",
        email:"",
        phone:"",
        password:""
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
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Success:', data);
            navigate('/adminDashboard');
        }catch (error) {
            console.error('Error:', error);
        }
    };
  return (
    <>
    <div className="center-form">
    <h1>Registration Form</h1>
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
                    placeholder="Enter email" 
                    value={formData.email} 
                    onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                    type="text" 
                    name='phone'
                    placeholder="Enter phone number" 
                    value={formData.phone} 
                    onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                    type="password" 
                    name='password'
                    placeholder="Enter password" 
                    value={formData.password} 
                    onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="Primary" type="submit" className='btn btn-primary'>Submit</Button>
        </Form>
    </div>
    </>
  )
}

export default Registration