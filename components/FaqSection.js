import { useState } from "react";
import Link from 'next/link';
import React from 'react';

const FaqSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: "What are web development services?",
            content: "Web development services involve building and maintaining websites or web applications. This includes everything from designing user-friendly interfaces, coding front-end and back-end functionality, integrating databases, to ensuring site performance, security, and responsiveness. These services help businesses establish and grow their online presence, providing seamless digital experiences for users.",
        },
        {
            title: "How is web development related to user experience?",
            content: "Web development and user experience (UX) are closely connected because the way a website is built directly affects how users interact with it. Good web development ensures fast loading times, smooth navigation, mobile responsiveness, and accessibility—all key factors that create a positive user experience. In short, well-executed development makes websites easy, enjoyable, and efficient for users to engage with.",
        },
        {
            title: "Why do I need a website?",
            content: "You need a website to establish your online presence, reach a wider audience, showcase your products or services, and build credibility. It acts as a 24/7 storefront where potential customers can learn about your business, contact you, and make decisions. In today’s digital world, a website is essential for growth and staying competitive.",
        },
        {
            title: "How long does a project take to complete from start to finish?",
            content: "The timeline for completing a project varies depending on its size, complexity, and requirements. Simple projects may take a few weeks, while more complex ones can take several months. We work closely with clients to define clear milestones and ensure timely delivery without compromising quality.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="faq-left-text">
                            <div className="faq-left-author">
                                <div className="faq-img">
                                    <img src="/images/ceo.jpg" alt="" />
                                </div>
                                <div className="faq-text">
                                    <h3>Naim Hossain Najmul</h3>
                                    <span>CEO @ Oru-Studio</span>
                                </div>
                            </div>
                            <p>“Got more questions or curious about what’s next? Connect with me on Telegram anytime.”</p>
                            <Link href="/home" className='btn-style-2 button'>
                                <span className='main-text'>CONNECT on Telegram</span>
                                <span className='hover-text'>CONNECT on Telegram</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="faq-items">
                            <div className="section-title s2 mb-0">
                                <h2>FAQ</h2>
                            </div>
                            <div className="accordion">
                                {accordionData.map((item, index) => (
                                    <div key={index} className="accordion-item">
                                        <button
                                            className={`accordion-header ${activeIndex === index ? "active" : ""}`}
                                            onClick={() => toggleAccordion(index)}
                                            aria-expanded={activeIndex === index}
                                        >
                                            {item.title}
                                        </button>
                                        <div
                                            className="accordion-content"
                                            style={{
                                                maxHeight: activeIndex === index ? "200px" : "0",
                                                overflow: "hidden",
                                                transition: "max-height 0.3s ease",
                                            }}
                                        >
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FaqSection;
