import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Services from "../../components/Services/services";
import Aboutus from "../../components/Aboutus/aboutus";
import Careers from "../../components/Careers/careers";
import Portfolio from "../../components/Portfolio/portfolio";
import Quote from "../../components/ContactUs/contactus";
import Footer from "../../components/Footer/footer";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      isStickyNav: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);

    this.scrollNavigation();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;

    if (scrollup > this.state.pos) {
      this.setState({ navClass: "darkheader", imglight: false });
      this.setState({ isStickyNav: false });
    } else if (window.innerWidth <= 768) {
      this.setState({ navClass: "darkheader", imglight: false });
      this.setState({ isStickyNav: false });
    } else {
      this.setState({ navClass: "", imglight: true });
      this.setState({ isStickyNav: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}

        <NavbarPage
          navclass={this.state.navClass}
          imglight={this.state.imglight}
          isStickyNav={this.state.isStickyNav}
        />

        <Section />

        <Aboutus />

        <Services />

        {/* <Portfolio /> */}

        <Quote />

        <Careers />

        

        {/* import services */}
        

        {/* import Features */}
        

        {/* import Achievement */}
        {/* <Achievement /> */}

        {/* import Pricing */}
        

        {/* import Clients */}
        

        {/* import ContactUs */}
        

        {/* import Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
