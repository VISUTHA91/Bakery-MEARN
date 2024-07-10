import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Nav.Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
// import { itemContext } from '/ItemContext'
// import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Signup from './Signup';

export const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  // const {  } = useContext()
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <a className="navbarbrand" href="/">
              <span className="text-regal-blue">Bakes</span>
              <span className="text-regal-pink ">House</span>
            </a>
            {/* <a className="navbarbrand" href="/">BakeHouse</a> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="links" href="/Home">
                Home
              </Nav.Link>
              <Nav.Link href="/Birthday">BirthDay Cakes</Nav.Link>
              <Nav.Link href="/Wedding">Wedding Cakes</Nav.Link>
              <NavDropdown title="Themed Cakes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Kids">Kids</NavDropdown.Item>
                <NavDropdown.Item href="/Photo">PhotoCakes</NavDropdown.Item>
                <NavDropdown.Item href="/Car">CarCakes</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4">MikeyMouse</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
            <form className="navbarsearch flex">
              <input type="text" placeholder="Search here ..." />
              <button type="submit" className="navbar-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>

            <div className="navbarbtns">
              <a href="/cart" className="add-to-cart-btn flex">
                <div className="btn-txt fw-5">
                  Cart
                  <span className="cart-count-value">0</span>
                </div>
              </a>
            </div>
            <div className="Sign">
              <button
                type="button"
                onClick={() => setModalShow(true)}
                style={{ color: "white", fontWeight: "bold" }}
                className="btn btn"
              >
                LogIn
              </button>
              <MydModalWithGrid
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
function MydModalWithGrid(props) {
  const registerUser = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.userfound) {
          // console.log("sucsses")
          alert("Success");
        } else {
          // console.log("Failed")
          alert("Failed");
        }
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login Form</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <form
                method="POST"
                onSubmit={(e) => {
                  registerUser(e);
                }}
              >
                <div className="container">
                  <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
            
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "2px solid black",
                      width: "100%",
                    }}
                  >
                    Log In
                  </button>
                  <hr className="line" />
                  <div className="container1">
                    <p>Don't have Account?&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="success" href="../Signup">SignUp</Button>  </p>
                  </div>
                </div>
              </form>
            </Col>
            <Col border="light" xs={6} md={4} >
                <img src="/login.png" alt="" style={{height:"280px",width:"180px"}}/>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
