import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
//Import Image
import heroBgImg from "../../assets/images/home.png";
import bottomShap from "../../assets/images/home-4-bottom-shape.png";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        {/* HERO START */}
        <section className='hero-4-bg position-relative bg-gradient' id='home'>
          <Container className='container'>
            <Row className='align-items-center hero-4-content'>
              <Col lg={5}>
                <h1 className='text-white hero-4-title font-weight-medium mb-4 line-height-1_4'>
                  Get Your Professional Project Done With COT
                </h1>
                <p className='text-white-50 mb-5'>
                  A commitment that guarantees a beneficial partnership that is
                  proven through successful resultant products. We assure you
                  that you’ll have a great experience working with us.
                </p>
              </Col>
              <div className='col-lg-6 offset-lg-1'>
                <div className='home mt-5 mt-lg-0'>
                  <img
                    src={heroBgImg}
                    alt='hero-img'
                    className='img-fluid mx-auto d-block'
                  />
                </div>
              </div>
            </Row>
          </Container>
          <div className='container-fluid'>
            <Row className='row'>
              <div className='home-bottom-shape'>
                <img
                  src={bottomShap}
                  alt='Shap'
                  className='img-fluid mx-auto d-block'
                />
              </div>
            </Row>
          </div>
        </section>

        {/* HERO END  */}
      </React.Fragment>
    );
  }
}

export default Section;
