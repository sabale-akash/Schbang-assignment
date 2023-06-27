import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from './HomeComponents/Banner';
import Logos from './HomeComponents/Logos';
import Service from './HomeComponents/Service';
import TravelPointBlock from './HomeComponents/TravelPointBlock';
import SubscribeNewsletter from './HomeComponents/SubscribeNewsletter';
import './index.scss'; 

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Logos />
      <Service />
      <TravelPointBlock />
      <SubscribeNewsletter />
      <Footer />  
    </>
  )
}
