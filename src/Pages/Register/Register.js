import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accept, setAccept] = useState(false)
  const { createUser, updateUserProfile, verifyEamil } =
    useContext(AuthContext);
  const navigate = useNavigate()

  const submitHandle = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result => {
      setError('')
      const user = result.user;
      console.log(user);
      navigate('/')
      form.reset();
      updateUser(name, photoURL)
      emailVerify()
    })
    .catch(e => {
      console.error(e);
      setError(e.message)
    })
  }
  const updateUser = (name, photoURL) => {
    const profile = {displayName: name, photoURL: photoURL}
    updateUserProfile(profile)
  }
  const checkBtnHandle = (event) => {
    const check = event.target.checked;
    setAccept(check)
  }
  const emailVerify = () => {
    verifyEamil()
    .then(()=> {
      toast.success('Pleas Verify Your Email')
    })
    .catch(e=> console.error(e))
  }
    return (
      <Form onSubmit={submitHandle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image url</Form.Label>
          <Form.Control type="text" placeholder="Image url" name="photoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={checkBtnHandle}
          type="checkbox" 
          label= {<><Link to='/terms'>Terms and Condition</Link></>} />
        </Form.Group>
        <div className="mb-3 text-danger">{error}</div>
        <Button variant="primary" type="submit" disabled={!accept}>
          Register
        </Button>
      </Form>
    );
};

export default Register;