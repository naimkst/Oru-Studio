import Link from 'next/link';
import React from 'react';
import ContactForm from './ContactForm';
import PartnerSection from './PartnerSection';

const ContactSection = () => {

    return (
        <section className="contact-area section-padding">
            <div className="container">
                <div className="contact-top">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-left">
                                <div className="section-title s2">
                                    <h2>LEt’s <br />
                                        Talk</h2>
                                </div>
                                <ul>
                                    <li>We will respond to you within 24 hours.</li>
                                    <li>We’ll sign an NDA if requested.</li>
                                    <li>Access to dedicated product specialists.</li>
                                </ul>
                                <div className="contact-left-text">
                                    <div className="contact-left-author">
                                        <div className="contact-img">
                                            <img src="/images/ceo.jpg" alt="" />
                                        </div>
                                        <div className="contact-text">
                                            <span>DIRECT CONTACT:</span>
                                            <h3><Link href="/home">orustydio@email.com</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form-area">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <PartnerSection/>
                <div className="contact-info-sec">
                    <div className="contact_info_box row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="iconbox_block text-center">
                                <div className="iconbox_icon">
                                    <img src="/images/icon_map_mark_2.svg" alt="Map Mark SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">Location</h3>
                                    <p className="mb-0">
                                        Postcode : 4024 debrecen, street: Csapo utca 6, floor 4th , door 61.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="iconbox_block text-center">
                                <div className="iconbox_icon">
                                    <img src="/images/icon_calling_2.svg" alt="Calling SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">Contact</h3>
                                    <p className="mb-0">+8801918775454</p>
                                    <div className="mb-0">+88(0) 555-01117</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="iconbox_block text-center">
                                <div className="iconbox_icon">
                                    <img src="/images/icon_mail_3.svg" alt="User Check SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">Email</h3>
                                    <p className="mb-0">hello@orustudio.com</p>
                                    <p className="mb-0">gmail.@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="iconbox_block text-center">
                                <div className="iconbox_icon">
                                    <img src="/images/icon_calendar_2.svg" alt="Calendar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">Visit Between</h3>
                                    <p className="mb-0">Mon - Sat: 8.00-5.00</p>
                                    <p className="mb-0">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
