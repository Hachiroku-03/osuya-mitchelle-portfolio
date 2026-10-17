import React from 'react';
import { profile } from '../data/profile';
import styles from './Contact.module.css';
import { Phone, ArrowUpRight, MessageCircle } from 'lucide-react';

// Crisp custom vector icons for TikTok, Instagram, and Facebook
function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.134V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48 6.27 6.27 0 0 0 1.86-4.48V8.71a8.21 8.21 0 0 0 4.91 1.62v-3.45a4.85 4.85 0 0 1-1-.19z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Contact() {
  const getSocialIcon = (name) => {
    switch (name) {
      case 'TikTok':
        return <TikTokIcon />;
      case 'Instagram':
        return <InstagramIcon />;
      case 'Facebook':
        return <FacebookIcon />;
      default:
        return <MessageCircle size={20} />;
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactCard}>
          {/* Left Column: Direct Phone & Inquiries */}
          <div className={styles.infoCol}>
            <span className="section-tag">Direct Lines & Bookings</span>
            <h2 className={styles.headline}>
              Let's Create Something <em>Extraordinary</em>
            </h2>
            <p className={styles.subtext}>
              Whether you are casting for modeling, seeking creative direction, consulting on real estate opportunities, or collaborating on digital solutions — get in touch directly.
            </p>

            <div className={styles.phonesWrapper}>
              {profile.phones.map((phone, idx) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className={styles.phoneItem}
                  title={`Call ${phone}`}
                >
                  <div className={styles.phoneLeft}>
                    <div className={styles.phoneIcon}>
                      <Phone size={18} />
                    </div>
                    <div className={styles.phoneMeta}>
                      <span className={styles.phoneLabel}>
                        Direct Line 0{idx + 1}
                      </span>
                      <span>{phone}</span>
                    </div>
                  </div>
                  <span className={styles.callBadge}>Dial</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Social Profiles (open in new tab with verified rel) */}
          <div className={styles.socialCol}>
            <div className={styles.socialHeader}>
              <span className={styles.socialLabel}>
                Verified Social Channels
              </span>
            </div>

            <div className={styles.socialList}>
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={`Open Mitchelle's ${social.name} in a new tab`}
                >
                  <div className={styles.socialInfo}>
                    <div className={styles.socialBrandIcon}>
                      {getSocialIcon(social.name)}
                    </div>
                    <div className={styles.socialNames}>
                      <span className={styles.socialName}>{social.name}</span>
                      <span className={styles.socialHandle}>
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <div className={styles.socialAction}>
                    <span>Visit Page</span>
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
