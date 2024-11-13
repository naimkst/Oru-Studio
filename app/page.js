"use client"
import React from 'react';
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import Projects from '../components/Projects';
import Benefits from '../components/Benefits';
import Blogs from '../components/Blogs';
import Discuss from '../components/Discuss';
import Footer from '../components/Footer';

const Home = () => {

   return (
      <div className="page-wrapper">
         <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            <Header />
            <Hero />
            <div className="bg-wrap">
               <Founders />
               <Services />
            </div>
            <Clients />
            <Testimonial />
            <Projects />
            <Benefits />
            <Blogs />
            <Discuss />
            <Footer />
         </ReactLenis>
      </div>
   )
}

export default Home;