import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../assets'
import "../index.scss"

export default function Banner() {
  return (
    <section className='bannerBlock'>
      <Container>
        <Row className="justify-content-md-center align-items-md-center">
          <Col lg={5}>
            <div className='BannerLeft'>
              <span className='textwithicon'>Explore the world! <img src={Images.Bag} alt='bag' /></span>
              <h1>Travel <span>top destination</span> of the world</h1>
              <p>We always make our customer happy by providing as many choices as possible </p>
              <div className='bannerCTC'>
                <button>Get Started</button>
                <button><img src={Images.Play} alt='play' /> Watch Demo</button>
              </div>
            </div>
          </Col>
          <Col className='BannerRight' lg={7}>
            <img src={Images.Banner} alt='Banner' />
          </Col>
        </Row> 
      </Container>


    </section>
  )
}
