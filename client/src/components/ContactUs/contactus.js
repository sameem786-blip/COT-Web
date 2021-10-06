import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../../components/Common/SectionTitle";
import axios from 'axios';

import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import quote from "../../assets/images/quote.png";

const ContactUs = () => {
	  
    function sendEmail(e){
      e.preventDefault();
  
      emailjs.sendForm('service_d07io9s', 'template_x1zi1ky', e.target, 'user_gl6B1DcPzcRTirqZNpEzc')
        .then((result) => {
          toast.success('Your Mail Has Been Succssfully Sent.');
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();
    }
    return (
      <React.Fragment>
        <section
          className='section position-relative bg-gradient '
          id='contactus'
        >
          <div className='bg-cta-overlay' />
          <Container className="container">
          <Row className='justify-content-center'>
          <Col lg='7'>
            <div className='text-center title mb-4'>
              <h5 className='font-weight-bold text-uppercase text-light'>
                Request a quote
              </h5>
              <p className='text-muted'>Request a quote & we will get in touch as soon as possible.</p>
            </div>
          </Col>
        </Row>

          <div className='form-container'>
            <form onSubmit={sendEmail} autocomplete="off">
              <div className='row m-auto'>
                <Col xs='12' lg='6' >
                  <input
                    type='text'
                    className='input'
                    name='name'
                    placeholder='Name*'
                    required
                  ></input>
                  <input
                    type='text'
                    className='input'
                    name='organization'
                    placeholder='Organization'
                  ></input>
                  <input
                    type='tel'
                    className='input'
                    name='contact'
                    placeholder='Contact*'
                    required
                  ></input>
                  <input
                    type='email'
                    className='input'
                    name='email'
                    placeholder='Email'
                  ></input>
                  <textarea
                    className='input message'
                    name='message'
                    placeholder='Message*'
                    rows='3'
                    required
                  ></textarea>
                  
                    <input type='submit' className='form-submit' value='Submit' />
                </Col>
                <Col xs='12' lg='6' >
                  
                  <img
                  src={quote}
                  alt='quote'
                  className='quote img-fluid mx-auto d-block'
                />
                </Col>
              </div>
            </form>
          </div>
          <ToastContainer 
          position="top-center"
          draggable
          pauseOnHover
          />
         </Container>
        </section>
        

        {/* CTA END  */}
      </React.Fragment>
    );
  }


export default ContactUs;
