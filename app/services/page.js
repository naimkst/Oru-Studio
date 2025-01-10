"use client"
import React from 'react';
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from '../../components/Header';
import Hero2 from '../../components/Hero2';
import Process from '../../components/Process';
import Discuss from '../../components/Discuss';
import Footer from '../../components/Footer';
import Exprience from '../../components/Exprience';
import Cases from '../../components/Cases';
import Technology from '../../components/Technology';
import Testimonial from '../../components/Testimonial';
import Clients from '../../components/Clients';
import WhyChoose from '../../components/WhyChoose';
import FaqSection from '../../components/FaqSection';
import RelatedService from '../../components/RelatedService';

const Home = () => {

   return (
      <div className="page-wrapper">
         <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            <Header />
            <Hero2 />
            <Process />
            <Exprience />
            <Cases />
            <Technology />
            <Testimonial />
            <Clients />
            <WhyChoose />
            <FaqSection />
            <RelatedService />
            <Discuss />
            <Footer />
         </ReactLenis>
      </div>
   )
}

export default Home;