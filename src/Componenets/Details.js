import React from 'react'
import Figure from 'react-bootstrap/Figure';
import './Details.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Details() {
  return (
    <>
    <Figure className='detailscontainer'>
        <Row>
        <Col  sm={6} md={4} xl={2} >
        <div className='detailstext'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./b1.png"
      />
      <p>Freshly Baked</p>
      
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='detailstext'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./b2.png"
      />
      <p>Deliciousness</p>
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='detailstext'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./b3.png"
      />
      <p>Customised</p>
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='detailstext'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./b4.png"
      />
      <p>Creative Designs</p>
      
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='detailstext'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./b5.png"
      />
      <p>Unique Flavours</p>
           
      </div>
      </Col>
      <Col  sm={6} md={4} xl={2} >
      <div className='detailstext'>
      <Figure.Image
        width={120}
        height={120}
        alt="171x180"
        src="./b6.png"
      />
      <p>
      Made with Love
      </p>
      </div>
      </Col>
      </Row>
    </Figure>
    
    </>
  )
}
