"use client";

import Cases from "./Cases";
import Clients from "./Clients";
import Discuss from "./Discuss";
import Exprience from "./Exprience";
import FaqSection from "./FaqSection";
import Hero2 from "./Hero2";
import Process from "./Process";
import RelatedService from "./RelatedService";
import SiteFrame from "./SiteFrame";
import Technology from "./Technology";
import Testimonial from "./Testimonial";
import WhyChoose from "./WhyChoose";

export default function ServicesPageShell() {
  return (
    <SiteFrame>
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
    </SiteFrame>
  );
}
