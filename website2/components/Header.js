'use client';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Programs', href: '/#programs' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Teachers', href: '/#teachers' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topLeft}>
            <span><FaPhoneAlt /> 09928939088</span>
          </div>
          <div className={styles.topRight}>
            <span><FaClock /> Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <img src="/images/logo.png" alt="Atharva Classes Logo" />
            </div>
            <div className={styles.logoText}>
              <h1>Atharva Classes</h1>
              <p>Coaching Institute, Jaipur</p>
            </div>
          </a>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="/register" className={`btn btn-primary ${styles.navBtn}`} onClick={() => setMenuOpen(false)}>
              Admission Open →
            </a>
          </nav>

          <div className={styles.headerRight}>
            <a href="/register" className={`btn btn-primary ${styles.desktopBtn}`}>
              Admission Open →
            </a>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
