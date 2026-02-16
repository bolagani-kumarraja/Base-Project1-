import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from 'react-router-dom';

const Faculty = () => {
      const {id} = useParams();
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
          name: "",
          email: "",
          phone: "",
          password: ""
      });
      const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
      };
      useEffect(()=>{
        const fetchStudent = async ()=>{
          try{
            const response = await fetch(`http://localhost:8080/api/registerupdate/${id}`);
            const data = await response.json();
            setFormData(data);
          }catch(error){
            console.error('Error fetching user:',error.message);
          }
        }
        fetchStudent();
      },[id]);
      const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
          const response = await fetch(`http://localhost:8080/api/registerupdate/${id}`,
            {method: "PATCH",
            headers:{
              "Content-Type":"application/json",
            },
            body: JSON.stringify(formData),
            
        });
        const data = await response.json();
        console.log("User update",data);

        navigate("/adminDashboard");
        }catch(error){
          console.error("Error updating user:",error.message);
        }
      }
  return (
     <>
    <div className='center-form'>
        <h1>Edit Student User</h1>
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
                    type="password" 
                    name='password'
                    placeholder="Enter Pssword" 
                    value={formData.password} 
                    onChange={handleInputChange}/>
            </Form.Group>

            <Button variant="Primary" type="submit" className='btn btn-primary'>Edit Student</Button>
        </Form>
    </div>
    </>
  )
}

export default Faculty