import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { galleryImages } from '../data';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const activeImg = galleryImages.find((g) => g.id === active) ?? null;

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <ScrollReveal className="section-head center">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title">A Taste of the Fire</h2>
        </ScrollReveal>

        <div className="gallery-grid">
          {galleryImages.map((g, i) => (
            <ScrollReveal
              key={g.id}
              delay={i * 0.06}
              className={`gallery-item ${i === 0 ? 'is-wide' : ''}`}
            >
              <button className="gallery-btn" onClick={() => setActive(g.id)}>
                <img src={g.img} alt={g.caption} loading="lazy" />
                <span className="gallery-overlay">
                  <span>{g.caption}</span>
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImg && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeImg.img} alt={activeImg.caption} />
              <p>{activeImg.caption}</p>
              <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
