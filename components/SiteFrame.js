"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from "./Header";
import Footer from "./Footer";

const SiteFrame = ({ children, footer = true }) => {
  return (
    <div className="page-wrapper">
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
        <Header />
        {children}
        {footer && <Footer />}
      </ReactLenis>
    </div>
  );
};

export default SiteFrame;
