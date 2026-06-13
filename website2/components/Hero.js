'use client';
import { FaGraduationCap, FaStar, FaBook, FaTrophy } from 'react-icons/fa';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Elements */}
      <div className={`${styles.decoStar} ${styles.deco1}`}><FaStar /></div>
      <div className={`${styles.decoStar} ${styles.deco2}`}><FaStar /></div>
      <div className={`${styles.decoDot} ${styles.deco3}`}></div>
      <div className={`${styles.decoDot} ${styles.deco4}`}></div>
      <div className={`${styles.decoShape} ${styles.deco5}`}>
        <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(255,210,63,0.2)"/></svg>
      </div>
      <div className={`${styles.decoShape} ${styles.deco6}`}>
        <svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="rgba(74,144,217,0.15)"/></svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}><FaGraduationCap /></span>
              <span>CBSE Affiliated School</span>
            </div>
            <h1 className={styles.title}>
              Welcome to <br/>
              <span className={styles.highlight}>Atharva Classes</span>
              <span>Coaching Institute, Jaipur</span>
            </h1>
            <p className={styles.subtitle}>
              Knowledge • Truth • Wisdom. <br/>
              A Premier Co-educational English Medium School in Jagatpura, Jaipur. 
              Nurturing students with "Nature by Value" from PG to 12th Grade.
            </p>
            <div className={styles.buttons}>
              <a href="/register" className="btn btn-primary">
                Admission Open 🎯
              </a>
              <a href="#about" className="btn btn-outline">
                Discover More →
              </a>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>25+</span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>5000+</span>
                <span className={styles.statLabel}>Happy Students</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Result Rate</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBg}></div>
              <div className={styles.imageMain}>
                <img src="/images/hero.png" alt="Atharva Classes Students" className={styles.heroImg} />
              </div>
              {/* Floating Cards */}
              <div className={`${styles.floatingCard} ${styles.fc1}`}>
                <span className={styles.fcIcon}><FaBook /></span>
                <div>
                  <strong>38+</strong>
                  <small>Years Experience</small>
                </div>
              </div>
              <div className={`${styles.floatingCard} ${styles.fc2}`}>
                <span className={styles.fcEmoji}><FaTrophy /></span>
                <div>
                  <strong>Top Ranked</strong>
                  <small>In District</small>
                </div>
              </div>
              <div className={`${styles.admissionBadge}`}>
                <div className={styles.admInner}>
                  <span>ADMISSION</span>
                  <strong>OPEN</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}
