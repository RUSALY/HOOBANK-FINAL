import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";
import logo from "../../assets/logo.svg"
import footerlogo from "../../assets/footerlogo.png"
import footerlogoc from "../../assets/footer-c.png"

const Footer = () => {
    return (
      <Container>
        <section className="footsec">
            <Row className="footerdsn">
                <Col md={6} className="footerimg">
                    <img src={logo} alt="" />
                    <p className="footpara">A new way to make the payments easy, reliable and secure.</p>
                </Col>
                <Col md={2}>
                    <h5 className="ul-space-h">Usefull Links</h5>
                    <ul className="ul-space">
                        <li><a href="">Content</a></li>
                        <li><a href="">How it Works</a></li>
                        <li><a href="">Create</a></li>
                        <li><a href="">Explore</a></li>
                        <li><a href="">Terms & Services</a></li>
                    </ul>
                    
                   
                </Col>
                <Col md={2} >
                    <div>
                <h5 className="ul-space-h">Community</h5>
                    <ul className="ul-space">
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Suggestions</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Newsletters</a></li>
                    </ul>
                    </div>
                    
                </Col>
                <Col md={2}>
                <h5 className="ul-space-h">Partner</h5>
                    <ul className="ul-space">
                        <li><a href="">Our Partner</a></li>
                        <li><a href="">Become a Partner</a></li>
                      
                    </ul>
                    
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={6} >
                <span className='copy'>Copyright</span>     <img className="footerC" src={footerlogoc} alt="" />   <span className="hoobank">2021 HooBank. All Rights Reserved.</span>
                </Col>
                <Col md={6} className="foot-logo-col">
                    <div className="foot-logo ms-auto">
                    <img src={footerlogo} alt="" />
                    </div>
                    
                </Col>
            </Row>
        </section>
      </Container>

    );
};

export default Footer;