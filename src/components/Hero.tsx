import { motion, type Variants } from 'framer-motion';

const heroImg =
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-a" />
      <div className="hero-glow glow-b" />

      <div className="container hero-inner">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            Fast Food, Fast Fire
          </motion.span>
          <motion.h1 variants={item}>
            Bold Flavor,
            <br />
            <span className="text-accent">Fired Up</span> Fast.
          </motion.h1>
          <motion.p variants={item} className="hero-sub">
            Juicy burgers, crispy fried chicken, and sides made fresh to order —
            served in a bold, late-night kind of place. Grab a bite or book your table.
          </motion.p>
          <motion.div variants={item} className="hero-actions">
            <a href="#menu" className="btn btn-primary">
              View Menu
            </a>
            <a href="#reservation" className="btn btn-outline">
              Book a Table
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            <div>
              <strong>50K+</strong>
              <span>Happy Customers</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>Average Rating</span>
            </div>
            <div>
              <strong>15 min</strong>
              <span>Avg. Fire Time</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="hero-image-float">
            <img src={heroImg} alt="Signature FFood burger" />
          </div>
          <div className="hero-badge">
            <span>🔥</span>
            Best Seller
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span />
      </motion.a>
    </section>
  );
}
