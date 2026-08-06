"use client";

import { useState } from "react";
import Link from 'next/link';
import React from 'react';
import { company } from '../data/siteContent';

const FaqSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: "What development services does Oru Studio provide?",
            content: "We provide full stack web development, Shopify app development, Shopify theme development, headless commerce, backend integrations, UI/UX design, DevOps, performance optimization, QA, and maintenance support.",
        },
        {
            title: "Can you build both Shopify apps and Shopify themes?",
            content: "Yes. We build embedded Shopify apps, merchant dashboards, webhooks, Admin GraphQL workflows, custom Liquid themes, reusable sections, product templates, and storefront performance improvements.",
        },
        {
            title: "Can you improve an existing website or app?",
            content: "Yes. We can audit an existing product, fix bugs, improve performance, clean up UX issues, add features, migrate platforms, and create a maintenance plan without forcing a full rebuild.",
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
                                    <h3>{company.founder}</h3>
                                    <span>{company.founderTitle}</span>
                                </div>
                            </div>
                            <p>“Got more questions or curious about what’s next? Connect with me on Telegram anytime.”</p>
                            <Link href={company.telegramUrl} target="_blank" className='btn-style-2 button'>
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
