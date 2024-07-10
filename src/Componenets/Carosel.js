import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

 function Carosel(){
  return (
    <>
     <Carousel className='carousal'>
      <Carousel.Item interval={1500}>
      <img className="d-block w-100 h-150" src='./img1.jpg' alt='' />
        {/* <ExampleCarouselImage text="First slide" /> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img className="d-block w-100 h-150" src='./img2.jpg' alt='' />
        {/* <ExampleCarouselImage text="Second slide" /> */}
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
          </>
  )
}
export default Carosel;
