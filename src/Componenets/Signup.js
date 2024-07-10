import React from "react";
// import Image from 'react-bootstrap/Image';
// import Col from "react-bootstrap/esm/Col";
import "./Signup.css";
import { Button } from "react-bootstrap";
// import { facebook } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa } from '@awesome.me/kit-KIT_CODE/icons'
// import Container from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Signup() {
  const registerUser = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.contact.value);
    console.log(e.target.password.value);
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      password: e.target.password.value,
    };
    if (e.target.password.value === e.target.conformpassword.value) {
      fetch("http://localhost:3000/userinsert", {
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
        });
    } else {
      alert("password does'not matching");
    }
    alert("sucessfully created")
  };

  return (
    <>
      <section className="vh-100 bg-image">
        <div className="signupcontainer">
          <div className="row d-flex justify-content-center align-items-center h-100">
          <Container>
            <Row>
               <Col>
              <div className="md-6 lg-8 xl-4 ">
                <form
                  method="POST"
                  onSubmit={(e) => {
                    registerUser(e);
                  }}
                >
                  <div className="form-icon">
                    <span>
                      <i className="icon icon-user"></i>
                    </span>
                  </div>
                  <div className="row">
                    <div className="md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          id="username"
                          className="form-control form-control-lg"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="md-6 mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        {/* <label className="form-label" for="emailAddress">Email</label> */}

                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="md-6 mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        {/* <label className="form-label" for="phoneNumber">Phone Number</label> */}
                        <input
                          type="text"
                          id="contact"
                          className="form-control form-control-lg"
                          placeholder="contact"
                        />
                      </div>
                    </div>
                    <div className="md-6 mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        {/* <label className="form-label" for="phoneNumber">Phone Number</label> */}
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="md-6 mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="password"
                          id="conformpassword"
                          className="form-control form-control-lg"
                          placeholder="conformpassword"
                        />
                      </div>
                    </div>
                    <div className="form-check d-flex mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className=" d-grid gap-2">
                    <Button variant="success" type="submit">
                      Register
                    </Button>
                  </div>
                </form>
                </div>
             </Col>
        <Col> <img src="/online.png" alt="" style={{height:"550px",width:"500px"}}/></Col>
      </Row>
      </Container>
               </div>
          </div>
      </section>
    </>
  );
}
