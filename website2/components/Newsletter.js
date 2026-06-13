'use client';
import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "88f8eebe-c010-43d4-b338-943c5bfa4fe5");
    formData.append("subject", "New Newsletter Subscription");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        event.target.reset();
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge}>Subscribe Now</div>
            {isSuccess ? (
              <div className={styles.success}>
                <FaCheckCircle />
                <h3>Successfully Subscribed!</h3>
              </div>
            ) : (
              <>
                <h2 className={styles.title}>Sign up for our newsletter</h2>
                <p className={styles.desc}>Keep up to date with the latest news and school events.</p>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Enter your email address" className={styles.input} required />
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? "..." : "Subscribe Now →"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          
          <div className={styles.decoration}>
             <div className={styles.planeIcon}>
                <FaPaperPlane />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
