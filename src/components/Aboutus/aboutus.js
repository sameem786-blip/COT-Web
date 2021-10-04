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
              description='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt.'
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
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt.
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
