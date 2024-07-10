import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

import './Wedo.css';


export default function Wedo() {
  return (
    <>
    <Figure className='wedocontainer'>
    <div className='wedocontent'> 
        <Image src="./whisk3.png" height={80} width={80}/>
       <p>What We Do!</p>
       <Image src="./whisk4.png" height={80} width={80}/>
       </div>
       <div className='wedo'>
        <Row>
        <Col  sm={6} md={4} xl={2} >
        <div className='text'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./what1.png"
      />
      
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='text'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./what2.png"
      />
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='text'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./what3.png"
      />
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='text'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./what4.png"
      />
      
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='text'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./what5.png"
      />
      </div>
      </Col>
      </Row>
      </div>
    </Figure>

    
    </>
  )
}
