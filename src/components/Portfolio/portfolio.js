import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Portfolio extends Component {
  Project1 = {
    details: [
      {
        id: 1,
        price: "Recruiting App",
        duration: "month",
        currency: "$",
        features: {
          Responsibilities: "Mobile Development | UI/UX",
          type: "Mobile App",
          support: "No",
        },
      },
    ],
  };

  Project2 = {
    details: [
      {
        id: 2,
        price: "Stream+",
        duration: "month",
        currency: "$",
        features: {
          Responsibilities: "Mobile Development | UI/UX",
          type: "Mobile App",
          support: "No",
        },
      },
    ],
  };

  Project3 = {
    details: [
      {
        id: 3,
        price: "Freelance",
        duration: "month",
        currency: "$",
        features: {
          Responsibilities: "Mobile Development | UI/UX",
          type: "Mobile App",
          support: "No",
        },
      },
    ],
  };

  Project4 = {
    details: [
      {
        id: 4,
        price: "Aura",
        duration: "month",
        currency: "$",
        features: {
          Responsibilities: "Web Development | UI/UX",
          type: "Website",
          support: "No",
        },
      },
    ],
  };

  Project5 = {
    details: [
      {
        id: 5,
        price: "Surtido Rico",
        duration: "month",
        currency: "$",
        features: {
          Responsibilities: "Web Development | UI/UX",
          type: "Website",
          support: "No",
        },
      },
    ],
  };

  Project6 = {
    details: [
      {
        id: 6,
        price: "Courses Management",
        duration: "month",
        currency: "$",
        features: {
          Responsibilities: "Web Development | UI/UX",
          type: "Website",
          support: "No",
        },
      },
    ],
  };

  state = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  }

  

  render() {
    return (
      <React.Fragment>
        {/* PRICING START */}
        <section className='section bg-light' id='portfolio'>
          <Container>
            <SectionTitle
              title='Portfolio'
              description='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit sed consequuntur as sequi nesciunt.'
            />

            
            <Row>
            <OwlCarousel
             
                items={3}
                loop={true}
                margin={0}
                nav={false}
                dots={true}
                autoplay={true}
                responsive={this.state.responsive}
                autoplayHoverPause={true}
                autoplayTimeout={2500}
              >
              {this.Project1.details.map((Project1, key) => (
                <Col key={Project1.currency}>
                  <div
                    className='pricing-box text-center bg-white p-5 mt-4 position-relative h-full'
                    key={Project1.id}
                  >
                    <div className='mt-4 mb-5'>
                      <i className='remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle' />
                    </div>
                    <h2 className='text-dark font-weight-medium mb-5'>
                      <sup className='h5'> </sup>
                      {Project1.price}
                      <sub className='h5'></sub>
                    </h2>
                    <p className='text-muted'>
                      {Project1.features.type}
                    </p>
                    <p className='text-muted'>
                      {Project1.features.Responsibilities}
                    </p>
                    <button
                      type='button'
                      className='btn btn-outline-purple mt-4'
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
              ))}

              {this.Project2.details.map((Project2, key) => (
                <Col key={Project2.currency}>
                  <div
                    className='pricing-box text-center bg-white p-5 mt-4 position-relative'
                    key={Project2.id}
                  >
                    <div className='mt-4 mb-5'>
                      <i className='remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle' />
                    </div>
                    <h2 className='text-dark font-weight-medium mb-5'>
                      <sup className='h5'> </sup>
                      {Project2.price}
                      <sub className='h5'></sub>
                    </h2>
                    <p className='text-muted'>
                      {Project2.features.type}
                    </p>
                    <p className='text-muted'>
                      {Project2.features.Responsibilities}
                    </p>
                    <button
                      type='button'
                      className='btn btn-outline-purple mt-4'
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
              ))}
              {this.Project3.details.map((Project3, key) => (
                <Col  key={Project3.currency}>
                  <div
                    className='pricing-box text-center bg-white p-5 mt-4 position-relative'
                    key={Project3.id}
                  >
                    <div className='mt-4 mb-5'>
                      <i className='remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle' />
                    </div>
                    <h2 className='text-dark font-weight-medium mb-5'>
                      <sup className='h5'> </sup>
                      {Project3.price}
                      <sub className='h5'></sub>
                    </h2>
                    <p className='text-muted'>
                      {Project3.features.type}
                    </p>
                    <p className='text-muted'>
                      {Project3.features.Responsibilities}
                    </p>
                    <button
                      type='button'
                      className='btn btn-outline-purple mt-4'
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
              ))}
              {this.Project4.details.map((Project4, key) => (
                <Col  key={Project4.currency}>
                  <div
                    className='pricing-box text-center bg-white p-5 mt-4 position-relative'
                    key={Project4.id}
                  >
                    <div className='mt-4 mb-5'>
                      <i className='remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle' />
                    </div>
                    <h2 className='text-dark font-weight-medium mb-5'>
                      <sup className='h5'> </sup>
                      {Project4.price}
                      <sub className='h5'></sub>
                    </h2>
                    <p className='text-muted'>
                      {Project4.features.type}
                    </p>
                    <p className='text-muted'>
                      {Project4.features.Responsibilities}
                    </p>
                    <button
                      type='button'
                      className='btn btn-outline-purple mt-4'
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
              ))}

              {this.Project5.details.map((Project5, key) => (
                <Col  key={Project5.currency}>
                  <div
                    className='pricing-box text-center bg-white p-5 mt-4 position-relative'
                    key={Project5.id}
                  >
                    <div className='mt-4 mb-5'>
                      <i className='remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle' />
                    </div>
                    <h2 className='text-dark font-weight-medium mb-5'>
                      <sup className='h5'> </sup>
                      {Project5.price}
                      <sub className='h5'></sub>
                    </h2>
                    <p className='text-muted'>
                      {Project5.features.type}
                    </p>
                    <p className='text-muted'>
                      {Project5.features.Responsibilities}
                    </p>
                    <button
                      type='button'
                      className='btn btn-outline-purple mt-4'
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
              ))}

              {this.Project6.details.map((Project6, key) => (
                <Col  key={Project6.currency}>
                  <div
                    className='pricing-box text-center bg-white p-5 mt-4 position-relative'
                    key={Project6.id}
                  >
                    <div className='mt-4 mb-5'>
                      <i className='remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle' />
                    </div>
                    <h2 className='text-dark font-weight-medium mb-5'>
                      <sup className='h5'> </sup>
                      {Project6.price}
                      <sub className='h5'></sub>
                    </h2>
                    <p className='text-muted'>
                      {Project6.features.type}
                    </p>
                    <p className='text-muted'>
                      {Project6.features.Responsibilities}
                    </p>
                    <button
                      type='button'
                      className='btn btn-outline-purple mt-4'
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
              ))}
             </OwlCarousel>
          </Row>
          </Container>
        </section>
        

        {/* PRICING END  */}
      </React.Fragment>
    );
  }
}

export default Portfolio;
