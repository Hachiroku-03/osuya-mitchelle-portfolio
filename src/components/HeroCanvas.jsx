import React, { useState, useEffect } from 'react';
import styles from './HeroCanvas.module.css';

// Chibi 1: The High-Fashion Model / Actress (Chic bun, runway dress, sparkling earrings)
function ModelChibi({ isHovered, mood }) {
  return (
    <svg viewBox="0 0 100 120" className={styles.chibiSvgWrap}>
      {/* Hair back bun */}
      <circle cx="50" cy="22" r="18" fill="#1f1812" />
      <circle cx="50" cy="14" r="10" fill="#2d2219" />

      {/* Head */}
      <circle cx="50" cy="42" r="22" fill="#f8d9b8" />

      {/* Front Hair Bangs */}
      <path
        d="M28 36 Q50 18 72 36 Q64 26 50 25 Q36 26 28 36 Z"
        fill="#1f1812"
      />

      {/* Big Cute Chibi Eyes */}
      <ellipse cx="42" cy="43" rx="4" ry={isHovered ? '1' : '5'} fill="#0d0d0d" />
      <ellipse cx="58" cy="43" rx="4" ry={isHovered ? '1' : '5'} fill="#0d0d0d" />
      {/* Eye Sparkles */}
      {!isHovered && (
        <>
          <circle cx="43.5" cy="41" r="1.5" fill="#fffdfa" />
          <circle cx="59.5" cy="41" r="1.5" fill="#fffdfa" />
        </>
      )}

      {/* Soft Rosy Blush */}
      <ellipse cx="36" cy="48" rx="3.5" ry="1.8" fill="#f4a59a" opacity="0.6" />
      <ellipse cx="64" cy="48" rx="3.5" ry="1.8" fill="#f4a59a" opacity="0.6" />

      {/* Smile */}
      <path
        d="M47 50 Q50 54 53 50"
        stroke="#8a4b38"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Gold Earrings */}
      <circle cx="28" cy="44" r="2" fill="#d8c3a5" />
      <circle cx="72" cy="44" r="2" fill="#d8c3a5" />

      {/* Neck */}
      <rect x="47" y="62" width="6" height="5" fill="#f8d9b8" />

      {/* Haute Couture Dress (Champagne & Black) */}
      <path
        d="M42 66 L58 66 L68 96 L32 96 Z"
        fill="#141414"
        stroke="#d8c3a5"
        strokeWidth="1.2"
      />
      <path d="M42 66 Q50 74 58 66" fill="#d8c3a5" />

      {/* Cute Arms */}
      <path
        d={
          isHovered
            ? "M38 72 Q24 60 22 52" // Waving hand
            : "M38 72 Q28 80 34 88"
        }
        stroke="#f8d9b8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 72 Q72 80 66 88"
        stroke="#f8d9b8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Boots / Heels */}
      <rect x="42" y="96" width="6" height="12" rx="3" fill="#0d0d0d" />
      <rect x="52" y="96" width="6" height="12" rx="3" fill="#0d0d0d" />
    </svg>
  );
}

// Chibi 2: The Upcoming Software Engineer (Headphones, laptop, cute hoodie)
function TechChibi({ isHovered, mood }) {
  return (
    <svg viewBox="0 0 100 120" className={styles.chibiSvgWrap}>
      {/* Headphones Band */}
      <path
        d="M26 36 A24 24 0 0 1 74 36"
        stroke="#d8c3a5"
        strokeWidth="3.5"
        fill="none"
      />
      <rect x="23" y="32" width="7" height="15" rx="3" fill="#141414" stroke="#d8c3a5" strokeWidth="1" />
      <rect x="70" y="32" width="7" height="15" rx="3" fill="#141414" stroke="#d8c3a5" strokeWidth="1" />

      {/* Hair (Sleek Afro Puffs / Curls) */}
      <circle cx="34" cy="28" r="14" fill="#1f1812" />
      <circle cx="66" cy="28" r="14" fill="#1f1812" />
      <circle cx="50" cy="30" r="18" fill="#1f1812" />

      {/* Head */}
      <circle cx="50" cy="44" r="21" fill="#f8d9b8" />

      {/* Eyes with stylish developer glasses */}
      <rect x="36" y="38" width="12" height="10" rx="3" fill="none" stroke="#d8c3a5" strokeWidth="1.5" />
      <rect x="52" y="38" width="12" height="10" rx="3" fill="none" stroke="#d8c3a5" strokeWidth="1.5" />
      <line x1="48" y1="43" x2="52" y2="43" stroke="#d8c3a5" strokeWidth="1.5" />

      <circle cx="42" cy="43" r="3" fill="#0d0d0d" />
      <circle cx="58" cy="43" r="3" fill="#0d0d0d" />
      <circle cx="43" cy="42" r="1" fill="#fffdfa" />
      <circle cx="59" cy="42" r="1" fill="#fffdfa" />

      {/* Smile */}
      <path
        d="M46 52 Q50 56 54 52"
        stroke="#8a4b38"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tech Oversized Hoodie */}
      <path
        d="M36 64 L64 64 L68 94 L32 94 Z"
        fill="#1e1c19"
        stroke="rgba(216, 195, 165, 0.4)"
        strokeWidth="1"
      />

      {/* Code symbol on hoodie </> */}
      <text
        x="50"
        y="80"
        fill="#d8c3a5"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="bold"
      >
        &lt;/&gt;
      </text>

      {/* Little glowing laptop in front */}
      <rect x="38" y="84" width="24" height="14" rx="2" fill="#0d0d0d" stroke="#d8c3a5" strokeWidth="1" />
      <polygon points="41,86 49,86 47,94 39,94" fill="#d8c3a5" opacity="0.6" />

      {/* Sneakers */}
      <ellipse cx="42" cy="100" rx="6" ry="4" fill="#fffdfa" />
      <ellipse cx="58" cy="100" rx="6" ry="4" fill="#fffdfa" />
    </svg>
  );
}

