"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const initialFormState = {
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
    consent: false
};

const ContactForm = (props) => {

    const [forms, setForms] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [consentTouched, setConsentTouched] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [, forceUpdate] = useState(0);
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        const { name, value, type, checked } = e.target;
        setForms({ ...forms, [name]: type === 'checkbox' ? checked : value });
        setStatus({ type: '', message: '' });

        if (name === 'consent') {
            setConsentTouched(true);
        }

        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async e => {
        e.preventDefault();
        setConsentTouched(true);

        if (!validator.allValid() || !forms.consent) {
            validator.showMessages();
            forceUpdate((value) => value + 1);
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(forms)
            });
            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(data.message || 'Unable to send your message right now.');
            }

            validator.hideMessages();
            setForms(initialFormState);
            setConsentTouched(false);
            setStatus({
                type: 'success',
                message: data.message || 'Thanks. Your message has been sent.'
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Unable to send your message right now.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field">
                        <div className="input-box">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Name*" />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <div className="input-box">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Email*" />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <div className="input-box">
                            <input
                                value={forms.phone}
                                type="tel"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Phone" />
                            {validator.message('phone', forms.phone, 'phone')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <div className="input-box">
                            <select
                                value={forms.budget}
                                name="budget"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            >
                                <option value="">What is your budget?</option>
                                <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                                <option value="Below $5,000">Below $5,000</option>
                            </select>
                            {validator.message('budget', forms.budget, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <div className="input-box">
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control"
                                placeholder="About Project">
                            </textarea>
                            {validator.message('message', forms.message, 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <div className="form-group-check">
                            <input
                                type="checkbox"
                                id="privacy-consent"
                                name="consent"
                                checked={forms.consent}
                                onChange={(e) => changeHandler(e)}
                            />
                            <label htmlFor="privacy-consent">By submitting the form I agree with the <Link href="/privacy-policy">Privacy Policy</Link>
                            </label>
                            {consentTouched && !forms.consent && (
                                <div className="errorMessage">Please agree with the Privacy Policy.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {status.message && (
                <div className={`form-status ${status.type}`} role="status" aria-live="polite">
                    {status.message}
                </div>
            )}
            <div className="cp-det-btn mt-20 d-grid">
                <button className='btn-style-2 button' type="submit" disabled={isSubmitting}>
                    <span className='main-text'>{isSubmitting ? 'Sending...' : 'Send us a message'}</span>
                    <span className='hover-text'>{isSubmitting ? 'Sending...' : 'Send us a message'}</span>
                </button>
            </div>
        </form>
    )
}

export default ContactForm;
