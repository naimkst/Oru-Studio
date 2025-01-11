"use client"
import React from 'react';
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from '../../components/Header';
import ContactSection from '../../components/ContactSetion';
import FaqSection from '../../components/FaqSection';
import Discuss from '../../components/Discuss';
import Footer from '../../components/Footer';

const Contact = () => {

   return (
      <div className="page-wrapper">
         <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            <Header />
            <ContactSection/>
            <FaqSection />
            <Discuss />
            <Footer />
         </ReactLenis>
      </div>
   )
}

export default Contact;