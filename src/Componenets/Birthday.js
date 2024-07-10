import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// import Image from 'react-bootstrap/Image';
import "./Birthday.css";
// import Productcard from './Productcard';
import { useState, useEffect } from "react";

export default function Birthday() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productlist")
      .then((response) => response.json())
      .then((json) => setproduct(json));
  }, []);
  console.log(`./${product.image}`);
  return (
    <>
      <Container className="birthmaincontainer">
        <Row>
          <Col
            d-flex
            justify-content-between
            align-iteams-center
            lg={10}
            sm={12}
            md={8}
          >
            <div className="row d-flex justify-content-between align-iteams-center mt-5">
              <div className="birthproducts">
                {product.map((product) => (
                  <div className="birthcard">
                  <Card border="light" style={{ width: "15rem",height:"23rem" }} lg={3} sm={6}>
                    <Card.Img
                      className="birthimage"
                      variant="top" 
                      // src="/watermelon.jpg"
                      src={`./${product.image}`}
                    />
                    <Card.Body  className="text-center" >
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                      <div className="birthbutton">
                        <Button variant="primary" >View</Button>
                      </div>
                    </Card.Body>
                  </Card>
                  </div>
                ))}
              </div>
            </div>
          </Col>



          <Col sm={12} md={4} lg={2}>
            <div className="birthfilter">
              <h2>Filter By</h2>
              <div className="price">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="500-1000"
                  name=""
                  id=""
                />
                500-1000<br></br>
                <input
                  className="checkbox"
                  type="checkbox"
                  value="1100-1500"
                  name=""
                  id=""
                />
                1100-1500<br></br>
                <input
                  className="checkbox"
                  type="checkbox"
                  value="1600-2000"
                  name=""
                  id=""
                />
                1600-2000<br></br>
              </div>
              <div className="flavour">
                <input type="checkbox" value="straberry" name="" id="" />
                &nbsp;&nbsp;Butterscroch<br></br>
                <input type="checkbox" value="straberry" name="" id="" />
                &nbsp;&nbsp;Vennila<br></br>
                <input type="checkbox" value="straberry" name="" id="" />
                &nbsp;&nbsp;straberry<br></br>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
