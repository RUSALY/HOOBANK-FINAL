import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slideimg from "../../assets/quotes.svg"
import peo1 from "../../assets/people01.png"
import peo2 from "../../assets/people02.png"
import peo3 from "../../assets/people03.png"

const Slider = () => {
    return (
        <Container>
            <Row className="mb-5">
                <Col md={4}>
                <h1>
                What people are saying about us
                </h1>
                </Col>
                <Col md={8} className="slider-head-para">
                <p>
                Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
                
                </Col>
            </Row>
                
        


            <Row className="sp">

                <Swiper   slidesPerView={3}
                 spaceBetween={80}
                 className="mySwiper"
                
                >
                    <SwiperSlide>
                    <div className="sliderstyle">
                        <img src={slideimg} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className="slidestyle-namediv">
                            <img src={peo1} alt="" />
                            <div className="ms-3">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderstyle">
                        <img src={slideimg} alt="" />
                        <p>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                        <div className="slidestyle-namediv">
                            <img src={peo2} alt="" />
                            <div className="ms-3">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderstyle">
                        <img src={slideimg} alt="" />
                        <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
                        <div className="slidestyle-namediv">
                            <img src={peo3} alt="" />
                            <div className="ms-3">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderstyle">
                        <img src={slideimg} alt="" />
                        <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className="slidestyle-namediv">
                            <img src={peo1} alt="" />
                            <div className="ms-3">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sliderstyle">
                        <img src={slideimg} alt="" />
                        <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
                        <div className="slidestyle-namediv">
                            <img src={peo1} alt="" />
                            <div className="ms-3">
                                <h5>Herman Jensen</h5>
                                <span>Founder & Leader</span>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                </Swiper>

            </Row>


           
        </Container>
    );
};

export default Slider;