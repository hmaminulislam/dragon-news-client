import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('')
  const {signinEamil, setLoading} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const submitHandle = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signinEamil(email, password)
    .then(result => {
      setError('')
      const user = result.user;
      console.log(user)
      form.reset();
      if (user.emailVerified) {
        navigate(from, { replace: true });
      }
      else {
        toast.error('Your email not verify. Please verify your eamil.')
      }
    })
    .catch(e => {
      console.log(e);
      setError(e.message)
    })
    .finally(()=> {
      setLoading(false)
    })
  }
    return (
      <Form onSubmit={submitHandle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required/>
        </Form.Group>
        <div className='mb-3 text-danger'>
          {error}
        </div>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    );
};

export default Login;