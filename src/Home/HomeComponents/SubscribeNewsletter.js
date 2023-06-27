import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../assets'
import "../index.scss"

export default function SubscribeNewsletter() {
  return (
    <section className='SubscribeNewsletter'>

      <Container style={{ maxWidth: "1134px", position:"relative" }}>
        <img src= {Images.Graphic} className='NewsGraphics' />
        <Row>
          <Col>
            <div className='NewsletterInner'>
              <p>subscribe to our newsletter</p>
              <h1>Prepare yourself & let’s explore the beauty of the world</h1>
              <div className='Neslettrblk'>
                <img src={Images.Mail} alt='mail' />
                <input type='text' placeholder='Your Email' />
                <button>Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