// Chibi 3: The Chef & Creator (Chef toque, wooden spoon / camera)
function ChefChibi({ isHovered, mood }) {
  return (
    <svg viewBox="0 0 100 120" className={styles.chibiSvgWrap}>
      {/* Tall Chef Hat (Toque Blanche) */}
      <path
        d="M34 26 C30 10, 42 6, 50 8 C58 6, 70 10, 66 26 Z"
        fill="#fffdfa"
        stroke="#d8c3a5"
        strokeWidth="1"
      />
      <rect x="36" y="24" width="28" height="6" fill="#fffdfa" stroke="#d8c3a5" strokeWidth="0.8" />

      {/* Head */}
      <circle cx="50" cy="44" r="21" fill="#f8d9b8" />

      {/* Hair peeking under hat */}
      <path d="M32 38 Q50 34 68 38 Q60 48 50 42 Q40 48 32 38 Z" fill="#1f1812" />

      {/* Winking happy eyes */}
      <ellipse cx="42" cy="44" rx="3.5" ry="4.5" fill="#0d0d0d" />
      <circle cx="43" cy="42" r="1.3" fill="#fffdfa" />
      <path
        d="M55 45 Q58 40 61 45"
        stroke="#0d0d0d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Rosy Cheeks */}
      <ellipse cx="36" cy="49" rx="3.5" ry="1.8" fill="#f4a59a" opacity="0.6" />
      <ellipse cx="64" cy="49" rx="3.5" ry="1.8" fill="#f4a59a" opacity="0.6" />

      {/* Happy Open Smile */}
      <path
        d="M46 51 Q50 58 54 51 Z"
        fill="#b33939"
      />

      {/* Chef Double-breasted Coat */}
      <path
        d="M36 64 L64 64 L66 94 L34 94 Z"
        fill="#fffdfa"
        stroke="#d8c3a5"
        strokeWidth="1"
      />
      {/* Red/Beige Scarf Knot */}
      <polygon points="46,64 54,64 50,70" fill="#d8c3a5" />

      {/* Double buttons */}
      <circle cx="46" cy="74" r="1.5" fill="#0d0d0d" />
      <circle cx="54" cy="74" r="1.5" fill="#0d0d0d" />
      <circle cx="46" cy="82" r="1.5" fill="#0d0d0d" />
      <circle cx="54" cy="82" r="1.5" fill="#0d0d0d" />

      {/* Whisk / Wooden Spoon in Hand */}
      <line
        x1={isHovered ? '68' : '64'}
        y1={isHovered ? '60' : '70'}
        x2={isHovered ? '78' : '74'}
        y2={isHovered ? '50' : '62'}
        stroke="#d8c3a5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx={isHovered ? '80' : '76'}
        cy={isHovered ? '48' : '60'}
        rx="3"
        ry="4"
        fill="#d8c3a5"
      />

      {/* Shoes */}
      <ellipse cx="42" cy="99" rx="5" ry="3.5" fill="#141414" />
      <ellipse cx="58" cy="99" rx="5" ry="3.5" fill="#141414" />
    </svg>
  );
}

export default function HeroCanvas() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [step, setStep] = useState(0);

  // Gentle walking bob animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const chibis = [
    {
      id: 'model',
      role: 'Fashion Model & Actress',
      action: 'Striking runway poses',
      component: ModelChibi,
      speed: 1.2,
      offset: 0,
    },
    {
      id: 'tech',
      role: 'Upcoming Software Engineer',
      action: 'Writing algorithms & 3D apps',
      component: TechChibi,
      speed: 1.5,
      offset: 90,
    },
    {
      id: 'chef',
      role: 'Chef & Creator',
      action: 'Crafting culinary experiences',
      component: ChefChibi,
      speed: 1.3,
      offset: 180,
    },
  ];

  return (
    <div className={styles.chibiContainer}>
      <div className={styles.ambientField} />

      {/* The Walking Stage */}
      <div className={styles.stage}>
        {chibis.map((item, idx) => {
          const Component = item.component;
          const isHovered = hoveredIndex === idx;

          // Cute calculated sinusoidal walking / floating bob
          const bobY = Math.sin((step * item.speed + item.offset) * (Math.PI / 180)) * 6;
          const tiltX = Math.cos((step * item.speed + item.offset) * (Math.PI / 180)) * 2;

          return (
            <div
              key={item.id}
              className={styles.chibiCard}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: `translateY(${bobY}px) rotate(${tiltX}deg)`,
              }}
            >
              {/* Floating role pill above head */}
              <div
                className={styles.chibiBubble}
                style={{
                  opacity: isHovered ? 1 : 0.85,
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                {item.role}
              </div>

              {/* Vector Character */}
              <Component isHovered={isHovered} />

              {/* Reactive Ground Shadow */}
              <div
                className={styles.chibiShadow}
                style={{
                  transform: `scale(${1 - Math.abs(bobY) / 20})`,
                }}
              />

              {/* Speech bubble / status */}
              <div
                className={styles.chibiActionText}
                style={{
                  color: isHovered ? 'var(--color-beige)' : 'var(--text-muted)',
                }}
              >
                {isHovered ? `✨ ${item.action}` : item.role.split('&')[0]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtext info under the characters */}
      <div className={styles.controlsBar}>
        <span style={{ fontSize: '0.72rem', color: 'var(--color-beige)' }}>
          ✦ Multi-persona Chibi Avatars
        </span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          • Hover to interact
        </span>
      </div>
    </div>
  );
}
