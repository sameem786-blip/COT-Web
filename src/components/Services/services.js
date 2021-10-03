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
        icon: "pe-7s-exapnd2",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur consequuntu.",
        link: "#",
      },
      {
        title: "Mobile App Development",
        icon: "pe-7s-exapnd2",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur consequuntu.",
        link: "#",
      },
      {
        title: "Cloud Development",
        icon: "pe-7s-exapnd2",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur consequuntu.",
        link: "#",
      },
      
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* SERVICE START  */}
        <section id="service" className="section position-relative">
          <Container>
            <SectionTitle
              title="Services"
              description="We offer the following services professionally."
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
