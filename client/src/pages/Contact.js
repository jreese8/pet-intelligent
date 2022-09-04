import React from 'react';
import fbImg from '../assets/facebook.png';
import twitImg from '../assets/twitter.png';
import instaImg from '../assets/instagram.png';
import linkImg from '../assets/linkedIn.png';

function ContactForm() {
  return (
    <div>
      <div class="manyForms">
          <h1>Contact Us</h1>
  
          <form target="_blank" action="https://formsubmit.co/905dfbcbc473117283581859ec676ab6" method="POST">

                <div className="pt-3">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>
        
                <div className="pt-3">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                </div>

            <div className="pt-3">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
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