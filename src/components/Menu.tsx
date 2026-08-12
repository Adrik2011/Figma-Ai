import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { menuItems, type MenuItem } from '../data';

const categories: Array<MenuItem['category'] | 'All'> = ['All', 'Burgers', 'Chicken', 'Sides', 'Drinks'];

export default function Menu() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');

  const filtered =
    active === 'All' ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <ScrollReveal className="section-head center">
          <span className="eyebrow">Our Menu</span>
          <h2 className="section-title">Best Sellers, Straight Off the Grill</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every item is fired fresh to order — pick a category and dig in.
          </p>
        </ScrollReveal>

        <div className="menu-tabs">
          {categories.map((c) => (
            <button
              key={c}
              className={`menu-tab ${active === c ? 'is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="menu-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                layout
                key={item.id}
                className="menu-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="menu-card-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  {item.badge && <span className="menu-badge">{item.badge}</span>}
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
