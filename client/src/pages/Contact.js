import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import fbImg from '../assets/facebook.png';
import twitImg from '../assets/twitter.png';
import instaImg from '../assets/instagram.png';
import linkImg from '../assets/linkedIn.png';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <div className="manyForms">

        <h2>Contact Us</h2>
        <form id="contact-form" onSubmit={handleSubmit}>

        <div className="pt-3">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Your Name:"
            name="Name"
            type="text"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
      
        <div className="pt-3">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@email.com"
            name="email"
            type="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>

        <div className="pt-3">
          <label htmlFor="message">Message:</label>
          <input
            placeholder="Your Message Here:"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>

        <div className="pt-3">
          <button type="submit">Submit</button>
        </div>

        </form>

      </div>

      <div className='social'>

          <a className='socialMedia' href="https://www.facebook.com/Petco">
            <img src={fbImg} alt="Facebook icon" />
          </a>

          <a className='socialMedia' href="https://twitter.com/Petco">
            <img src={twitImg} alt="Twitter icon" />
          </a>

          <a className='socialMedia' href="https://www.instagram.com/petco/">
            <img src={instaImg} alt="Instagram icon" />
          </a>

          <a className='socialMedia' href="https://www.linkedin.com/company/petco-animal-supplies-inc-/">
            <img src={linkImg} alt="LinkedIn icon" />
          </a>

      </div>

    </div>
   
  );
}

export default ContactForm;