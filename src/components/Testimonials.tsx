import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { testimonials } from '../data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="testimonials">
      <div className="container">
        <ScrollReveal className="section-head center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">What Our Regulars Say</h2>
        </ScrollReveal>

        <div className="testimonial-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              className={`dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
