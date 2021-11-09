import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
  state = {
    footerItems: [

      {
        title: "Get In Touch",
        links: [
          {
            icon: "remixicon-mail-line",
            item: "info@cot.com.pk",
            link: "mailto: info@cot.com.pk",
          },
          {
            icon: "remixicon-phone-line",
            item: "(+92)317 4712765",
            link: "tel:(+92)317 4712765",
          },
        ],
      },
    ],
    socialIcons: [
      { icon: "remixicon-linkedin-line", iconLink: "#" },
      {
        icon: "remixicon-facebook-line",
        iconLink: "https://www.facebook.com/ComputingOfTomorrow",
      },
      { icon: "remixicon-instagram-line", iconLink: "#" },
      { icon: "remixicon-twitter-line", iconLink: "#" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* FOOTER START  */}
        <footer className='pt-5 pb-4 position-relative bg-light'>
          <Container className='container'>
            <Row>
              <Col lg={5}>
                <div className='footer-about-content mt-4'>
                  <h3>
                    <span className='text-purple'>C</span>omputing{" "}
                    <span className='text-purple'>O</span>f{" "}
                    <span className='text-purple'>T</span>omorrow
                  </h3>
                  <p className='mt-4 text-muted f-15'>
                    Taking The World To Future
                  </p>
                  <ul className='list-inline footer-icon mt-4'>
                    {this.state.socialIcons.map((item, key) => (
                      <li
                        className='list-inline-item h4 mr-4 social-icons'
                        key={key}
                      >
                        <Link
                          to={{ pathname: item.iconLink }}
                          target='_blank'
                          className='text-purple'
                        >
                          <i className={item.icon} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={5} className='get-in-touch-section offset-lg-1'>
                <div className='row'>
                  {this.state.footerItems.map((item, key) => (
                    <div className='col-md-6' key={key}>
                      <div className='mt-4'>
                        <h5 className='text-dark footer-title font-weight-medium mb-4'>
                          {item.title}
                        </h5>
                        <ul className='list-unstyled footer-sub-menu'>
                          {item.links.map((fLink, key) => (
                            <li className='f-15 mt-3 mb-3' key={key}>
                              <Link className='text-muted get-in-touch-icon'>
                                <a href={fLink.link}>
                                  <i className={fLink.icon} />
                                </a>
                              </Link>
                              <Link className='text-muted get-in-touch-link'>
                                <a href={fLink.link}>{fLink.item}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            <FooterLinks />
          </Container>
        </footer>

        {/* FOOTER END  */}
      </React.Fragment>
    );
  }
}

export default Footer;
