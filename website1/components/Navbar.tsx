'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, BookOpen, Mail, Menu, Phone, Search, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Courses', id: 'programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Teachers', id: 'teachers' },
    { name: 'Contact', id: 'contact' },
  ].map((item) => {
    if (item.href) return item;
    const href = pathname === '/' ? `#${item.id}` : `/#${item.id}`;
    return { ...item, href };
  });

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-primary text-white">
        <div className="container-max flex min-h-12 flex-wrap items-center justify-between gap-3 py-2 text-sm font-bold">
          <p>CBSE & RBSE coaching classes in Sector 8, Jaipur <span className="underline">Get Details</span></p>
          <div className="flex flex-wrap gap-6">
            <span className="flex items-center gap-2"><Mail size={15} /> Admissions open</span>
            <span className="flex items-center gap-2"><Phone size={15} /> 09928939088</span>
            <span>Indira Gandhi Nagar Sector-8, Jaipur</span>
          </div>
        </div>
      </div>

      <nav className="nav-wave bg-white shadow-sm">
        <div className="container-max flex min-h-24 items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Atharva Classes" className="h-12 w-12 object-contain" />
            <span className="whitespace-nowrap text-2xl font-black text-[#111322] xl:text-3xl">Atharva Classes</span>
          </Link>

          {/* removed unused "Classes" dropdown button */}

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-bold text-slate-700 hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button aria-label="Search" className="icon-button">
              <Search size={21} />
            </button>
            <Link href="/admission" className="orange-button">
              Enquiry Now <ArrowRight size={18} />
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="icon-button lg:hidden" aria-label="Open menu">
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-5 lg:hidden">
            <div className="container-max flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="font-bold text-slate-700" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link href="/admission" className="orange-button justify-center" onClick={() => setIsOpen(false)}>
                Enquiry Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
