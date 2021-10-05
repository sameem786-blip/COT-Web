import React, { Component, useState } from "react";

//Import Components
import SectionTitle from "../Common/SectionTitle";

//Slider
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Careers Modal
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
const careerModal = props => {
  const {
    buttonLabel,
    title,
    experience,
    location,
    shift,
    requirments,
    message,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color='simple'
        className='btn btn-outline-purple mt-4'
        onClick={toggle}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className={className}>
          <Row>
            <Col lg={12}>
              <strong>{`Location: ${location}`}</strong>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              {" "}
              <strong>{`Shift: ${shift}`}</strong>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <strong>{`Experience Required: ${experience}`}</strong>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <h5>Requirments</h5>
              {requirments}
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <strong>{message}</strong>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

class Careers extends Component {
  state = {
    careers: [
      {
        id: 1,
        title: "Graphic Designer",
        experience: "2-3 years",
        requirments:
          "Hands-on experience of Creating Logo, Stationary and Graphic Designing.In-depth knowledge of Adobe Photoshop and Illustrator.Able to Create Artwork, Icons, and Logos using Adobe Illustrator.Able to work in a fast-paced environment.Fast enough to meet the deadlines.A creative thinker as well as a strong team player.Strong organizational skills and interpersonal skills.Ability and urge to learn the latest digital media technologies.Ability to prioritize the work.Multitasking ability.",
        location: "Karachi",
        jobschedule: "Full-Time",
        shift: "Morning",
        message: "Send your resume with job title as subject to hr@cot.com.pk",
      },
      {
        id: 2,
        title: "Magento Developer",
        experience: "2-3 years",
        requirments:
          "Understanding of Magento’s code structure, extension architecture and theming hierarchy (Magento 1.9 & 2.0)Experience in customizing Magento’s front-end components using layout XML, blocks, and templatesExperience in Magento Performance OptimizationUnderstanding of Extending Magento extensionsUnderstanding of Store catalog (categories/products/attributes)Experience with CSS, JavaScript, Caching, etcUnderstanding of fundamental OOP concepts.",
        location: "Karachi",
        jobschedule: "Full-Time",
        shift: "Morning",
        message: "Send your resume with job title as subject to hr@cot.com.pk",
      },

      {
        id: 3,
        title: "PHP Developer",
        experience: "2-3 years",
        requirments:
          "Designing & Developing websites & plugins from scratch on custom theme.Customization of pre-build themes and plugins as per requirement to develop or design a site.Modifications / Customization to the existing websites as per project details.Development of all device responsive & adaptive sites.Ensuring the security through plugins & Cpanel of the site along with speed optimization through various plugins / tools.Assistance in fixing bugs and providing technical support wherever required.Strong Experience with Custom WordPress themes and plugins from scratch with great design and focus on UI/UX and strong understanding of PHP back-end development.Customization development Skills MySQL, JavaScript, PHP, Ajax, Jquery, Wordpress, CSS3, HTML5, Bootstrap,LaravellManaged more than one custom WordPress site and strong ability to learn and adapt new changes.",
        location: "Karachi",
        jobschedule: "Full-Time",
        shift: "Morning",
        message: "Send your resume with job title as subject to hr@cot.com.pk",
      },
      {
        id: 4,
        title: "Wordpress Developer",
        experience: "2-3 years",
        requirments:
          "Design & Develop websites from scratch on custom theme.Customization of pre-build themes and plugins as per requirement to develop or design a site.Modifications / Customization to the existing websites as per project details.Development of all device responsive & adaptive sites.Ensuring the security through plugins & Cpanel of the site along with speed optimization through various plugins / tools.Assistance in fixing bugs and providing technical support wherever required.Strong Experience with Custom WordPress themes and plugins from scratch with great design and focus on UI/UX and strong understanding of PHP back-end development.Customization development Skills MySQL, JavaScript, PHP, Ajax, Jquery, Wordpress, CSS3, HTML5, Bootstrap,LaravellManaged more than one custom WordPress site and strong ability to learn and adapt new changes.",
        location: "Karachi",
        jobschedule: "Full-Time",
        shift: "Morning",
        message: "Send your resume with job title as subject to hr@cot.com.pk",
      },
      {
        id: 5,
        title: "React Native Developer",
        experience: "2-3 years",
        requirments:
          "Hands on experience in building mobile app with react native and have deployed at least 4 apps on stores.Should know the architecture of mobile apps and how react native works.experience in Redux.Experience in Javascript.Experienced with integration of Native Modules.Should know object oriented program.Experience in Java or Kotlin will be plus.Experience in Objective-c or Swift will be a plus.Experience in ionic will be a plus.",
        location: "Karachi",
        jobschedule: "Full-Time",
        shift: "Morning",
        message: "Send your resume with job title as subject to hr@cot.com.pk",
      },
      {
        id: 6,
        title: "Backend Engineer",
        experience: "2-3 years",
        requirments:
          "Aeque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur numquam tempora.",
        location: "Karachi",
        jobschedule: "Full-Time",
        shift: "Morning",
        message: "Send your resume with job title as subject to hr@cot.com.pk",
      },
    ],
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
        {/* <!-- TESTIMONIAL START --> */}

        <section className='section position-relative' id='careers'>
          <Container>
            <SectionTitle
              title='Join Us to Build A More Sustainable Future.'
              description='A job at COT is a career made for you, by you'
            />

            <div className='row mt-4'>
              <OwlCarousel
                className='owl-theme client-images text-center'
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
                {this.state.careers.map((career, id) => (
                  <div className='item'>
                    <div className='testi-content bg-white text-center m-3'>
                      {/* <img
                        src={client1}
                        alt='client'
                        className='img-fluid mx-auto d-block rounded-circle user-img'
                      /> */}
                      <h2 className='text-dark mt-4 f-20 mb-0'>
                        {career.title}
                      </h2>
                      <p className='text-muted f-14'>{`Experience Required: ${career.experience}`}</p>
                      <p className='text-muted f-14'>{`Location: ${career.location}`}</p>
                      <p className='text-muted f-15 mt-3 mb-0'>
                        {`Shift: ${career.shift}`}
                      </p>

                      <ModalExample
                        buttonLabel='View Details'
                        title={career.title}
                        experience={career.experience}
                        location={career.location}
                        shift={career.shift}
                        requirments={career.requirments}
                        message={career.message}
                        className='modal-career'
                      />
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </Container>
        </section>
        {/* TESTIMONIAL END */}
      </React.Fragment>
    );
  }
}

export default Careers;
