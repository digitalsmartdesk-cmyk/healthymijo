import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FooterMini } from '../components/Footer';
import { orders } from '../data/orders';
import { getProduct } from '../data/products';
import { mockUser } from '../data/user';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import styles from './Account.module.css';

type Panel = 'orders' | 'addresses' | 'wishlist' | 'profile';

const WISHLIST_IDS = [3, 8, 4];

export default function Account() {
  const [panel, setPanel] = useState<Panel>('orders');
  const [toggles, setToggles] = useState({ orderUpdates: true, newProducts: true, newsletter: false });
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { addItem } = useCart();

  const selectPanel = (p: Panel) => {
    setPanel(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  const toggle = (key: keyof typeof toggles) => setToggles((t) => ({ ...t, [key]: !t[key] }));

  return (
    <>
      <Header />

      <section className={styles.accHero}>
        <svg className={styles.ahPattern} viewBox="0 0 1180 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ah" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(14)">
              <circle cx="80" cy="80" r="60" fill="none" stroke="#6EAB42" strokeWidth="1.2" />
              <circle cx="148" cy="148" r="2" fill="#6EAB42" />
            </pattern>
          </defs>
          <rect width="1180" height="200" fill="url(#ah)" />
        </svg>
        <div className={`wrap ${styles.accHeroInner}`}>
          <div className={styles.ahGreet}>
            <div className={styles.ahAva}>{mockUser.firstName.charAt(0)}</div>
            <div className={styles.ahText}><div className={`eyebrow ${styles.eyebrow}`}>My Account</div><h1>Welcome back, <em>{mockUser.firstName}.</em></h1></div>
          </div>
          <div className={styles.ahQuick}>
            <div className={styles.ahQ}><div className={styles.n}>{orders.length}</div><div className={styles.l}>Orders</div></div>
            <div className={styles.ahQ}><div className={styles.n}>{WISHLIST_IDS.length}</div><div className={styles.l}>Wishlist</div></div>
            <div className={styles.ahQ}><div className={styles.n}>₹150</div><div className={styles.l}>Rewards</div></div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className={styles.accLayout}>
          <nav className={styles.side}>
            <button className={panel === 'orders' ? styles.on : ''} onClick={() => selectPanel('orders')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-2-4Z" /><path d="M4 6h16" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>My Orders
            </button>
            <button className={panel === 'addresses' ? styles.on : ''} onClick={() => selectPanel('addresses')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" /><circle cx="12" cy="9" r="2.5" /></svg>Addresses
            </button>
            <button className={panel === 'wishlist' ? styles.on : ''} onClick={() => selectPanel('wishlist')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg>Wishlist
            </button>
            <button className={panel === 'profile' ? styles.on : ''} onClick={() => selectPanel('profile')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>Profile &amp; Settings
            </button>
            <div className={styles.divide}></div>
            <Link to="/order-tracking">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h14l3 4v6h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M3 7v11h2" /></svg>Track an Order
            </Link>
            <button className={styles.signout} onClick={handleSignOut}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></svg>Sign Out
            </button>
          </nav>

          <div className={styles.content}>
            {panel === 'orders' && (
              <section>
                <div className={styles.panelHead}><div><h2>My orders</h2><p>{orders.length} orders since you joined</p></div><a className={styles.link} href="#">Download history →</a></div>
                {orders.map((order) => {
                  const thumbs = order.lines.slice(0, 2).map((l) => getProduct(l.productId)!);
                  const moreCount = order.lines.length - thumbs.length;
                  return (
                    <div className={styles.orderCard} key={order.id}>
                      <div className={styles.ocTop}>
                        <div className={styles.ocMeta}>
                          <div><div className={styles.k}>Order</div><div className={styles.v}>#{order.id}</div></div>
                          <div><div className={styles.k}>Placed</div><div className={styles.v}>{order.placedDate}</div></div>
                          <div><div className={styles.k}>Total</div><div className={styles.v}>₹{order.total}</div></div>
                        </div>
                        <span className={`${styles.ocPill} ${order.status === 'transit' ? styles.transit : styles.delivered}`}>
                          {order.status === 'transit' ? <span className={styles.dot}></span> : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 7 9 18l-5-5" /></svg>
                          )}
                          {order.statusLabel}
                        </span>
                      </div>
                      <div className={styles.ocBody}>
                        <div className={styles.ocThumbs}>
                          {thumbs.map((p) => (
                            <div className={styles.th} key={p.id}><img src={p.image} alt="" /></div>
                          ))}
                          {moreCount > 0 && <div className={styles.more}>+{moreCount}</div>}
                        </div>
                        <div className={styles.ocInfo}>
                          <div className={styles.items}>{order.itemsSummary}</div>
                          <div className={styles.sub}>{order.lines.reduce((s, l) => s + l.qty, 0)} items · <strong>{order.subLabel}</strong></div>
                        </div>
                        <div className={styles.ocActions}>
                          {order.status === 'transit' ? (
                            <Link className={`${styles.ocBtn} ${styles.primary}`} to="/order-tracking">Track →</Link>
                          ) : (
                            <button className={`${styles.ocBtn} ${styles.primary}`} onClick={() => order.lines.forEach((l) => addItem(l.productId, l.qty))}>Reorder</button>
                          )}
                          <button className={`${styles.ocBtn} ${styles.ghost}`}>{order.status === 'transit' ? 'Invoice' : 'Review'}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            )}

            {panel === 'addresses' && (
              <section>
                <div className={styles.panelHead}><div><h2>Saved addresses</h2><p>Manage delivery locations</p></div></div>
                <div className={styles.addrGrid}>
                  <div className={`${styles.addrCard} ${styles.default}`}>
                    <div className={styles.addrTag}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></svg>Home · Default</div>
                    <h3>{mockUser.firstName} {mockUser.lastName}</h3>
                    <p>{mockUser.address.line1}<br />{mockUser.address.line2}<br />{mockUser.address.city} {mockUser.address.pincode}, {mockUser.address.state}</p>
                    <div className={styles.phone}>{mockUser.phone}</div>
                    <div className={styles.addrActions}><a href="#">Edit</a><a href="#">Set default</a></div>
                  </div>
                  <div className={styles.addrCard}>
                    <div className={styles.addrTag} style={{ color: 'var(--ink-soft)' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>Office</div>
                    <h3>{mockUser.firstName} {mockUser.lastName}</h3>
                    <p>5th Floor, Tower B, Cerebrum IT Park<br />Kalyani Nagar<br />Pune 411014, Maharashtra</p>
                    <div className={styles.phone}>{mockUser.phone}</div>
                    <div className={styles.addrActions}><a href="#">Edit</a><a href="#">Set default</a><a className={styles.del} href="#">Delete</a></div>
                  </div>
                  <button className={styles.addrAdd}>
                    <span className={styles.plus}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span>
                    <span className={styles.t}>Add new address</span>
                  </button>
                </div>
              </section>
            )}

            {panel === 'wishlist' && (
              <section>
                <div className={styles.panelHead}><div><h2>Your wishlist</h2><p>{WISHLIST_IDS.length} products saved</p></div><Link className={styles.link} to="/shop">Browse all →</Link></div>
                <div className={styles.wishGrid}>
                  {WISHLIST_IDS.map((id) => {
                    const p = getProduct(id)!;
                    return (
                      <div className={styles.wishCard} key={id}>
                        <div className={styles.wishPic}>
                          <button className={styles.wishHeart}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg></button>
                          <img src={p.image} alt={p.name} />
                        </div>
                        <div className={styles.wishBody}>
                          <div className={styles.cat}>{p.catLabel}</div>
                          <h3>{p.name}</h3>
                          <div className={styles.row}>
                            <span className={styles.wishPrice}>₹{p.price}</span>
                            <button className={styles.wishAdd} onClick={() => addItem(p.id)}>Add →</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {panel === 'profile' && (
              <section>
                <div className={styles.panelHead}><div><h2>Profile &amp; settings</h2><p>Update your details and preferences</p></div></div>
                <div className={styles.profileCard}>
                  <div className={styles.pfRow}>
                    <div className={styles.field}><label>First name</label><input className={styles.input} type="text" defaultValue={mockUser.firstName} /></div>
                    <div className={styles.field}><label>Last name</label><input className={styles.input} type="text" defaultValue={mockUser.lastName} /></div>
                  </div>
                  <div className={styles.pfRow}>
                    <div className={`${styles.field} ${styles.full}`}><label>Email address</label><input className={styles.input} type="email" defaultValue={mockUser.email} /></div>
                  </div>
                  <div className={styles.pfRow}>
                    <div className={styles.field}><label>Phone</label><input className={styles.input} type="tel" defaultValue={mockUser.phone} /></div>
                    <div className={styles.field}><label>Date of birth</label><input className={styles.input} type="text" defaultValue={mockUser.dob} /></div>
                  </div>
                  <div className={styles.pfActions}>
                    <button className={styles.saveBtn}>Save changes <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 7 9 18l-5-5" /></svg></button>
                    <button className={styles.cancelBtn}>Cancel</button>
                  </div>
                </div>
                <div className={styles.prefCard}>
                  <h3>Notifications</h3>
                  <div className={styles.prefRow}>
                    <div><div className={styles.prT}>Order updates</div><div className={styles.prD}>Dispatch and delivery alerts</div></div>
                    <button className={`${styles.toggle} ${toggles.orderUpdates ? styles.on : ''}`} aria-label="Toggle" onClick={() => toggle('orderUpdates')}></button>
                  </div>
                  <div className={styles.prefRow}>
                    <div><div className={styles.prT}>New products &amp; offers</div><div className={styles.prD}>Early access to new flavours</div></div>
                    <button className={`${styles.toggle} ${toggles.newProducts ? styles.on : ''}`} aria-label="Toggle" onClick={() => toggle('newProducts')}></button>
                  </div>
                  <div className={styles.prefRow}>
                    <div><div className={styles.prT}>Healthy living newsletter</div><div className={styles.prD}>Monthly snack tips and recipes</div></div>
                    <button className={`${styles.toggle} ${toggles.newsletter ? styles.on : ''}`} aria-label="Toggle" onClick={() => toggle('newsletter')}></button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <FooterMini />
    </>
  );
}
