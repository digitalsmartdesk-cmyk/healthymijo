import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { asset } from '../lib/asset';

interface HeaderProps {
  mobileCartAction?: boolean;
}

export default function Header({ mobileCartAction = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { count } = useCart();
  const { isAuthenticated, firstName, logout } = useAuth();

  const active = location.pathname === '/' ? 'home' : location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'shop' : '';

  const close = () => setOpen(false);

  const handleSignOut = () => {
    logout();
    close();
    navigate('/login');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`wrap ${styles.headerInner}`}>
          <Link className={styles.brand} to="/">
            <img src={asset("assets/logo.png")} alt="Healthy Mijo" />
          </Link>
          <nav className={styles.nav}>
            <Link to="/" className={active === 'home' ? styles.active : ''}>Home</Link>
            <Link to="/shop" className={active === 'shop' ? styles.active : ''}>Shop</Link>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
          <div className={styles.headerRight}>
            {isAuthenticated ? (
              <Link className={styles.accountChip} to="/account">
                <span className={styles.ava}>{firstName.charAt(0)}</span>
                <span className={styles.nm}>{firstName}</span>
              </Link>
            ) : (
              <Link to="/login" className={styles.loginLink}>Sign in</Link>
            )}
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            </button>
            <Link to="/checkout" className={`${styles.iconBtn} ${styles.cart}`} aria-label="Cart">
              <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7h12l-1.2 11a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7Z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></svg>
              <span className={styles.cartBadge}>{count}</span>
            </Link>
            <button
              className={`${styles.hamburger} ${open ? styles.open : ''}`}
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`${styles.mobileNav} ${open ? styles.open : ''}`}>
        <Link to="/" className={styles.navLink} onClick={close}>Home</Link>
        <Link to="/shop" className={styles.navLink} onClick={close}>Shop</Link>
        <a href="#" className={styles.navLink} onClick={close}>About</a>
        <a href="#" className={styles.navLink} onClick={close}>Blog</a>
        <a href="#" className={styles.navLink} onClick={close}>Contact</a>
        <div className={styles.mActions}>
          {mobileCartAction ? (
            <Link className={styles.mOrange} to="/checkout" onClick={close}>Cart ({count}) →</Link>
          ) : (
            <Link className={styles.mOrange} to="/shop" onClick={close}>Shop Now →</Link>
          )}
          {isAuthenticated ? (
            <button className={styles.mOutline} onClick={handleSignOut}>Sign out</button>
          ) : (
            <Link className={styles.mOutline} to="/login" onClick={close}>Sign in</Link>
          )}
        </div>
      </nav>
    </>
  );
}
