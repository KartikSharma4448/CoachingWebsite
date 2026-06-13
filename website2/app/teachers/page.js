'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './teachers.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaUserGraduate } from 'react-icons/fa';

const allTeachers = [
  { name: 'Mrs. Pratima Jaiman', role: 'Director', image: '/images/principal.png', color: '#FF6B35' },
  { name: 'Dr. Rajesh Sharma', role: 'Principal', image: '/images/teacher_male.png', color: '#4A90D9' },
  { name: 'Mrs. Priya Verma', role: 'Vice Principal', image: '/images/teacher_female.png', color: '#4CAF50' },
  { name: 'Mr. Amit Kumar', role: 'Academic Dean', image: '/images/teacher_male.png', color: '#7B61FF' },
  { name: 'Ms. Anjali Singh', role: 'Senior Coordinator', image: '/images/teacher_female.png', color: '#FF6B9D' },
  { name: 'Mr. Vikram Rathore', role: 'Sports Head', image: '/images/teacher_male.png', color: '#FFD23F' },
  { name: 'Mrs. Meena Gupta', role: 'Head of Arts', image: '/images/teacher_female.png', color: '#4CAF50' },
  { name: 'Mr. Rahul Jain', role: 'IT Specialist', image: '/images/teacher_male.png', color: '#4A90D9' },
];

export default function TeachersPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1><FaUserGraduate /> Our Expert Educators</h1>
          <p>Meet the dedicated team shaping the future of our students at Atharva Classes.</p>
        </div>
      </section>

      <section className={styles.teachersGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {allTeachers.map((t, index) => (
              <div key={index} className={styles.card} style={{ '--accent': t.color }}>
                <div className={styles.imgContainer}>
                  <img src={t.image} alt={t.name} />
                  <div className={styles.socials}>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
