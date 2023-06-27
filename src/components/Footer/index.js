import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { Images } from '../../assets' 
import "../style.scss"

export default function Footer() {
  return (
   <section className='Footersection'>
    <Container style={{ maxWidth: "1134px", position:"relative" }}>
      <Row>
        <Col lg={4}>
          <div className='FooterInnerblk'>
                <img src={Images.Logo} alt='Travlog' />
                <p style={{margin:"30px 0 0 0"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
in a piece of classical Latin literature from 45 BC.</p>
              <ul style={{margin:"50px 0 0 0"}}>
                <li> <NavLink  to='/'><img src={Images.Fb} alt='FB' /></NavLink></li>
                <li> <NavLink  to='/'><img src={Images.Twitter} alt='Twitter' /></NavLink></li>
                <li> <NavLink  to='/'><img src={Images.Insta} alt='Insta' /></NavLink></li> 
                
              </ul>
          </div>
        </Col>
        <Col lg={3} style={{paddingLeft:"35px"}}>
         <div className='FooterInnerblk'>
          <h4>Company</h4>
            <NavLink  to='/'>About</NavLink>
            <NavLink  to='/'>Career</NavLink>
            <NavLink  to='/'>Mobile</NavLink>
         </div>
        </Col>
        <Col lg={2}>
        <div className='FooterInnerblk'>
          <h4>Contact</h4>
            <NavLink  to='/'>Why Travlog?</NavLink>
            <NavLink  to='/'>Partner with us</NavLink>
            <NavLink  to='/'>FAQ’s</NavLink>
            <NavLink  to='/'>Blog</NavLink>
         </div>
        </Col>
        <Col lg={3} className='Ftlastclm'>
        <div className='FooterInnerblk'>
          <h4>Meet Us</h4>
            <NavLink  to='/'>+00 92 1234 56789</NavLink>
            <NavLink  to='/'>info@travlog.com</NavLink>
            <span>205. R Street, New York <br />BD23200</span>
         </div>
        </Col>
      </Row>
    </Container>
    <img src={Images.Rightimg} className='FootersectionRightimg' />
   </section>
  )
}
