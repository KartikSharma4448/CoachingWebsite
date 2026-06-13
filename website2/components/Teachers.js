'use client';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaUserGraduate } from 'react-icons/fa';
import styles from './Teachers.module.css';

const teachers = [
  { name: 'Mrs. Pratima Jaiman', role: 'Director', image: '/images/principal.png', color: '#FF6B35' },
  { name: 'Dr. Rajesh Sharma', role: 'Principal', image: '/images/teacher_male.png', color: '#4A90D9' },
  { name: 'Mrs. Priya Verma', role: 'Vice Principal', image: '/images/teacher_female.png', color: '#4CAF50' },
  { name: 'Mr. Amit Kumar', role: 'Academic Dean', image: '/images/teacher_male.png', color: '#7B61FF' },
];

export default function Teachers() {
  return (
    <section id="teachers" className={styles.teachers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className="section-badge"><FaUserGraduate /> Our Teachers</div>
            <h2 className={styles.title}>
              Meet Our <span className="script-font" style={{color:'var(--primary)'}}>Expert</span> Educators
            </h2>
          </div>
          <div className={styles.headerRight}>
            <a href="/teachers" className="btn btn-primary">
              View All Faculty →
            </a>
          </div>
        </div>
        <p className={styles.desc}>Our dedicated team of professionals committed to excellence.</p>
        <div className={styles.grid}>
          {teachers.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={t.image} alt={t.name} className={styles.teacherImg} />
                <div className={styles.cardOverlay}>
                  <span><FaFacebookF /></span>
                  <span><FaTwitter /></span>
                  <span><FaLinkedinIn /></span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3>{t.name}</h3>
                <p style={{color: t.color}}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
