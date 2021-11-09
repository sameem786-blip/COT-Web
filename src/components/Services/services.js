import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";
import ServiceBox from "./service-box";

class Services extends Component {
  state = {
    services: [
      {
        title: "Web Development",
        icon: "remixicon-computer-line",
        description:
          "PHP | MEAN | MERN | Django | Wordpress",
        link: "#",
      },
      {
        title: "Mobile App Development",
        icon: "remixicon-smartphone-line",
        description:
          "Native Android | Native iOS | Flutter | React Native",
        link: "#",
      },
      {
        title: "Blockchain Development",
        icon: "remixicon-image-line",
        description:
          "",
        link: "#",
      },
      {
        title: "Graphic Desgn",
        icon: "remixicon-image-line",
        description:
          "Photoshop | Illustrator | After Effects",
        link: "#",
      },
      {
        title: "Search Engine Optimization",
        icon: "remixicon-image-line",
        description:
          "",
        link: "#",
      },
      {
        title: "Automoation",
        icon: "remixicon-image-line",
        description:
          "",
        link: "#",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* SERVICE START  */}
        <section id='service' className='section position-relative'>
          <Container>
            <SectionTitle
              title='Services'
              description='We offer software development services.'
            />
            <Row>
              <ServiceBox services={this.state.services} />
            </Row>
          </Container>
        </section>

        {/* SERVICE END  */}
      </React.Fragment>
    );
  }
}

export default Services;
