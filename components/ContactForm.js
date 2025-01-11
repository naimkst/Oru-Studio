import Link from 'next/link';
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        select: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                select: '',
                message: ''
            })
        } else {
            validator.showMessages();
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
                                type="phone"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Phone" />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <div className="input-box">
                            <select
                                value={forms.select}
                                name="select"
                                className="form-control"
                                onChange={(e) => setForms({ ...forms, select: e.target.value })}
                            >
                                <option value="">What is your budget?</option>
                                <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                                <option value="Below $5,000">Below $5,000</option>
                            </select>
                            {validator.message('select', forms.select, 'required|phone')}
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
                        <div class="form-group-check">
                            <input type="checkbox" id="html" />
                            <label for="html">By submitting the form I agree with the <Link href="#">Privacy Policy</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cp-det-btn mt-20 d-grid">
                <button className='btn-style-2 button'>
                    <span className='main-text'>Send us a message</span>
                    <span className='hover-text'>Send us a message</span>
                </button>
            </div>
        </form>
    )
}

export default ContactForm;