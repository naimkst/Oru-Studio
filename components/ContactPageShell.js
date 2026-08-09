"use client";

import ContactSection from "./ContactSetion";
import Discuss from "./Discuss";
import FaqSection from "./FaqSection";
import SiteFrame from "./SiteFrame";

export default function ContactPageShell() {
  return (
    <SiteFrame>
      <ContactSection />
      <FaqSection />
      <Discuss />
    </SiteFrame>
  );
}
