import React from 'react';
import { profile } from '../data/profile';
import HeroCanvas from './HeroCanvas';
import styles from './Hero.module.css';
import {
  ArrowDownRight,
  Sparkles,
  Code2,
  FileCode,
  Palette,
  Terminal,
  Cpu,
} from 'lucide-react';

export default function Hero() {
  // Programming & tech stack: HTML, CSS, JS, React, Three.js
  const techStack = [
    { name: 'HTML', icon: <Code2 size={14} /> },
    { name: 'CSS', icon: <Palette size={14} /> },
    { name: 'JS', icon: <Terminal size={14} /> },
    { name: 'React', icon: <FileCode size={14} /> },
    { name: 'Three.js', icon: <Cpu size={14} /> },
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Story, Title, Roles & Tech */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingDot} />
              <span>Multidisciplinary Creative</span>
            </div>

            <h1 className={styles.headline}>
              Osuya Chioma <br />
              <em>Mitchelle</em>
            </h1>

            <p className={styles.tagline}>"{profile.tagline}"</p>

            {/* Quick role tags */}
            <div className={styles.rolesPills}>
              {profile.roles.map((role, idx) => {
                const isTech = role.includes('Software') || role.includes('Content');
                return (
                  <span
                    key={idx}
                    className={`${styles.rolePill} ${isTech ? styles.rolePillTech : ''}`}
                  >
                    {role}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div className={styles.heroActions}>
              <a href="#disciplines" className="btn btn-primary">
                <span>Explore Disciplines</span>
                <ArrowDownRight size={16} />
              </a>
              <a href="#about" className="btn btn-outline">
                <span>Her Journey</span>
              </a>
            </div>

            {/* Programming & Tech Badges: HTML, CSS, JS, React, Three.js */}
            <div className={styles.techSection}>
              <span className={styles.techLabel}>
                Software & Technical Horizons
              </span>
              <div className={styles.techIcons}>
                {techStack.map((item, idx) => (
                  <div key={idx} className={styles.techBadge}>
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 2D Animated Chibi Personas */}
          <div className={styles.heroVisual}>
            <div className={styles.sculptureCard}>
              <div className={styles.sculptureInner}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTag}>Mitchelle's Personas</span>
                  <div className={styles.cardLive}>
                    <Sparkles size={12} color="var(--color-beige)" />
                    <span>Interactive 2D Chibis</span>
                  </div>
                </div>

                {/* Chibi characters container */}
                <div className={styles.canvasWrapper}>
                  <HeroCanvas />
                </div>

                <div className={styles.cardFooter}>
                  <div>
                    <div className={styles.cardQuote}>
                      "Creativity without limits."
                    </div>
                  </div>
                  <span className={styles.cardHint}>Hover Chibis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
