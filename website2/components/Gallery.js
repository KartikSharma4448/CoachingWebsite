'use client';
import { FaCameraRetro, FaCalendarAlt } from 'react-icons/fa';
import styles from './Gallery.module.css';

const events = [
  { emoji: '🎭', title: 'Annual Day Celebration', date: '15th March 2025', tag: 'Cultural', color: '#FF6B35' },
  { emoji: '🌱', title: 'Nature Walk & Garden Activity', date: '22nd Feb 2025', tag: 'Activity', color: '#4CAF50' },
  { emoji: '🎨', title: 'Art & Craft Exhibition', date: '10th Jan 2025', tag: 'Creative', color: '#7B61FF' },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className="section-badge"><FaCameraRetro /> School Gallery</div>
            <h2 className={styles.title}>
              Our Latest <span className="script-font" style={{color:'var(--primary)'}}>Events</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <a href="/gallery" className="btn btn-primary">
              View All Photos →
            </a>
          </div>
        </div>
        <p className={styles.desc}>Glimpses of our vibrant school life and memorable events.</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="/images/sports.png" alt="Sports Day" />
              <span className={styles.cardTag} style={{background: '#FF6B35'}}>Sports</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardDate}><FaCalendarAlt /> 15th March 2025</span>
              <h3 className={styles.cardTitle}>Annual Sports Meet</h3>
              <a href="/register" className={styles.cardLink} style={{color: '#FF6B35'}}>View Details →</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="/images/classroom.png" alt="Exhibition" />
              <span className={styles.cardTag} style={{background: '#4CAF50'}}>Creative</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardDate}>📅 22nd Feb 2025</span>
              <h3 className={styles.cardTitle}>Art & Craft Exhibition</h3>
              <a href="#" className={styles.cardLink} style={{color: '#4CAF50'}}>View Details →</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="/images/lab.png" alt="Science Day" />
              <span className={styles.cardTag} style={{background: '#7B61FF'}}>Science</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardDate}>📅 10th Jan 2025</span>
              <h3 className={styles.cardTitle}>Science Fair 2025</h3>
              <a href="#" className={styles.cardLink} style={{color: '#7B61FF'}}>View Details →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
