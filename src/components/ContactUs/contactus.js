import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../../components/Common/SectionTitle";

class ContactUs extends Component {
  render() {
    const submitForm = () => {
      console.log('Form Submitted');
    }
    return (
      <React.Fragment>
        <section className="section position-relative bg-gradient">
          <div className="bg-cta-overlay" />
          <SectionTitle
              title="Request A Quote"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
            />
          <div className="form-container">
          <form onSubmit={this.submitForm}>
            <div className="row">
              
              <Col xs="12" lg="6">
              <input type="text" className="input" placeholder="Name*" required></input>
              <input type="text" className="input" placeholder="Organization*" required></input>
              <input type="tel" className="input" placeholder="Contact*" required></input>
              <input type="email" className="input" placeholder="Email*" required></input>
              </Col>
              <Col xs="12" lg='6'>
              <textarea className="input message" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
              </Col>
            </div>
            <input type="submit" className="form-submit" value="Submit" />
            </form>
          </div>
        </section>

        {/* CTA END  */}
      </React.Fragment>
    );
  }
}

export default ContactUs;
