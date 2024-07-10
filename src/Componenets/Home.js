import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import './Details.css'
import './Baking.css';
import './Wedo.css';
import'./Carousal.css';
import'./Home.css';
import'./Footer.css'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Trending.css';
// import { useContext } from 'react';
// import useState  from 'react';
// import { itemContext } from '/Componenets/NavBar'


export default function Home({ product }) {
    // const ProductItem = ({ product }) => {
        // const { itemsInCart, totalPrice } = useContext();
        const { addToCart, setaddToCart } = useState([]);


    const handleAddToCart = () => {
        setaddToCart(() =>{
            return 2;
        })
    };

  return (
    <>
    <Carousel className='carousal'>
      <Carousel.Item interval={1500}>
      <img className="d-block w-100 h-150" src='./img1.jpg' alt='' />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img className="d-block w-100 h-150" src='./img2.jpg' alt='' />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img className="d-block w-100 h-150" src='./img3.jpg' alt='' />
        {/* <ExampleCarouselImage text="Third slide" /> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img className="d-block w-100 h-150" src='./img4.jpg' alt='' />
        {/* <ExampleCarouselImage text="Third slide" /> */}
      </Carousel.Item>
    </Carousel>


    <Figure className='detailscontainer'>
        <Row className='detailscontain'>
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
    {/* What is Baking */}

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
{/* What we doo */}

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
  {/* Trending */}
   <div className='trendingcontainer'>
        <div className='trendingcontent'>
        <Image  src="./whisk3.png" height={80} width={80}/>
        <p>Trending Cakes</p>
        <Image src="./whisk4.png" height={80} width={80}/>
        </div>
        <div className='trendingprodocts' xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img className='trendingimage'variant="top" src="./proposal.jpg"/>
            <Card.Body>
            <Card.Title>Proposal Cake</Card.Title>
            <Card.Text>Rs.500 </Card.Text>
            <Button  variant="primary" onClick={
                    () => handleAddToCart()
                }>View More</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
      <Card.Img className='trendingimage'variant="top" src="./surprise.jpg" />
      <Card.Body>
        <Card.Title>Proposal Cake</Card.Title>
        <Card.Text>
          Rs.500
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='trendingimage'variant="top" src="./makeup.jpg" />
      <Card.Body>
        <Card.Title>Proposal Cake</Card.Title>
        <Card.Text>
          Rs.500
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='trendingimage'variant="top" src="./unicorn.jpg" />
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

    {/* Footer */}
     <div className='bg'>
      <div className='footercontainer'>
      <div className='row py-5 text-black'>


       {/* FirstSection */}
      <div className='col-md-6 col-lg-3 col-sm-12'>
      {/* <Image src="./Bakery Logo.jpg" height={150} width={150}/> */}
       <h4 className="text-black">Cake House</h4> 
        <p className='text-white text-muted mt-3'><span></span>Another reason why Cake House is the best of all online stores is the complete convenience that it offers.
           You can view your favourite with price options for different products in one place.</p>
      </div>  


       {/* SecondSection */}
     <div className='col-md-6 col-lg-3 col-sm-10'>
        <h4 className="text-black">Links</h4>
        <ul className = "list-unstyled">
          <li className = "my-3">
             <a href = "#" className = "text-white text-decoration-none text-muted">
               <i className = "fas fa-chevron-right me-1"></i> Home
             </a>
          </li>
         <li className = "my-3">
            <a href = "#" className = "text-white text-decoration-none text-muted">
              <i className = "fas fa-chevron-right me-1"></i> Collection
           </a>
          </li>
        <li className = "my-3">
             <a href = "#" className = "text-white text-decoration-none text-muted">
               <i className = "fas fa-chevron-right me-1"></i> Blogs
             </a>
        </li>
         <li className = "my-3">
              <a href = "#" className = "text-white text-decoration-none text-muted">
                 <i className = "fas fa-chevron-right me-1"></i> About Us
              </a>          
          </li>
        </ul>
     </div>
      

      {/* ThirdSection */}
       <div className='col-md-6 col-lg-3 col-sm-12'>
        <h4 className="text-black">Address</h4>
        <div className='text-black text-muted mt-3'>
        <p><i class="fas fa-map-marked-alt me-2"></i>Sangeeth Nagar 5thStreet,Koodal Nagar,Madurai-18</p>
        <p><i class="fas fa-envelope me-2"></i>dhiya.support@gmail.com</p>
        <p><i class="fas fa-phone-alt me-2"></i>+9786 6776 236</p>
     </div>
     </div>

     {/* FourthSection */}
       <div className='col-md-6 col-lg-3 col-sm-12'>
        <h4 className="text-black">Follow Us</h4>
        <div className='footer-icons text-muted mt-3'>
        <ul className = "list-unstyled d-flex">
          <li>
            <a href = "#" className = "text-decoration-none text-muted fs-1 me-5">
              <i className="fa-brands fa-facebook-f"></i>
             </a>
         </li>
          <li>
            <a href = "#" className = "text-decoration-none text-muted fs-1 me-5">
              <i className="fa-brands fa-twitter"></i>
            </a>
         </li>
         <li>
           <a href = "#" className = "text-decoration-none text-muted fs-1 me-5">
                <i className="fa-brands fa-instagram"></i>
           </a>
         </li>
             <li>
              <a href = "#" className = "text-decoration-none text-muted fs-1 me-5">
                 <i className="fa-brands fa-pinterest"></i>
              </a>
             </li>
         </ul>
        </div>  
       </div>     
      </div>
       </div>
       </div> 
     
    </>
  )
}