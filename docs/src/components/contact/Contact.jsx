import React, { useRef } from 'react';
import './contact.css'
import {AiFillMail} from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o57jxfo', 'template_cy2ev97', form.current, 'lw9J3qUQOzftuw87l')
        
        e.target.reset()
    };

    return (

        <section id="contact">
        <h5> Get In Touch </h5>
        <h2> Contact Me </h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                <AiFillMail className="contact__option-icon"/>
                <h4> Email </h4>
                <h5> lam_brandon@outlook.com </h5>
                <a href="mailto:lam_brandon@outlook.com">Send me an email! </a>
                </article>
                <article className="contact__option">
                <AiFillPhone className="contact__option-icon"/>
                <h4> Phone (Text Preferred) </h4>
                <h5><a href="tel:+1 (503)-277-9140"> +1 (503)-277-9140 </a></h5>
                </article>
                <article className="contact__option">
                <AiFillLinkedin className="contact__option-icon"/>
                <h4> LinkedIn </h4>
                <h5><a href="https://www.linkedin.com/in/brandon-lam-034a74198/"> Connect with me on LinkedIn! </a></h5>
                </article>
                </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Name Here' required/>
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Message Here' required> </textarea>
                <button type='submit' className='btn btn-primary'> Send Message </button>
            </form>
        </div>
        </section>
    )
}

export default Contact