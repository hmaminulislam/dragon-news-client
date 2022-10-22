import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoUrl] = useState(user.photoURL)
    const submitHandle = (event) => {
        event.preventDefault()
        console.log(name, photoURL)
    }

    const changeName = event => {
        setName(event.target.value)
    }
    const changePhotoUrl = event => {
        setPhotoUrl(event.target.value)
    }
    return (
      <div>
        <h2>Profile</h2>
        <img className="w-25 h-25 rounded-circle" src={user.photoURL} alt="" />
        <Form onSubmit={submitHandle}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Photo url</Form.Label>
            <Form.Control
              onChange={changePhotoUrl}
              type="text"
              defaultValue={user.photoURL}
              name="photoURL"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              defaultValue={user.email}
              readOnly
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onChange={changeName}
              type="text"
              defaultValue={user.displayName}
              name="name"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};

export default Profile;