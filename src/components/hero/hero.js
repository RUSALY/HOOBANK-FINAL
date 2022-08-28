import React from 'react';
import "./hero.css"
import {Row,Col, Container} from "react-bootstrap"
import hand from "./../../assets/robot.png"
import discountSvg from "./../../assets/Discount.svg"
import arrow from "./../../assets/arrow-up.svg"



const Hero = () => {
    return (
  
        <Row className ='g-0'>
            <Col md={7} className="thenext-text">

                <div className='position-relative'>

                    <div className="discount-msg">
                        <img src={discountSvg} alt="" />                  
                        <span> 20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
                        
                    </div>

                    <div className="nextH">
                    <h1>The Next </h1>
                    <h1>Generation</h1>
                    <h1>Payment Method.</h1>
                    </div>

                    
                    <p className="nextPara">Our team of experts uses a methodology to identify the credit cards most likely to 
                        fit your needs. We examine annual percentage rates, annual fees.</p>
                   

                    <div className="getstarted">
                        <a href="">Get <img src={arrow} alt="" /> Started</a>
                    </div>

                </div>

            </Col>
            <Col md={5} className="hand-img">
               <img src={hand} alt="" />
            </Col>
        </Row>
      
        
    );
};

export default Hero;