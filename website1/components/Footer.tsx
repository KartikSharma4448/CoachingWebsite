import React from 'react';
import Link from 'next/link';
import { BookOpen, Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8fbdc] pt-20 text-[#111322]">
      <div className="container-max grid gap-12 pb-20 md:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <Link href="/" className="mb-6 flex items-center gap-3">
              <img src="/logo.png" alt="Atharva Classes" className="h-12 w-12 object-contain" />
            <span className="text-3xl font-black">Atharva Classes</span>
          </Link>
          <p className="max-w-sm leading-8 text-slate-600">
            Atharva Classes is a coaching institute in Sector 8, Indira Gandhi Nagar, Jaipur with focused guidance for CBSE and RBSE students.
          </p>
          <div className="mt-7 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded bg-white text-primary shadow-sm" aria-label="Social link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        
        <FooterColumn
          title="Quick Links"
          links={[
            { name: 'Gallery', href: '/gallery' },
            { name: 'Doubt Sessions', href: '/admission' },
            { name: 'Mock Tests', href: '/admission' },
            { name: 'Contact Us', href: '/admission' },
          ]}
        />
        <FooterColumn
          title="Institute info"
          links={[
            { name: 'CBSE Coaching', href: '/admission' },
            { name: 'RBSE Coaching', href: '/admission' },
            { name: 'Weak Student Support', href: '/admission' },
            { name: 'Student Reviews', href: '/admission' },
          ]}
        />

        <div className="space-y-8">
          <div className="flex gap-4">
            <Mail className="mt-1 text-secondary" />
            <div>
              <h3 className="text-xl font-black">Email us</h3>
              <p className="mt-2 text-slate-600">Call: 09928939088</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="mt-1 text-secondary" />
            <div>
              <h3 className="text-xl font-black">Location</h3>
              <p className="mt-2 leading-7 text-slate-600">INDIRA GANDHI NAGAR SECTOR-8, Indira Gandhi Nagar, Ghati Karolan, Jaipur, Rajasthan 302017</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-28 text-center text-sm text-slate-600">© Atharva Classes 2026. All Rights Reserved.</p>
      <div className="grass-border" aria-hidden="true" />
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-7 text-xl font-black">{title}</h3>
      <ul className="space-y-4 text-slate-700">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:text-secondary">{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
