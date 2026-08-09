"use client";

import Benefits from "./Benefits";
import Blogs from "./Blogs";
import Clients from "./Clients";
import Discuss from "./Discuss";
import Founders from "./Founders";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import SiteFrame from "./SiteFrame";
import Testimonial from "./Testimonial";

export default function HomePageShell({ featuredPosts }) {
  return (
    <SiteFrame>
      <Hero />
      <div className="bg-wrap">
        <Founders />
        <Services />
      </div>
      <Clients />
      <Testimonial />
      <Projects />
      <Benefits />
      <Blogs posts={featuredPosts} />
      <Discuss />
    </SiteFrame>
  );
}
