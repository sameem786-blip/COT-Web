import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../../components/Common/SectionTitle";

class ContactUs extends Component {
  render() {
    const submitForm = () => {
      console.log("Form Submitted");
    };
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
            description='Please feel free to contact us through the form below.'
            color="text-white"
          />

          <div className='form-container'>
            <form onSubmit={this.submitForm}>
              <div className='row m-auto'>
                <Col xs='12' lg='6' >
                  <input
                    type='text'
                    className='input'
                    placeholder='Name*'
                    required
                  ></input>
                  <input
                    type='text'
                    className='input'
                    placeholder='Organization'
                  ></input>
                  <input
                    type='tel'
                    className='input'
                    placeholder='Contact*'
                    required
                  ></input>
                  <input
                    type='email'
                    className='input'
                    placeholder='Email'
                  ></input>
                </Col>
                <Col xs='12' lg='6' >
                  <textarea
                    className='input message'
                    id='exampleFormControlTextarea1'
                    placeholder='Message*'
                    rows='3'
                    required
                  ></textarea>
                </Col>
              </div>
              <input type='submit' className='form-submit' value='Submit' />
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
