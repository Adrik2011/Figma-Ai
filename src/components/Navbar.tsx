import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reservation', label: 'Reservation' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">F</span>
          FFood
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#reservation" className="btn btn-primary nav-cta">
          Book a Table
        </a>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#reservation" className="btn btn-primary" onClick={() => setOpen(false)}>
          Book a Table
        </a>
      </div>
    </motion.header>
  );
}
