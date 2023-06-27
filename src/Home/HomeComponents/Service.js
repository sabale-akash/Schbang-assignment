import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
 
import "../index.scss"
import { Pagination } from "swiper";
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from "../../assets";


export default function Service() {
  return (
    <section className='ServiceBlock'>
      <Container >
        <Row className="align-items-center">
          <Col lg={4}>
            <div className='ServiceLeft'>
              <h3>Services</h3>
              <h5>Our top value categories for you</h5>
            </div>
          </Col>
          <Col lg={8}>
            <ServiceSlider />
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export function ServiceSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true} 
        modules={[Pagination]}
        loop={true}
        navigation={true}
        autoplay={true}
        breakpoints={{
          320: {
            slidesPerView:1,
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperSlideBlock SwiperSlideBlockImg={Images.Icon_1} SwiperSlideBlockTitle="Best Tour Guide" SwiperSlideBlockContent="What looked like a small patch of purple grass, above five feet." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideBlock SwiperSlideBlockImg={Images.Icon_2} SwiperSlideBlockTitle="Easy Booking" SwiperSlideBlockContent="Square, was moving across the sand in their direction." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideBlock SwiperSlideBlockImg={Images.Icon_1} SwiperSlideBlockTitle="Best Tour Guide" SwiperSlideBlockContent="What looked like a small patch of purple grass, above five feet." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideBlock SwiperSlideBlockImg={Images.Icon_2} SwiperSlideBlockTitle="Easy Booking" SwiperSlideBlockContent="Square, was moving across the sand in their direction." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideBlock SwiperSlideBlockImg={Images.Icon_1} SwiperSlideBlockTitle="Best Tour Guide" SwiperSlideBlockContent="What looked like a small patch of purple grass, above five feet." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideBlock SwiperSlideBlockImg={Images.Icon_2} SwiperSlideBlockTitle="Easy Booking" SwiperSlideBlockContent="Square, was moving across the sand in their direction." />
        </SwiperSlide>
      </Swiper>
    </>
  );
}



export function SwiperSlideBlock(props) {
  return (
    <div className="SwiperSlideBlock">
      <img src={props.SwiperSlideBlockImg} alt="" />
      <h4>{props.SwiperSlideBlockTitle} </h4>
      <p>{props.SwiperSlideBlockContent}</p>
    </div>
  )
}
