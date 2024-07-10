import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect} from 'react';
import './Birthday.css';


function Productcard() {
  const [product,setproduct] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/productlist')
    .then((response) => response.json() )
    .then((json) =>setproduct(json))
},[])

  return (
    <div className='birthcard'>
      {
        product.map((product) =>
        <Card style={{ width:'8rem' }}lg={3}sm={6}>
            <Card.Img className='birthimage'variant="top" src="./proposal.jpg" />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <div className='birthbutton'>
            <Button  variant="primary">Add to Cart</Button>
            <Button  variant="primary">Buy Now</Button>
            </div>
            </Card.Body>
            </Card>
        )
}
    </div>
  )
}

export default Productcard