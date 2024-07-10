import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trending.css';
import Image from 'react-bootstrap/Image';




function Trending() {
  return (
    <>
    <div className='trendingcontainer'>
        <div className='trendingcontent'>
        <Image  src="./whisk3.png" height={80} width={80}/>
        <p>Trending Cakes</p>
        <Image src="./whisk4.png" height={80} width={80}/>
        </div>
        <div className='trendingprodocts' xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img className='trendingimage'variant="top" src="./proposal.jpg" />
            <Card.Body>
            <Card.Title>Proposal Cake</Card.Title>
            <Card.Text>Rs.500 </Card.Text>
            <Button  variant="primary">View More</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
      <Card.Img className='trendingimage'variant="top" src="./proposal.jpg" />
      <Card.Body>
        <Card.Title>Proposal Cake</Card.Title>
        <Card.Text>
          Rs.500
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='trendingimage'variant="top" src="./proposal.jpg" />
      <Card.Body>
        <Card.Title>Proposal Cake</Card.Title>
        <Card.Text>
          Rs.500
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='trendingimage'variant="top" src="./proposal.jpg" />
      <Card.Body>
        <Card.Title>Proposal Cake</Card.Title>
        <Card.Text>
          Rs.500
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    </div>
    
    
    </>
  )
}

export default Trending