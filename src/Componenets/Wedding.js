import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

function Wedding() {
  return (
    <>

<div className='birthcard'>
      {
        <Card style={{ width:'8rem' }}lg={3}sm={6}>
            <Card.Img className='birthimage'variant="top" src="./proposal.jpg" />
            <Card.Body>
            <Card.Title>Cake</Card.Title>
            <Card.Text>500</Card.Text>
            <div className='birthbutton'>
            <Button  variant="primary">View</Button>
            </div>
            </Card.Body>
            </Card>

            }
    </div>
    </>
  )
}

export default Wedding