import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '../../assets'
import "../index.scss"
export default function TravelPointBlock() {
  return (
   <section className='TravelPointBlock'>
    <Container fluid>
      <Row>
        <Col lg={7}><img src={Images.Banner_2} alt='' className='TravelPointBlockLEft' /></Col>
        <Col lg={5} style={{maxWidth: "469px"}}>
        <div className='ServiceLeft'>
              <h3>Travel Point</h3>
              <h5>We helping you find your dream location</h5>
              <p className='text-left'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            </div> 

            <div className='CounterBlockMain'>
              <span><img src={Images.Ticket} /></span>
              <CounterBlock CounterTitle="500" CounterPlus='+' CounterContent="Holiday Package" />
              <CounterBlock CounterTitle="100" CounterContent="Luxury Hotel"  />
              <CounterBlock CounterTitle="7" CounterContent="Premium Airlines"  />
              <CounterBlock CounterTitle="2K" CounterPlus='+' CounterContent="Happy Customer"  />
            </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}


export const CounterBlock = (props) => { 
 
  return (
    <div className="completed-counter">
      <h2>{props.CounterTitle}<span>{props.CounterPlus}</span> </h2>
      <h6>{props.CounterContent}</h6>
    </div>
  );
};
