import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

//Import Images
import footerlogo from "../../assets/images/logo-dark.png";

class Footer extends Component {
  state = {
    footerItems: [
      // {
      //   title: "Product",
      //   links: [
      //     { linkTitle: "Tranding", link: "/" },
      //     { linkTitle: "Popular", link: "#" },
      //     { linkTitle: "Job Opening", link: "#" },
      //     { linkTitle: "Customers", link: "#" },
      //     { linkTitle: "Features", link: "#" },
      //   ],
      // },
      
      {
        title: "Get In Touch",
        links: [
          { icon: "remixicon-mail-line", item: "info@cot.com.pk", link: "#" },
          { icon: "remixicon-phone-line", item: "(+92)317 4712765", link: "#" },
        ],
      },
    ],
    socialIcons: [
      { icon: "remixicon-facebook-line", iconLink: "https://www.facebook.com/ComputingOfTomorrow" },
      { icon: "remixicon-twitter-line", iconLink: "#" },
      { icon: "remixicon-instagram-line", iconLink: "#" },
      { icon: "remixicon-linkedin-line", iconLink: "#" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* FOOTER START  */}
        <footer className="pt-5 pb-4 position-relative bg-light">
          <Container className="container">
            <Row>
              <Col lg={5}>
                <div className="footer-about-content mt-4">
                  <h3>Computing Of Tomorrow</h3>
                  <p className="mt-4 text-muted f-15">
                    Sed ut perspiciatis unde omnis iste a natus error scusantium
                    doloremque rem explicabo.
                  </p>
                  <ul className="list-inline footer-icon mt-4">
                    {this.state.socialIcons.map((item, key) => (
                      <li className="list-inline-item h4 mr-4" key={key}>
                        <Link to={item.iconLink} className="text-purple">
                          <i className={item.icon} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={5} className="get-in-touch offset-lg-1">
                <div className="row">
                  {this.state.footerItems.map((item, key) => (
                    <div className="col-md-4" key={key}>
                      <div className="mt-4">
                        <h5 className="text-dark footer-title font-weight-medium mb-4">
                          {item.title}
                        </h5>
                        <ul className="list-unstyled footer-sub-menu">
                          {item.links.map((fLink, key) => (
                            <li className="f-15 mt-3 mb-3" key={key}>
                              <Link className="text-muted">
                              
                                {fLink.item}
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
