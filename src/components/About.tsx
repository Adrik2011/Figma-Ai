import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const aboutImg =
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={aboutImg} alt="Inside the FFood kitchen" />
          <div className="about-exp">
            <strong>15+</strong>
            <span>Years Serving Fire</span>
          </div>
        </motion.div>

        <ScrollReveal delay={0.1} className="about-copy">
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title">
            Fast Food, <span className="text-accent">Made Fresh</span> Every Time
          </h2>
          <p className="section-sub">
            FFood started as a single late-night grill counter with one rule: never rush the
            flavor, only the wait. Today we still hand-press every patty, hand-bread every wing,
            and fry every side to order — just faster, louder, and with more fire than before.
          </p>
          <ul className="about-list">
            <li>Fresh ingredients, prepped daily</li>
            <li>Fired on the grill, never microwaved</li>
            <li>Open late, every single night</li>
          </ul>
          <a href="#menu" className="btn btn-outline">
            Explore the Menu
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
