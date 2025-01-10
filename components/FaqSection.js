import { useState } from "react";
import Link from 'next/link';
import React from 'react';

const FaqSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: "What are web development services?",
            content: "Web development refers to the full-cycle creation of a web-based product. This process usually involves designing the web pages and then bringing them to life through programming. Depending on the scope of the project, these services may include front-end, back-end development, creation and optimization of text content, SEO, support, etc. Basically, web development is a set of measures necessary for the launch and sustainability of any given product.",
        },
        {
            title: "How is web development related to user experience?",
            content: "Web development refers to the full-cycle creation of a web-based product. This process usually involves designing the web pages and then bringing them to life through programming. Depending on the scope of the project, these services may include front-end, back-end development, creation and optimization of text content, SEO, support, etc. Basically, web development is a set of measures necessary for the launch and sustainability of any given product.",
        },
        {
            title: "Why do I need a website?",
            content: "Web development refers to the full-cycle creation of a web-based product. This process usually involves designing the web pages and then bringing them to life through programming. Depending on the scope of the project, these services may include front-end, back-end development, creation and optimization of text content, SEO, support, etc. Basically, web development is a set of measures necessary for the launch and sustainability of any given product.",
        },
        {
            title: "How long does a project take to complete from start to finish?",
            content: "Web development refers to the full-cycle creation of a web-based product. This process usually involves designing the web pages and then bringing them to life through programming. Depending on the scope of the project, these services may include front-end, back-end development, creation and optimization of text content, SEO, support, etc. Basically, web development is a set of measures necessary for the launch and sustainability of any given product.",
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
                            <p>“Have more questions or just curious about future possibilities? Feel free to connect with me on Telegram.”</p>
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
