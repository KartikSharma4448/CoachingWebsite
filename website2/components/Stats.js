'use client';
import { useState, useEffect, useRef } from 'react';
import { FaUserGraduate, FaUniversity, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import styles from './Stats.module.css';

const stats = [
  { num: 563, suffix: '+', label: 'Students Enrolled', icon: <FaUserGraduate />, color: '#FF6B35' },
  { num: 6539, suffix: '+', label: 'Passed Students', icon: <FaUniversity />, color: '#4A90D9' },
  { num: 34, suffix: '+', label: 'Expert Teachers', icon: <FaChalkboardTeacher />, color: '#4CAF50' },
  { num: 6632, suffix: '+', label: 'Happy Parents', icon: <FaUsers />, color: '#7B61FF' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.wavTop}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 640,0 960,50 C1120,75 1280,60 1440,30 L1440,0 L0,0 Z" fill="#FAF5EE"/>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.icon}>{s.icon}</span>
              <div className={styles.num} style={{color: s.color}}>
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <p className={styles.label}>{s.label}</p>
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
