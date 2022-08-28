import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import "./airbnb.css";
import air from "./../../assets/airbnb.png"
import bin from "./../../assets/binance.png"
import coin from "./../../assets/coinbase.png"
import drop from "./../../assets/dropbox.png"

const Airbnb = () => {
    return (
       <Container>
        <section className="air-img"> 
        <Row className="g-5"> 
            <Col md={3} className="airimgcol">
            <img src={air} alt="" />
            </Col>

            <Col  md={3} className="airimgcol">
            <img src={bin} alt="" />
            </Col>

            <Col  md={3} className="airimgcol">
            <img src={coin} alt="" />
            </Col>

            <Col  md={3} className="airimgcol"> 
            <img src={drop} alt="" />
            </Col>

    
        </Row>
        </section>
       </Container>
    );
};

export default Airbnb;