import React, { useState } from 'react';
import { profile } from '../data/profile';
import styles from './Experience.module.css';
import {
  Camera,
  Video,
  PenTool,
  Share2,
  Building,
  Utensils,
  GraduationCap,
  Sparkles,
  Terminal,
  ArrowUpRight,
} from 'lucide-react';

export default function Experience() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Map icons matching each specific role
  const roleIcons = {
    Model: <Camera size={20} />,
    'Content Creator': <Video size={20} />,
    Writer: <PenTool size={20} />,
    'Social Media Manager': <Share2 size={20} />,
    'Real Estate Consultant': <Building size={20} />,
    Chef: <Utensils size={20} />,
    Teacher: <GraduationCap size={20} />,
    Actress: <Sparkles size={20} />,
    'Upcoming Software Engineer': <Terminal size={20} />,
  };

  const categories = ['All', 'Creative & Arts', 'Strategy & Media', 'Tech & Consulting'];

  // Categorize for filtering
  const getCategoryGroup = (title) => {
    if (['Model', 'Actress', 'Chef'].includes(title)) return 'Creative & Arts';
    if (['Content Creator', 'Writer', 'Social Media Manager'].includes(title)) return 'Strategy & Media';
    if (['Upcoming Software Engineer', 'Real Estate Consultant', 'Teacher'].includes(title)) return 'Tech & Consulting';
    return 'All';
  };

  const filteredExperience = profile.experience.filter((item) => {
    if (selectedFilter === 'All') return true;
    return getCategoryGroup(item.title) === selectedFilter;
  });

  return (
    <section id="disciplines" className={styles.experienceSection}>
      <div className="container">
        {/* Header & Filter Controls */}
        <div className={styles.headerWrapper}>
          <span className="section-tag">Versatility in Action</span>
          <h2 className="section-title">
            Nine Disciplines, <em>One Singular Vision</em>
          </h2>
          <p className="section-subtitle">
            Exploring the dynamic breadth of storytelling, visual expression, community growth, and technical systems.
          </p>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`${styles.filterBtn} ${selectedFilter === cat ? styles.active : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Disciplines Cards Grid */}
        <div className={styles.grid}>
          {filteredExperience.map((item, idx) => (
            <article key={item.title} className={styles.card}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.indexNumber}>0{idx + 1}</span>
                  <div className={styles.iconWrapper}>
                    {roleIcons[item.title] || <Sparkles size={20} />}
                  </div>
                </div>

                <span className={styles.cardCategory}>
                  {item.category || getCategoryGroup(item.title)}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.taglineSnippet}>Core Discipline</span>
                <div className={styles.actionArrow} aria-label="Explore discipline">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Collaboration Callout */}
        <div className={styles.bottomCallout}>
          <div className={styles.calloutText}>
            <span className={styles.calloutHeading}>
              Looking for a multifaceted collaborator?
            </span>
            <span className={styles.calloutSub}>
              Available for brand campaigns, culinary private bookings, writing commissions, and tech initiatives.
            </span>
          </div>

          <a href="#contact" className="btn btn-primary">
            <span>Initiate Collaboration</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
