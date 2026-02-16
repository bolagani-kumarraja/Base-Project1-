import React  from 'react'
import './Login.css'
import { useState } from 'react'
import {Form , Button} from 'react-bootstrap'

const Login = () => {
    const [formData,getFormData]= useState({
        email:"",
        password:""
    });
        const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
  return (
    <>
    <div className="center-form">
    <h1>Registration Form</h1>
        <Form >
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

export default Login