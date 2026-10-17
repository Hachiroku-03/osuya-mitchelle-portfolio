import React from 'react';
import { profile } from '../data/profile';
import styles from './About.module.css';
import { Compass, Sparkles, Feather, Code, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      name: 'Storytelling & Character',
      sub: 'Acting, Writing, and High-Fashion Modeling',
      icon: <Feather size={16} />,
    },
    {
      name: 'Audience Strategy & Growth',
      sub: 'Content Creation and Social Media Management',
      icon: <Sparkles size={16} />,
    },
    {
      name: 'Technology & Continuous Learning',
      sub: 'Upcoming Software Engineering & Digital Solutions',
      icon: <Code size={16} />,
    },
    {
      name: 'Culinary & Client Consultation',
      sub: 'Culinary Arts, Real Estate, and Mentorship',
      icon: <Award size={16} />,
    },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column: Narrative & Story */}
          <div className={styles.narrativeCol}>
            <span className="section-tag">The Narrative</span>
            <h2 className="section-title">
              Crafting Identity with <em>Purpose & Grace</em>
            </h2>

            {/* Lead statement */}
            <p className={styles.leadParagraph}>
              "I thrive at the intersection of <em>creativity</em> and <em>strategy</em>."
            </p>

            {/* Body paragraphs from profile data */}
            <div className={styles.bodyParagraphs}>
              {profile.about.map((paragraph, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlighted Quote Callout */}
            <div className={styles.quoteBlock}>
              <p className={styles.quoteText}>
                "{profile.tagline}"
              </p>
              <span className={styles.quoteAuthor}>— {profile.name}</span>
            </div>
          </div>

          {/* Right Column: Quantitative & Qualitative Matrix */}
          <div className={styles.matrixCol}>
            {/* Stat Counters */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div>
                  <div className={styles.statNumber}>09</div>
                  <div className={styles.statTitle}>Creative Disciplines</div>
                </div>
                <div className={styles.statDesc}>
                  From performance art to tech engineering
                </div>
              </div>

              <div className={styles.statCard}>
                <div>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statTitle}>Authenticity</div>
                </div>
                <div className={styles.statDesc}>
                  Uncompromising commitment to high standards
                </div>
              </div>
            </div>

            {/* Creative Pillars */}
            <div className={styles.pillarsContainer}>
              <div className={styles.pillarsTitle}>
                <Compass size={20} />
                <span>Core Pillars of Impact</span>
              </div>

              <div className={styles.pillarItems}>
                {pillars.map((pillar, idx) => (
                  <div key={idx} className={styles.pillarItem}>
                    <div className={styles.pillarIcon}>{pillar.icon}</div>
                    <div className={styles.pillarText}>
                      <span className={styles.pillarName}>{pillar.name}</span>
                      <span className={styles.pillarSub}>{pillar.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
