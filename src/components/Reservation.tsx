import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

type FormState = {
  name: string;
  contact: string;
  date: string;
  time: string;
  guests: string;
  request: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  contact: '',
  date: '',
  time: '',
  guests: '2',
  request: '',
};

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.contact.trim()) {
      next.contact = 'Please enter a phone or email.';
    } else if (
      !/^\S+@\S+\.\S+$/.test(form.contact) &&
      !/^[\d+\s()-]{7,}$/.test(form.contact)
    ) {
      next.contact = 'Enter a valid phone number or email.';
    }
    if (!form.date) next.date = 'Please choose a date.';
    if (!form.time) next.time = 'Please choose a time.';
    if (!form.guests || Number(form.guests) < 1) next.guests = 'At least 1 guest.';
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="reservation">
      <div className="reservation-overlay" />
      <div className="container reservation-inner">
        <ScrollReveal className="reservation-copy">
          <span className="eyebrow">Book a Table</span>
          <h2 className="section-title">Save Your Seat by the Fire</h2>
          <p className="section-sub">
            Tell us when you're coming and how many, and we'll have a table fired up and
            waiting. Walk-ins welcome too — but reservations skip the line.
          </p>
          <ul className="reservation-perks">
            <li>Instant confirmation</li>
            <li>Free cancellation up to 2 hours before</li>
            <li>Groups up to 12 welcome</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="reservation-form-wrap">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="reservation-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <span className="success-icon">✓</span>
                <h3>Table Reserved!</h3>
                <p>We've received your request — a confirmation will be sent to you shortly.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Book Another Table
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="reservation-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
              >
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="contact">Phone or Email</label>
                  <input
                    id="contact"
                    type="text"
                    placeholder="you@email.com"
                    value={form.contact}
                    onChange={(e) => update('contact', e.target.value)}
                  />
                  {errors.contact && <span className="field-error">{errors.contact}</span>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="date">Date</label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                    />
                    {errors.date && <span className="field-error">{errors.date}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="time">Time</label>
                    <input
                      id="time"
                      type="time"
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                    />
                    {errors.time && <span className="field-error">{errors.time}</span>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="guests">Guests</label>
                  <select
                    id="guests"
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  {errors.guests && <span className="field-error">{errors.guests}</span>}
                </div>

                <div className="field">
                  <label htmlFor="request">Special Request (optional)</label>
                  <textarea
                    id="request"
                    rows={3}
                    placeholder="Birthday, allergies, seating preference..."
                    value={form.request}
                    onChange={(e) => update('request', e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary reservation-submit">
                  Reserve Table
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
