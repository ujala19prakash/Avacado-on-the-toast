import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'

const Footer = () => {
  return (
    <div className="footer_container footer1">
      <Container classname='footer1'>
        <Row>
          <Col md={6} xs={12}>
            <div className="footer_logo_container">
              <h4 className="footer_logo">NUSM</h4>
              <p className="footer_description">
                <h5>Lend it, Sell it, Own it</h5>
              </p>
            </div>
          </Col>
          <Col md={3} xs={4}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Home</a>
              </li>
              <li className="navlink">
                <a href="#/">Services</a>
              </li>
              <li className="navlink">
                <a href="#/">Online Booking</a>
              </li>
              <li className="navlink">
                <a href="#/">About</a>
              </li>
              <li className="navlink">
                <a href="#/">Blog</a>
              </li>
              <li className="navlink">
                <a href="#/">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={8}>
            <h5 className="about_us_heading">Contact Us</h5>
            <ul className="navlinks">
              <li className="nav_li">
                <p className="navlink">+91-9876543210</p>
              </li>
              <li className="nav_li">
                <p className="navlink">
                POST AN AD HASSLE FREE
Posting an ad on NUSM has become easier than ever. A few simple steps and your ad is posted.


                </p>
              </li>
              <li className="nav_li">
                <p className="navlink">nusm@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
