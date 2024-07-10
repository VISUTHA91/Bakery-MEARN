import React from 'react'
import './Baking.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Baking() {
    
  return (
    <>
    <div className='baking'>
       <div className='content'> 
        <Image src="./whisk3.png" height={80} width={80}/>
       <p>What's Baking in <span>Cake House</span></p>
       <Image src="./whisk4.png" height={80} width={80}/>
       </div>
       <div className='Bcontainer'>
      <Row>
        <Col lg={6} md={12}><a href='#'><Image src="./imge1.jpg" height={400} width={500}/></a></Col>
        <Col lg={6} md={12}><a href='#'><Image src="./imge2.jpg" height={400} width={500} /></a></Col>
      </Row>
    </div>
    <div className='Bcontainer'>
      <Row>
        <Col lg={6} md={12} ><a href='#'><Image src="./imge3.jpg" height={400}width={500} /></a></Col>
        <Col lg={6} md={12}><a href='#'><Image src="./imge4.jpg" height={400} width={500}/></a></Col>
      </Row>
    </div>
    </div>
    
    </>
  )
}
