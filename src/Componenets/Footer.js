/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import'./Footer.css';
import Image from 'react-bootstrap/Image';

function Footer() {
  return (
    <div>
    <div className='bg'>
      <div className='footercontainer'>
      <div className='row py-5 text-black'>


       {/* FirstSection */}
      <div className='col-md-6 col-lg-3 col-sm-12'>
      <Image src="./Bakery Logo.jpg" height={150} width={150}/>
        {/* <h4 className="text-black">Cake House</h4> */}
        <p className='text-white text-muted mt-3'>Another reason why Cake House is the best of all online stores is the complete convenience that it offers.
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
   </div>
  )
}
export default Footer;