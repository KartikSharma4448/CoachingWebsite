'use client';
import { FaCheckCircle, FaUniversity } from 'react-icons/fa';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.imageGrid}>
              <div className={`${styles.imgCard} ${styles.img1}`}>
                <img src="/images/library.png" alt="Learning" />
                <p>Learning Together</p>
              </div>
              <div className={`${styles.imgCard} ${styles.img2}`}>
                <img src="/images/classroom.png" alt="Arts" />
                <p>Creative Arts</p>
              </div>
              <div className={`${styles.imgCard} ${styles.img3}`}>
                <img src="/images/lab.png" alt="Science" />
                <p>Science Lab</p>
              </div>
            </div>
            <div className={styles.expBadge}>
              <span className={styles.expNum}>38+</span>
              <span className={styles.expText}>Years of<br/>Excellence</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className="section-badge"><FaUniversity /> About Our School</div>
            <h2 className={styles.title}>
              Safe, <span className="script-font" style={{color:'var(--primary)'}}>Fun</span> & Education Guaranteed
            </h2>
            <p className={styles.desc}>
              Atharva Classes has been a beacon of focused coaching and student success in Jaipur.
              Guided by our motto "Knowledge, Truth, Wisdom", we ensure every child receives 
              personalized attention and holistic development.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}><FaCheckCircle /></span>
                <span>Expert & Certified Teachers</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}><FaCheckCircle /></span>
                <span>Modern Smart Classrooms</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}><FaCheckCircle /></span>
                <span>Safe & Secure Campus</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}><FaCheckCircle /></span>
                <span>Holistic Development Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
