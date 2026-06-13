'use client';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Wave Top */}
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 640,0 960,50 C1120,75 1280,60 1440,30 L1440,0 L0,0 Z" fill="#FF6B35"/>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coaching Info */}
          <div className={styles.schoolInfo}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <img src="/images/logo.png" alt="Atharva Classes Logo" />
              </div>
              <div className={styles.logoText}>
                <h3>Atharva Classes</h3>
                <p>Coaching Institute, Jaipur</p>
              </div>
            </div>
            <p className={styles.description}>
              Atharva Classes provides focused coaching for CBSE & RBSE students with personalized
              doubt-clearing sessions and regular mock tests to boost performance.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
              <a href="#" className={styles.socialIcon}><FaTwitter /></a>
              <a href="#" className={styles.socialIcon}><FaYoutube /></a>
              <a href="#" className={styles.socialIcon}><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#teachers">Teachers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className={styles.linksColumn}>
            <h4>Company info</h4>
            <ul>
              <li><a href="#">Our Support</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Knowledge base</a></li>
              <li><a href="#">Blog & News</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.icon}><FaPhoneAlt /></span>
              <div>
                <p className={styles.label}>Call us</p>
                <p className={styles.value}>09928939088</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}><FaMapMarkerAlt /></span>
              <div>
                <p className={styles.label}>Location</p>
                <p className={styles.value}>INDIRA GANDHI NAGAR SECTOR-8, Indira Gandhi Nagar, Ghati Karolan, Jaipur, Rajasthan 302017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Atharva Classes. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
