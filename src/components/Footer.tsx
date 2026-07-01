import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

interface FootLink {
  label: string;
  to?: string;
}

interface FootColumn {
  heading: string;
  links: FootLink[];
}

interface FooterProps {
  tagline: string;
  columns: FootColumn[];
}

export default function Footer({ tagline, columns }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <img src="/assets/logo.png" alt="Healthy Mijo" />
            <p>{tagline}</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.4-2 2-2h2V2.2C16.6 2.1 15.4 2 14 2c-3 0-5 1.8-5 5v3H6v4h3v8h4Z" /></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2C1 8 1 12 1 12s0 4 .5 5.6a2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2C23 16 23 12 23 12s0-4-.5-5.6ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div className={styles.footCol} key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? <Link to={link.to}>{link.label}</Link> : <a href="#">{link.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.copy}>
          <div>© 2026 Healthy Mijo Foods Pvt. Ltd. · FSSAI Lic. 10016011003814 · 100% Veg · Plant Based</div>
          <div>Privacy Policy · Terms of Service</div>
        </div>
      </div>
    </footer>
  );
}

export function FooterMini() {
  return (
    <footer className={styles.mini}>
      <div className={`wrap ${styles.miniInner}`}>
        <div>© 2026 Healthy Mijo Foods Pvt. Ltd. · FSSAI Lic. 10016011003814</div>
        <div className={styles.links}>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
