import React from 'react';
import { profile } from '../data/profile';
import styles from './Footer.module.css';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          {/* Top Section: Wordmark, Nav & Scroll-to-Top */}
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.footerName}>
                Mitchelle <span>Osuya</span>
              </span>
              <span className={styles.footerTagline}>
                "{profile.tagline}"
              </span>
            </div>

            <nav className={styles.footerNav}>
              <a href="#home" className={styles.footerNavLink}>Home</a>
              <a href="#about" className={styles.footerNavLink}>About</a>
              <a href="#disciplines" className={styles.footerNavLink}>Disciplines</a>
              <a href="#contact" className={styles.footerNavLink}>Contact</a>

              <button
                type="button"
                onClick={scrollToTop}
                className={styles.scrollTopBtn}
                aria-label="Scroll back to top"
                title="Scroll back to top"
              >
                <ArrowUp size={16} />
              </button>
            </nav>
          </div>

          <div className={styles.footerDivider} />

          {/* Bottom Section: Copyright & Polymath Summary */}
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              &copy; {new Date().getFullYear()} <span>{profile.name}</span>. All rights reserved.
            </div>

            <div className={styles.rolesSummary}>
              <span>Model</span>
              <span>•</span>
              <span>Creator</span>
              <span>•</span>
              <span>Writer</span>
              <span>•</span>
              <span>Upcoming Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
