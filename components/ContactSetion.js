import Link from 'next/link';
import React from 'react';
import ContactForm from './ContactForm';
import PartnerSection from './PartnerSection';
import { company } from '../data/siteContent';

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
                                    <li>We’ll get back to you within 24 hours.</li>
                                    <li>NDA signing available upon request.</li>
                                    <li>Connect with dedicated product specialists.</li>
                                </ul>
                                <div className="contact-left-text">
                                    <div className="contact-left-author">
                                        <div className="contact-img">
                                            <img src="/images/ceo.jpg" alt="" />
                                        </div>
                                        <div className="contact-text">
                                            <span>DIRECT CONTACT:</span>
                                            <h3><Link href={`mailto:${company.email}`}>{company.email}</Link></h3>
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
                                        {company.address}
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
                                    <p className="mb-0">{company.phone}</p>
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
                                    <p className="mb-0">{company.email}</p>
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
