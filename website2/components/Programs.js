'use client';
import { FaChild, FaPencilAlt, FaGraduationCap, FaAward } from 'react-icons/fa';
import styles from './Programs.module.css';

const programs = [
  { icon: <FaChild />, title: 'Nursery', age: 'Age 3-4', color: '#FF6B35', bg: '#FFF3E0',
    desc: 'A warm start to learning through play, creativity, and social skills development.' },
  { icon: <FaPencilAlt />, title: 'Primary School', age: 'Age 5-10', color: '#4A90D9', bg: '#E3F2FD',
    desc: 'Building strong foundations in literacy, numeracy, and critical thinking.' },
  { icon: <FaGraduationCap />, title: 'Middle School', age: 'Age 11-13', color: '#4CAF50', bg: '#E8F5E9',
    desc: 'Advanced academics with focus on science, mathematics, and language skills.' },
  { icon: <FaAward />, title: 'Senior Secondary', age: 'Age 14-17', color: '#7B61FF', bg: '#EDE7F6',
    desc: 'CBSE board preparation with specialized streams - Science, Commerce & Arts.' },
];

export default function Programs() {
  return (
    <section id="programs" className={styles.programs}>
      <div className={styles.wavTop}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 640,0 960,50 C1120,75 1280,60 1440,30 L1440,0 L0,0 Z" fill="#ffffff"/>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-badge">📚 Our Programs</div>
          <h2 className={styles.title}>
            Programs We <span className="script-font" style={{color:'var(--secondary)'}}>Offer</span>
          </h2>
          <p className={styles.desc}>
            Comprehensive education from nursery to senior secondary, designed to nurture every child's unique potential.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((p, i) => (
            <div key={i} className={styles.card} style={{'--card-color': p.color, '--card-bg': p.bg}}>
              <div className={styles.cardIcon}>
                {p.icon}
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <span className={styles.cardAge}>{p.age}</span>
              <p className={styles.cardDesc}>{p.desc}</p>
              <a href="/register" className={styles.cardLink}>Learn More →</a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.wavBottom}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,100 L0,100 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}
