'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "88f8eebe-c010-43d4-b338-943c5bfa4fe5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        event.target.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error! Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wavTop}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 640,0 960,50 C1120,75 1280,60 1440,30 L1440,0 L0,0 Z" fill="#FFF8E1"/>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-badge"><FaPhoneAlt /> Get In Touch</div>
          <h2 className={styles.title}>
            Quick Contact <span className="script-font" style={{color:'var(--secondary)'}}>With Us</span>
          </h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}><FaMapMarkerAlt /></span>
              <div>
                <strong>Our Address</strong>
                <p>INDIRA GANDHI NAGAR SECTOR-8, Indira Gandhi Nagar, Ghati Karolan, Jaipur, Rajasthan 302017</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}><FaPhoneAlt /></span>
              <div>
                <strong>Phone Number</strong>
                <p>09928939088</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}><FaEnvelope /></span>
              <div>
                <strong>Email Address</strong>
                <p>info@atharvaclasses.com</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}><FaClock /></span>
              <div>
                <strong>Working Hours</strong>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {isSuccess ? (
              <div className={styles.successMessage}>
                <FaCheckCircle className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-primary">Send Another Message</button>
              </div>
            ) : (
              <>
                <h3>Send Your Message</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <input type="text" name="name" placeholder="Your Name" className={styles.input} required />
                    <input type="email" name="email" placeholder="Your Email" className={styles.input} required />
                  </div>
                  <div className={styles.formRow}>
                    <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} required />
                    <input type="text" name="subject" placeholder="Subject" className={styles.input} required />
                  </div>
                  <textarea name="message" placeholder="Write your message..." className={styles.textarea} rows={5} required></textarea>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message 📤"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.65636757008417!2d75.8886209923417!3d26.842165296235255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7e4a3e9f20d%3A0x938a00ebb88bc7b0!2sATHARVA%20CLASSES!5e0!3m2!1sen!2sin!4v1778828612601!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Atharva Classes Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
