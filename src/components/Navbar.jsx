import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'disciplines', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Disciplines', href: '#disciplines', id: 'disciplines' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={styles['nav-wrapper']}>
        <nav className={`${styles['nav-capsule']} ${scrolled ? styles.scrolled : ''}`}>
          {/* Brand Wordmark */}
          <a href="#home" className={styles['nav-brand']}>
            <span className={styles['nav-monogram']}>M</span>
            <div className={styles['nav-brand-text']}>
              <span className={styles['nav-brand-name']}>
                Mitchelle <span>Osuya</span>
              </span>
              <span className={styles['nav-brand-sub']}>Creative & Polymath</span>
            </div>
          </a>

          {/* Desktop Center Links */}
          <div className={styles['desktop-links']}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`${styles['nav-pill-link']} ${isActive ? styles.active : ''}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className={styles['desktop-cta']}>
            <a href="#contact" className={styles['nav-cta-btn']}>
              <span>Collaborate</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={styles['mobile-toggle']}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={styles['mobile-drawer']}>
          <div className={styles['mobile-drawer-header']}>
            <span className={styles['mobile-drawer-title']}>{profile.shortName}</span>
            <span className={styles['mobile-drawer-subtitle']}>
              {profile.roles.length} Creative Disciplines
            </span>
          </div>

          {navLinks.map((link, idx) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`${styles['mobile-nav-link']} ${activeSection === link.id ? styles.active : ''}`}
            >
              <span className={styles['mobile-nav-idx']}>0{idx + 1}.</span>
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '24px' }}
          >
            <span>Collaborate With Mitchelle</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </>
  );
}