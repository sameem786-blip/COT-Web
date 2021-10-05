import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../../components/Common/SectionTitle";

import emailjs from 'emailjs-com';

import quote from "../../assets/images/quote.png";

class ContactUs extends Component {
  render() {
    function sendEmail(e){
      e.preventDefault();
  
      emailjs.sendForm('service_rigts0h', 'template_bcq4lik', e.target, 'user_gl6B1DcPzcRTirqZNpEzc')
        .then((result) => {
            console.log(result.text);
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
          <SectionTitle
            title='Request A Quote'
            description='Request a quote & we will get in touch as soon as possible.'
            color="text-white"
          />

          <div className='form-container'>
            <form action="#" method="get" onSubmit={sendEmail} autocomplete="off">
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
                  <div>
                    <label>
                      <input type="file" ngf-select ng-model="new_files" ng-change="fs.uploadFiles(new_files)" multiple hidden/>
                      <span class="btn-upload">Upload files</span>
                    </label>
                    </div>
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
         </Container>
        </section>
        

        {/* CTA END  */}
      </React.Fragment>
    );
  }
}

export default ContactUs;
