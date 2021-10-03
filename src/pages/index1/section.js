import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/Common/ModalSection";

//Import Image
import heroBgImg from "../../assets/images/hero-bg-1.jpg";

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
        <section
          className="hero-1-bg d-flex vh-100 mx-auto flex-column align-items-center justify-content-center position-relative"
          id="home"
          style={{ background: `url(${heroBgImg}) center center` }}
        >
          <div className="bg-overlay" />
          <div className="bg-hero-overlay" />

          <Container>
            <Row className="align-items-center">
              <Col lg="5">
                <div className="hero-content">
                  <h1 className="text-dark hero-1-title line-height-1_4 mb-4">
                    Get Your Professional Project Done With{" "}
                    <span className="text-purple">COT</span>
                  </h1>
                  <p className="text-muted f-15">
                    On the other hand as we denounce with righteous indignation
                    and dislike men who are beguiled.
                  </p>
                  
                </div>
              </Col>
              <div className="col-lg-5 offset-lg-2 text-center">
                <div className="text-center mt-5 mt-lg-0">
                  
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* HERO END  */}
      </React.Fragment>
    );
  }
}

export default Section;
