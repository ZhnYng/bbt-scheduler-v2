import React from "react";
import NavigationBar from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Brand from "../components/Brand";

export default function Signup() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });

  function handleChange(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <>
    <NavigationBar/>
    <div className="d-flex align-items-center justify-content-center" style={{height: '85vh'}}>
      <Form className="col-xl-4 col-lg-5 col-8 col-md-6 p-5" action="http://localhost:5000/signup/submit" method="POST"
      style={{backgroundColor: '#eb9347', borderRadius: '25px'}}>
        <h1 className="text-center text-decoration-underline mb-4">Sign Up</h1>
        <Brand/>
        <Form.Group className="my-3" controlId="formBasicUsername">
          <Form.Label className="fs-3">Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Username" 
          value={formData.username} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-3">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" 
          value={formData.password} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="fs-3">Confirm password</Form.Label>
          <Form.Control name="confirmPassword" type="password" placeholder="Password" 
          value={formData.password} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" id="button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}