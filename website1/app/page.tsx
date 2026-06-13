import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
  User,
  Users,
} from 'lucide-react';

const heroImage =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85';
const aboutImage =
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=650&q=85';
const chooseImage =
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=650&q=85';

const programs = [
  ['Foundation', 'Class 6 - 8', 'Maths, Science, English', 'bg-[#f6fadf]'],
  ['CBSE Batch', 'Class 9 - 10', 'Concepts, tests, revision', 'bg-[#ffe3e8]'],
  ['RBSE Batch', 'Class 9 - 12', 'Board-focused preparation', 'bg-[#e4e8ff]'],
  ['Doubt Support', 'All classes', 'Weak student focus', 'bg-[#d9fbf2]'],
];

const classes = [
  {
    title: 'Smart Study Planning Batch',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=85',
  },
  {
    title: 'Board Exam Revision Program',
    image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=600&q=85',
    featured: true,
  },
  {
    title: 'Mock Test And Doubt Class',
    image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=600&q=85',
  },
];

const teachers = [
  ['Kuldeep Rajawat', 'Mathematics Mentor', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85'],
  ['Anjali Sharma', 'Science Mentor', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85'],
  ['Rahul Verma', 'English Mentor', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85'],
];

const news = [
  ['How Doubt Clearing Builds Strong Concepts', 'Learning', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=85'],
  ['How To Prepare For Board Exams', 'Education', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=85'],
  ['Why Mock Tests Improve Exam Confidence', 'Tests', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=85'],
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Student Review',
    text: 'Quality of coaching is incredible. The environment between teacher and student is very friendly. There are doubt clearing sessions followed by mock tests. Teachers interact with students, discuss issues faced while studying, and find solutions according to need.',
  },
  {
    name: 'Kuldeep Rajawat Maths',
    role: 'Student Review',
    text: 'Very nice environment for students, supportive team, and special focus on weak students for CBSE and RBSE. This is really the best institute situated in Sector 8, Indira Gandhi Nagar, Jagatpura. Students can ask their doubts very easily.',
  },
  {
    name: 'Atharva Student Feedback',
    role: 'Student Review',
    text: 'The institute keeps classes focused, friendly, and disciplined with regular practice, mock tests, and personal attention for students who need extra support.',
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="pill-label">{children}</span>;
}

function Scribble() {
  return <span className="scribble" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <section id="home" className="hero-section">
        <div className="container-max grid min-h-[670px] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="floating-doodle left-[-44px] top-[-40px]">A+</div>
            <h1 className="mb-7 text-[44px] font-black leading-[1.08] text-[#111322] sm:text-6xl lg:text-[68px]">
              Focused Coaching Classes for CBSE & RBSE Students
            </h1>
            <p className="mb-9 max-w-lg text-base leading-8 text-slate-600">
              Atharva Coaching Classes in Sector 8, Jaipur helps students build strong concepts, clear doubts, and prepare confidently through regular practice and mock tests.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/admission" className="orange-button">
                Admission Enquiry <ArrowRight size={18} />
              </Link>
              <a href="tel:09928939088" className="flex items-center gap-3 font-black text-slate-700">
                <span className="grid h-14 w-14 place-items-center rounded-full border-[6px] border-white bg-primary text-white shadow-lg">
                  <Phone size={22} />
                </span>
                09928939088
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute inset-x-4 bottom-0 top-4 overflow-hidden rounded-[46%_46%_0_0]">
              <img src={heroImage} alt="Smiling students ready for class" className="h-full w-full object-cover object-center" />
            </div>
            <div className="absolute bottom-16 left-8 rounded-tl-2xl rounded-tr-2xl bg-primary px-7 py-3 text-center text-3xl font-black uppercase leading-none text-white shadow-xl">
              <span className="block rounded-full bg-secondary px-5 py-1 text-sm">Coaching</span>
              Admissions
              <span className="mt-1 block rounded-full bg-[#17358f] px-6 py-2 text-2xl">Open</span>
            </div>
            <div className="floating-doodle right-8 top-16">Crown</div>
            <div className="absolute bottom-6 right-2 h-16 w-16 rounded-full border-[14px] border-secondary bg-white" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-6 rounded-[38%_48%_32%_42%] bg-[#ffb52e]" />
            <img src={aboutImage} alt="Student carrying a study bag" className="relative h-[520px] w-full rounded-[34%_44%_28%_38%] object-cover" />
            <div className="absolute bottom-4 right-0 grid h-36 w-36 place-items-center rounded-full border-[8px] border-white bg-[#1d2b9f] text-center text-white shadow-xl">
              <span className="text-5xl font-black">38+</span>
              <span className="-mt-7 text-sm font-semibold">Experience</span>
            </div>
          </div>
          <div>
            <Badge>About Us</Badge>
            <h2 className="heading-xl mt-5">
              Friendly, Focused & Result-Oriented Coaching
              <Scribble />
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-slate-600">
              Our classrooms mix disciplined coaching with friendly teacher support, regular tests, doubt solving, and focused attention for weak students.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {['CBSE & RBSE Focus', 'Regular Mock Tests', 'Doubt Clearing', 'Weak Student Support'].map((item) => (
                <span key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary" /> {item}
                </span>
              ))}
            </div>
            <Link href="/admission" className="orange-button mt-10 inline-flex">
              Admission Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="programs" className="pb-24">
        <div className="container-max grid gap-7 md:grid-cols-4">
          {programs.map(([title, age, text, color]) => (
            <article key={title} className={`program-card ${color}`}>
              <BookOpen className="mx-auto mb-7 text-primary" size={48} />
              <h3 className="text-2xl font-black text-[#121323]">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{age}</p>
              <p className="mt-6 leading-7 text-slate-600">{text}</p>
              <Link href="/admission" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-secondary">
                Learn More <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="purple-wave section-pad text-white">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Our Classes</Badge>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Focused Coaching Programs - with Practice & Doubt Support
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {classes.map((item) => (
              <article key={item.title} className={`class-card ${item.featured ? 'bg-[#fff51d] text-[#111322]' : 'bg-white text-[#111322]'}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img src={item.image} alt="" className="h-52 w-full object-cover" />
                  <span className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-white">
                    <Calendar size={15} /> Jan 16, 2026
                  </span>
                </div>
                <p className="mt-6 text-sm text-slate-600">Sector 8, Indira Gandhi Nagar, Jaipur</p>
                <h3 className="mt-4 text-2xl font-black leading-snug">{item.title}</h3>
                <div className="mt-8 flex items-center justify-between border-t border-dashed border-secondary pt-6">
                  <Link href="/admission" className="outline-button">
                    Get Ticket <ArrowRight size={15} />
                  </Link>
                  <div className="flex items-center gap-1 text-secondary">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={17} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img src={chooseImage} alt="Students learning with a teacher" className="h-[560px] w-full rounded-xl object-cover" />
            <div className="absolute -bottom-8 right-8 h-48 w-48 rounded-2xl bg-[#ffa776]" />
          </div>
          <div className="relative z-10">
            <Badge>Why Choose Us</Badge>
            <h2 className="heading-xl mt-5 text-slate-400">
              Where Every Concept Gets Clear
              <Scribble />
            </h2>
            <p className="mt-7 leading-8 text-slate-600">
              Students move from basics to mastery through clear lesson plans, practice sheets, doubt sessions, quick feedback, and motivating mentors.
            </p>
            <div className="mt-9 flex gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-[#ffe8dd] text-secondary">
                <GraduationCap size={42} />
              </div>
              <div>
                <h3 className="text-xl font-black">Doubt Clearing</h3>
                <p className="mt-2 leading-7 text-slate-600">A strong academic foundation where every student can ask questions, practice, and improve.</p>
              </div>
            </div>
            <div className="mt-8 space-y-5">
              <Progress label="Creativity" value="90%" />
              <Progress label="Experiences" value="70%" purple />
            </div>
            <Link href="/admission" className="orange-button mt-10 inline-flex">
              Start Your Preparation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="teachers" className="pb-20">
        <div className="container-max">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <Badge>Our Teacher</Badge>
              <h2 className="heading-xl mt-5 text-slate-400">
                Meet With Our Teacher
                <Scribble />
              </h2>
            </div>
            <p className="max-w-xl self-end leading-8 text-slate-600">
              Friendly mentors with subject expertise and a practical approach to doubts, revision, weak student support, and exam readiness.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {teachers.map(([name, role, image]) => (
              <article key={name} className="text-center">
                <div className="teacher-photo">
                  <img src={image} alt={name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-8 text-xl font-black">{name}</h3>
                <p className="mt-1 text-slate-500">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container-max grid gap-8 py-20 text-center text-white md:grid-cols-4">
          {[
            [Users, '563+', 'Expert Instructors'],
            [BookOpen, '6,539+', 'Doubts Solved'],
            [Trophy, '34+', 'Mock Tests'],
            [GraduationCap, '6,632+', 'Students Enroll'],
          ].map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof Users;
            return (
              <div key={String(label)} className="stat-item">
                <StatIcon className="mx-auto mb-5" size={48} />
                <p className="text-5xl font-black">{String(value)}</p>
                <p className="mt-2 font-bold">{String(label)}</p>
              </div>
            );
          })}
        </div>
        <div className="container-max -mb-20">
          <div className="schedule-box">
            <div>
              <Badge>Session Times</Badge>
              <p className="mt-10 max-w-sm leading-8 text-slate-700">Small batches, steady practice, and focused attention for every learner.</p>
            </div>
            <div className="space-y-4">
              {[
                ['Morning Batch', '8.00am - 10.00am'],
                ['CBSE / RBSE Batch', '10.30am - 12.00pm'],
                ['Doubt Session', '4.00pm - 5.00pm'],
                ['Evening Batch', '5.00pm - 7.00pm'],
              ].map(([label, time]) => (
                <div key={label} className="time-row">
                  <span>{label}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-40">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Our Testimonials</Badge>
            <h2 className="heading-xl mt-5 text-slate-400">
              Read Student Reviews
              <Scribble />
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="testimonial-card">
                <div className="mb-5 flex text-secondary">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg font-semibold leading-8 text-slate-600">
                  "{review.text}"
                </p>
                <div className="mt-8 border-t border-dashed border-secondary pt-6">
                  <h3 className="font-black">{review.name}</h3>
                  <p className="text-slate-500">{review.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-band">
        <div className="cloud-top" />
        <div className="container-max grid gap-14 py-24 text-white lg:grid-cols-[0.65fr_1fr]">
          <div>
            <Badge>Quick Contact</Badge>
            <h2 className="mt-5 text-5xl font-black">Quick Contact With Us</h2>
            <div className="mt-10 space-y-9">
              <Contact icon={<Phone />} title="Contact us:" text="09928939088" />
              <Contact icon={<MapPin />} title="Our Location:" text="INDIRA GANDHI NAGAR SECTOR-8, Indira Gandhi Nagar,\nGhati Karolan, Jaipur, Rajasthan 302017" />
              <Contact icon={<Clock />} title="Working Time:" text="Mon - Fri: 8.00am - 6.00pm\nSunday: Closed" />
            </div>
          </div>
          <form className="self-end">
            <h3 className="mb-6 text-2xl font-black">Send Your Message</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="form-input" placeholder="Your Name" />
              <input className="form-input" placeholder="Email Address" />
              <input className="form-input" placeholder="Phone Number" />
              <input className="form-input" placeholder="Subject" />
              <textarea className="form-input min-h-[180px] sm:col-span-2" placeholder="Your Message..." />
            </div>
            <button className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#ffea00] px-8 py-4 font-black text-[#111322]">
              Send Your Message <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Our Blog & News</Badge>
            <h2 className="heading-xl mt-5 text-slate-400">
              Read Our Latest News
              <Scribble />
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {news.map(([title, tag, image]) => (
              <article key={title} className="news-card">
                <img src={image} alt="" className="h-64 w-full object-cover" />
                <div className="p-7">
                  <span className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white">{tag}</span>
                  <h3 className="mt-5 text-2xl font-black leading-snug">{title}</h3>
                  <p className="mt-5 leading-7 text-slate-600">Useful coaching updates, exam tips, and practical study guidance for students.</p>
                  <div className="mt-7 flex gap-7 border-t border-dashed border-secondary pt-5 text-sm text-slate-500">
                    <span className="flex items-center gap-2"><User size={16} /> Atharva Classes</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> 12 June, 2026</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 text-center">
        <div className="container-max">
          <Badge>Subscribe Now</Badge>
          <h2 className="heading-xl mx-auto mt-5 max-w-2xl text-slate-400">
            Sign up for our newsletter
            <Scribble />
          </h2>
          <p className="mt-5 text-slate-600">Keep up to date with the latest news and offers</p>
          <form className="mx-auto mt-9 flex max-w-3xl flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input className="h-16 w-full rounded-xl border border-slate-200 px-7 outline-none" placeholder="Enter your email address" />
            </div>
            <button className="orange-button justify-center">
              Subscribe Now <ArrowRight size={18} />
            </button>
          </form>
          <div className="kids-line" aria-hidden="true">
            <span>o</span><span>o</span><span>o</span><span>o</span><span>o</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function Progress({ label, value, purple = false }: { label: string; value: string; purple?: boolean }) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-semibold text-slate-700">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-3 rounded-full border border-dashed border-slate-300 p-[2px]">
        <div className={`h-full rounded-full ${purple ? 'bg-primary' : 'bg-secondary'}`} style={{ width: value }} />
      </div>
    </div>
  );
}

function Contact({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ffea00] text-[#ffea00]">{icon}</span>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-2 whitespace-pre-line font-semibold leading-7">{text}</p>
      </div>
    </div>
  );
}
