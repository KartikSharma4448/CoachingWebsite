'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './register.module.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaChild, FaCheckCircle } from 'react-icons/fa';

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    // Note: User needs to replace 'YOUR_ACCESS_KEY_HERE' with their actual key from web3forms.com
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
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.registerSection}>
        <div className={styles.bgDecor}></div>
        
        <div className={styles.container}>
          <div className={styles.card}>
            {isSuccess ? (
              <div className={styles.successMessage}>
                <FaCheckCircle className={styles.successIcon} />
                <h2>Registration Successful!</h2>
                <p>Thank you for choosing Atharva Classes. Our admission cell will contact you within 24 hours on the provided number.</p>
                <button onClick={() => setIsSuccess(false)} className="btn btn-primary">Register Another Student</button>
              </div>
            ) : (
              <>
                <div className={styles.header}>
                  <span className={styles.badge}>Admission 2025-26</span>
                  <h1>Student Registration</h1>
                  <p>Join the Atharva Classes family today! Please fill out the form below to initiate the admission process.</p>
                </div>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label><FaChild /> Student Full Name</label>
                      <input type="text" name="student_name" placeholder="Enter student name" required />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label><FaUser /> Parent/Guardian Name</label>
                      <input type="text" name="parent_name" placeholder="Enter parent name" required />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label><FaEnvelope /> Email Address</label>
                      <input type="email" name="email" placeholder="example@mail.com" required />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label><FaPhone /> Phone Number</label>
                      <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label><FaGraduationCap /> Admission Sought For Class</label>
                      <select name="class_applied" required>
                        <option value="">Select Class</option>
                        <option value="PG">PG</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Primary">Primary (1-5)</option>
                        <option value="Middle">Middle (6-8)</option>
                        <option value="Secondary">Secondary (9-10)</option>
                        <option value="Senior Secondary">Senior Secondary (11-12)</option>
                      </select>
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label><FaMapMarkerAlt /> Residential Address</label>
                      <textarea name="address" placeholder="Enter your full address" rows={3} required></textarea>
                    </div>
                  </div>
                  
                  <div className={styles.footer}>
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? "Connecting..." : "Connect With Us & Register →"}
                    </button>
                    <p className={styles.note}>
                      By clicking register, you agree to our terms and will receive a call from our admission cell within 24 hours.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
