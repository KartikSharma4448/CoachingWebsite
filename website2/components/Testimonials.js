'use client';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: 'Rahul Sharma', role: 'Student', image: '/images/reviewer1.png',
    text: 'Quality of coaching is incredible. The environment between teacher & student is very friendly. There are doubt clearing sessions followed by mock tests. Used to interact with students and discuss issue faced while studying and then find the solutions according to need.' },
  { name: 'Kuldeep Rajawat', role: 'Maths Teacher', image: '/images/reviewer2.png',
    text: 'Very nice Environment for students, Supportive Team & Specially focus on Weak students.(CBSE & RBSE)📚 This is really best Institute situated in Sector 8,Indragandhi Jagatpura. Student can ask their doubt very easily. this is coaching Class Not A Schol' },
  { name: 'Mrs. Anita Gupta', role: 'Parent of Class 10', image: '/images/parent1.png',
    text: 'Atharva Classes has been a wonderful experience for my child. The teachers are caring and the academic results have been outstanding.' },
  { name: 'Mr. Rajiv Mehta', role: 'Parent of Class 8', image: '/images/parent2.png',
    text: 'The institute provides an excellent balance of academics and extracurricular activities. My son has grown tremendously here.' },
  { name: 'Mrs. Kavita Singh', role: 'Parent of Class 5', image: '/images/parent1.png',
    text: 'I am very happy with the discipline, values, and quality education provided by Atharva Classes. Highly recommended for every parent.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-badge">💬 Testimonials</div>
          <h2 className={styles.title}>
            Read & Student&apos;s <span className="script-font" style={{color:'var(--primary)'}}>Parent</span> Reviews
          </h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                   <img src={t.image} alt={t.name} />
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
              <div className={styles.quote}><FaQuoteRight /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
