import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { features } from '../data';

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="counter-value">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const perks = [
  { icon: '🔥', title: 'Fired Fresh', text: 'Every order hits the grill only after you order it.' },
  { icon: '⚡', title: 'Fast to Table', text: 'Average kitchen time under 15 minutes, always.' },
  { icon: '🥩', title: 'Quality Cuts', text: 'Premium beef, buttermilk chicken, no shortcuts.' },
  { icon: '🌙', title: 'Open Late', text: 'Kitchen stays hot until 2AM, every single night.' },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <ScrollReveal className="section-head center">
          <span className="eyebrow">Why FFood</span>
          <h2 className="section-title">Built Different, Served Faster</h2>
        </ScrollReveal>

        <div className="perks-grid">
          {perks.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1} className="perk-card">
              <span className="perk-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="stats-grid">
          {features.map((f, i) => (
            <ScrollReveal key={f.id} delay={i * 0.1} className="stat-card">
              <Counter value={f.value} suffix={f.suffix} decimals={f.decimals ?? 0} />
              <span className="stat-label">{f.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
