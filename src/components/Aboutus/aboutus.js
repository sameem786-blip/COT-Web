import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
//Import Components
import SectionTitle from "../Common/SectionTitle";

//Import Images
import img1 from "../../assets/images/aboutus.png";

class Aboutus extends Component {
  render() {
    return (
      <React.Fragment>
        {/* FEATURES START  */}
        <section className='section bg-light position-relative' id='aboutus'>
          <Container>
            <SectionTitle
              title='About Us'
              description='COT makes sure you get the best service. A team of experienced developers that makes your business grow to match the fast paced world of tomorrow, today. We will create your software ready for tomorrow, so you expect to prosper today, tomorrow and forever.'
            />

            <Row className='align-items-center'>
              <Col lg='5'>
                <div className='features-img mt-4'>
                  <img
                    src={img1}
                    alt='Fetures'
                    className='img-fluid mx-auto d-block'
                  />
                </div>
              </Col>

              <div className='col-lg-5 offset-lg-1'>
                <div className='pr-lg-5 mt-4'>
                  <h4 className='line-height-1_6 text-dark mb-4'>
                    Our Vision is to Build Successful{" "}
                    <span className='font-weight-600'>Projects</span>
                  </h4>
                  <p className='text-muted mb-4 f-15'>
                  Our Vision is to take the world to the future. We will make you ready for tomorrow.

                  </p>

                  {/* <Link to='#' className='text-purple f-17'>
                    Know more
                    <span className='ml-3 pt-1 right-icon h4'>→</span>
                  </Link> */}
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Aboutus;
