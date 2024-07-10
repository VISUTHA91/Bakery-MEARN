import React from 'react'
// import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/esm/Col';
import './Admin.css';
import { useState } from 'react';
// import axios from "axios";

// import { facebook } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa } from '@awesome.me/kit-KIT_CODE/icons'

function Admin() {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
    // function handleChange(e) {
    //   // const formData = new FormData();
    //     console.log(e.target.files);
    //     setImage(e.target.files);
        
    // }
  const productcreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("price", e.target.price.value);
    formData.append("description", e.target.description.value);
    formData.append("image", e.target.image.files[0]);
    setImage(e.target.image.files[0])
    console.log(e.target.image)
    // const product = {
    //   name: e.target.name.value,
    //   price: e.target.number.value,
    //   description: e.target.description.value,
    //   image: e.target.image.files[0]

    // }
     fetch("http://localhost:3000/productinsert",{
      method: "POST",
      body: formData,
      dataType: "jsonp"
      })
        .then((product) => product.json())
        .then((product) => {
          console.log(product)
        })
      }

  return (
    <>
      <section className="vh-100">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
          <h1 className="row d-flex justify-content-center align-items-center">Admin</h1>
            <Col>
              <div className="md-6 lg-8 xl-4 ">
                <form method='POST' onSubmit={(e) => { productcreate(e) }}> 
                  <div className="row">
                    <div className="md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text"name='name' id="name"className="form-control form-control-lg" placeholder='Product Name' onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="md-6 mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        {/* <label className="form-label" for="price"></label> */}
                        <input type="number" name='price'id="number" className="form-control form-control-lg" placeholder='Price'  onChange={(e) => setPrice(e.target.value)} />
                      </div>
                    </div>

                    <div className="md-6 mb-4 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="description"name='description' className="form-control form-control-lg" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
                      </div>
                    </div>
                    <div className="md-6 mb-4 pb-2">
                    <div data-mdb-input-init className="form-outline">
                  <input type="file" id="image" name='image' className="form-control form-control-lg" accept='image/*' onChange={(e) => setImage(e.target.files[0])} /><img src={image} alt='' />
                  </div>
                  </div>
                  </div>
                  <div className="adminbtn">
                    <input className="btn btn-lg" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </Col>
          </div>
        </div>
      </section>
    </>
  )
}
export default Admin
