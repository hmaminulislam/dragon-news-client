import React from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaLock, FaShieldAlt } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
      <div>
        <div>
          <ButtonGroup className="w-100" vertical>
            <Button className='mb-2' variant="outline-primary">
              <FaGoogle /> Sign in with Google
            </Button>
            <Button variant="outline-dark">
              <FaGithub /> Sign in with Github
            </Button>
          </ButtonGroup>
        </div>
        <div className="mt-4">
          <h5>Find us</h5>
          <ListGroup>
            <ListGroup.Item className="my-2">
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item className="my-2">
              <FaTwitter /> Twitter
            </ListGroup.Item>
            <ListGroup.Item className="my-2">
              <FaLinkedin /> Linkedin
            </ListGroup.Item>
            <ListGroup.Item className="my-2">
              <FaWhatsapp /> What's App
            </ListGroup.Item>
            <ListGroup.Item className="my-2">
              <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <BrandCarousel></BrandCarousel>
        </div>
      </div>
    );
};

export default RightSideNav;