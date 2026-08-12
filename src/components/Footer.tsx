export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark">F</span>
            FFood
          </a>
          <p>
            Bold, fast, fired-up food — served fresh every night. Grab a bite or book a table.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="TikTok">
              TT
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#reservation">Reservation</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <span>128 Grill Street, Bangkok, TH</span>
          <span>+66 2 123 4567</span>
          <span>hello@ffood.com</span>
        </div>

        <div className="footer-col">
          <h4>Opening Hours</h4>
          <span>Mon – Thu: 11:00 – 24:00</span>
          <span>Fri – Sat: 11:00 – 02:00</span>
          <span>Sunday: 12:00 – 23:00</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} FFood. All rights reserved.</span>
          <span>Made with fire, fast.</span>
        </div>
      </div>
    </footer>
  );
}
