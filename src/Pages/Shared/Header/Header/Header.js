import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';
import Image from "react-bootstrap/Image";
import { FaUser } from 'react-icons/fa';
import Button from "react-bootstrap/Button";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const logOutBtnHandle = () => {
    logOut()
    .then(()=> {})
    .catch(error=> console.error(error))
  }
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="pb-3 mb-4 border-bottom"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">Dragon News</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className='align-items-center'>
                {user?.uid ? (
                  <>
                    <Button onClick={logOutBtnHandle} variant="danger">
                      Log out
                    </Button>
                    <Nav.Link>{user?.displayName}</Nav.Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="me-3 decoration-none text-decoration-none"
                      to="/login"
                    >
                      Log in
                    </Link>
                    <Link
                      className="decoration-none text-decoration-none"
                      to="/register"
                    >
                      Register
                    </Link>
                  </>
                )}
                <Link to='/profile' className='ms-3'>
                  {user?.photoURL ? (
                    <Image
                      src={user.photoURL}
                      style={{ height: "40px" }}
                      roundedCircle
                    ></Image>
                  ) : (
                    <FaUser></FaUser>
                  )}
                </Link>
              </Nav>
              <div className="block d-md-none">
                <LeftSideNav></LeftSideNav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;