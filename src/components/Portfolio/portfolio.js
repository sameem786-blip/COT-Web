import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";
//Import Carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner1 from "../../assets/images/Project-1.png";
import banner2 from "../../assets/images/Project-2.png";

const ModalPortfolio = props => {
  const { buttonLabel, client, type, url, description, bannerTop, className } =
    props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const history = useHistory();
  return (
    <div>
      <Button
        color='simple'
        className='btn btn-outline-purple mt-4'
        onClick={toggle}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className='modal-dialog modal-lg'>
        <ModalHeader toggle={toggle}>Porfolio</ModalHeader>
        <ModalBody className={className}>
          <Row>
            <Col lg={12}>
              <img src={bannerTop} width='100%' />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <strong>{`Client: ${client}`}</strong>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              {" "}
              <strong>{`URL: ${url}`}</strong>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              {" "}
              <strong>{`Tech: ${type}`}</strong>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <h5>Description:</h5>
              {description}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          {/* <Button
            color='simple'
            className='btn btn-outline-purple '
            onClick={() => window.open(`/portfolio`, "_self")}
          >
            View Details
          </Button> */}
          <Button color='secondary' onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
class Portfolio extends Component {
  Projects = {
    details: [
      {
        id: 1,
        icon: "remixicon-smartphone-line",
        client: "COT project 1",
        type: "Mobile Application",
        url: "www.cot.com.pk",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit rhoncus bibendum. Aliquam lorem urna, feugiat a faucibus in, luctus a magna. Vestibulum ornare pulvinar ex eget venenatis. Suspendisse bibendum eu purus ac dictum. Morbi pellentesque velit ac mi euismod, sed egestas ipsum mollis. Aenean scelerisque nec arcu at mollis. Donec ante ipsum, sollicitudin at magna non, lacinia finibus nisl. Fusce feugiat interdum odio nec suscipit. Curabitur dapibus elit vel eros elementum, at tristique ipsum dapibus. Proin semper sed lacus eget interdum. Pellentesque feugiat ornare efficitur. Aenean ultricies ligula non tortor pharetra, at tristique eros ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        bannerTop: banner1,
      },
      {
        id: 2,
        icon: "remixicon-computer-line",
        client: "COT project 2",
        type: "Web Application",
        url: "www.cot.com.pk",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit rhoncus bibendum. Aliquam lorem urna, feugiat a faucibus in, luctus a magna. Vestibulum ornare pulvinar ex eget venenatis. Suspendisse bibendum eu purus ac dictum. Morbi pellentesque velit ac mi euismod, sed egestas ipsum mollis. Aenean scelerisque nec arcu at mollis. Donec ante ipsum, sollicitudin at magna non, lacinia finibus nisl. Fusce feugiat interdum odio nec suscipit. Curabitur dapibus elit vel eros elementum, at tristique ipsum dapibus. Proin semper sed lacus eget interdum. Pellentesque feugiat ornare efficitur. Aenean ultricies ligula non tortor pharetra, at tristique eros ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        bannerTop: banner2,
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
  };

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
                {this.Projects.details.map((Project, key) => (
                  <Col key={Project.id}>
                    <div
                      className='pricing-box text-center bg-white p-5 mt-4 position-relative h-full'
                      key={Project.id}
                    >
                      <div className='mt-4 mb-5'>
                        <i
                          className={` ${Project.icon} h3 text-purple pricing-icon p-4 rounded-circle`}
                        />
                      </div>
                      <h5 className='text-dark font-weight-medium mb-5'>
                        <sup className='h5'> </sup>
                        {Project.client}
                        <sub className='h5'></sub>
                      </h5>
                      <p className='text-muted'>{Project.type}</p>

                      <ModalPortfolio
                        buttonLabel='View Details'
                        client={Project.client}
                        url={Project.url}
                        type={Project.type}
                        description={Project.description}
                        bannerTop={Project.bannerTop}
                        className='modal-portfolio'
                      />
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
