'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './gallery.module.css';
import { FaCalendarAlt, FaCamera } from 'react-icons/fa';

const galleryImages = [
  { src: '/images/sports.png', title: 'Annual Sports Day', date: 'March 2025', tag: 'Sports' },
  { src: '/images/classroom.png', title: 'Creative Classroom', date: 'Feb 2025', tag: 'Academic' },
  { src: '/images/lab.png', title: 'Science Laboratory', date: 'Jan 2025', tag: 'Science' },
  { src: '/images/library.png', title: 'School Library', date: 'Jan 2025', tag: 'Library' },
  { src: '/images/event.png', title: 'Cultural Program', date: 'Dec 2024', tag: 'Events' },
  { src: '/images/hero.png', title: 'Campus View', date: 'Nov 2024', tag: 'Campus' },
];

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1><FaCamera /> Our School Gallery</h1>
          <p>Exploring the vibrant life and memories at Atharva Classes.</p>
        </div>
      </section>

      <section className={styles.galleryGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {galleryImages.map((img, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img src={img.src} alt={img.title} />
                  <span className={styles.tag}>{img.tag}</span>
                </div>
                <div className={styles.content}>
                  <span className={styles.date}><FaCalendarAlt /> {img.date}</span>
                  <h3>{img.title}</h3>
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
