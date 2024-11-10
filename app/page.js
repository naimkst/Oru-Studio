"use client"
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';

const Home = () => {

   return (
      <div className="page-wrapper">
         <Header />
         <Hero />
         <div className="bg-wrap">
            <Founders />
            <Services />
         </div>
         <Clients />
         <Testimonial />
      </div>
   )
}

export default Home;