import React from 'react';
import "./Cardbox02.css";
import { Col, Container, Row } from 'react-bootstrap';
import card from "../../assets/card.png";


const Cardbox02 = () => {
    return (
        <Container>
        <Row>
          
            <Col md={6} className="card-text">
                <div>
                   
                    <h1>Find a better card deal in few easy steps.</h1>
                    

                    <p>Arcu tortor, purus in mattis at sed integer faucibus. 
                        Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </p>
                    <button>Get Started</button>
                    
                </div>
            </Col>

            <Col md={6} className="cardimage">
                <img src={card} alt="" />

            </Col>
        </Row>
        </Container>
    ); 
};

export default Cardbox02;