import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../assets';
import "../index.scss"
export default function Logos() {
  return (
    <section className='Logosgroup'>
      <div className='LogosGraphic'> <img src={Images.ArrowsGroup} alt='' /></div>
     
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={12}>
            <ClientLogosSlider />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export const ClientLogosSlider = () => { 
  const clientLogos = [
   (Images.Logo_1),
   (Images.Logo_2),
   (Images.Logo_3),
   (Images.Logo_4),
   (Images.Logo_5),
  
  ];

  return ( 
   <Carousel interval={2000} className='ClientLogoSld'> 
        <Carousel.Item>
          <Container>
            <Row> 
              <Col lg={12}>
                <ul className='ClientLogo'>
                {clientLogos.map((logo, index) => (
                  <li>
                    <img className="d-block" src={logo} alt={`Client Logo ${index}`} />
                  </li> ))}
                </ul> 
              </Col>  
            </Row>
          </Container> 
        </Carousel.Item> 
        <Carousel.Item>
          <Container>
            <Row> 
              <Col lg={12}>
                <ul className='ClientLogo'>
                {clientLogos.map((logo, index) => (
                  <li>
                    <img className="d-block" src={logo} alt={`Client Logo ${index}`} />
                  </li> ))}
                </ul> 
              </Col>  
            </Row>
          </Container> 
        </Carousel.Item> 
    </Carousel> 
  );
};
 