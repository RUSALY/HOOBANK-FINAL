import React from 'react';
import "./cardbox01.css"
import { Col, Container, Row } from 'react-bootstrap';
import bill from "../../assets/bill.png";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";


const Cardbox01 = () => {
    return (
        <Container>
        <Row>
            <Col md={6} className="bill-img">
                <img src={bill} alt="" />

            </Col>
            <Col md={6} className="bill-text">
                <div>
                   
                    <h1>Easily control your billing & invoicing.</h1>
                    

                    <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
                        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                    </p>
                    <div>
                        <img src={apple} alt="" />
                        <img src={google} alt="" />
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
    );
};

export default Cardbox01;