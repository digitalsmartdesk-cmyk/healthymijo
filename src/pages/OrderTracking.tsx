import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trackingFooter } from '../data/footerContent';
import { findOrder, orders } from '../data/orders';
import { getProduct } from '../data/products';
import { mockUser } from '../data/user';
import styles from './OrderTracking.module.css';

const TIMELINE_STEPS = [
  { label: 'Step 1', name: 'Order placed', meta: '24 Jun 2026 · 10:22 AM' },
  { label: 'Step 2', name: 'Confirmed & verified', meta: '24 Jun 2026 · 11:05 AM · Payment received' },
  { label: 'Step 3', name: 'Quality checked & packed', meta: '25 Jun 2026 · 8:15 AM · FSSAI batch verified' },
  { label: 'Step 4', name: 'Dispatched', meta: '25 Jun 2026 · 2:30 PM · Handed to Delhivery' },
];

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('HM-2026-1421');
  const [email, setEmail] = useState(mockUser.email);
  const [order, setOrder] = useState(orders[0]);
  const [notFound, setNotFound] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleTrack = () => {
    const found = findOrder(orderNumber);
    if (found) {
      setOrder(found);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const thumbs = order.lines.map((l) => getProduct(l.productId)!);
  const isDelivered = order.status === 'delivered';

  return (
    <>
      <Header />

      <section className={styles.pageTop}>
        <svg className={styles.ptPattern} viewBox="0 0 1100 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tp" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(14)">
              <circle cx="80" cy="80" r="60" fill="none" stroke="#6EAB42" strokeWidth="1.2" />
              <circle cx="148" cy="148" r="2" fill="#6EAB42" />
            </pattern>
          </defs>
          <rect width="1100" height="260" fill="url(#tp)" />
        </svg>
        <div className="wrap">
          <div className={styles.crumb}><Link to="/">Home</Link><span>›</span><Link to="/account">My Account</Link><span>›</span><span className={styles.here}>Track Order</span></div>
          <h1>Track your <em>order.</em></h1>
          <p>Enter your order number and email to see exactly where your Healthy Mijo bhel is right now.</p>
        </div>
      </section>

      <section className={styles.lookupSection}>
        <div className="wrap">
          <div className={styles.lookupCard}>
            <div className={styles.cardHead}>
              <div className={`eyebrow ${styles.eyebrow}`}>Order lookup</div>
              <h2>Find your <em>order</em></h2>
              <p>Your order number is in the confirmation email we sent when you placed your order.</p>
            </div>
            <div className={styles.lookupRow}>
              <div className={styles.field}><label>Order number</label><input className={styles.input} type="text" placeholder="e.g. HM-2026-1421" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} /></div>
              <div className={styles.field}><label>Email address</label><input className={styles.input} type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              <button className={styles.trackBtn} onClick={handleTrack}>Track Order →</button>
            </div>
            {notFound ? (
              <div className={styles.notFound}>We couldn't find that order. Try HM-2026-1421, HM-2026-1218 or HM-2026-0988.</div>
            ) : (
              <div className={styles.lookupNote}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5l3 2" /></svg>Order {order.id} is pre-loaded below as an example.</div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.results} ref={resultsRef}>
        <div className="wrap">
          <div className={styles.orderBanner}>
            <div className={styles.obLeft}>
              <div className={styles.obEyebrow}>Order #{order.id} · Placed {order.placedDate}</div>
              <h2>{isDelivered ? 'Your Healthy Mijo bhel has been delivered.' : 'Your Healthy Mijo bhel is out for delivery today.'}</h2>
              <p>{order.courier} · Tracking ID <strong style={{ color: 'var(--brown-deep)' }}>{order.trackingId}</strong> · Dispatched from {order.dispatchedFrom} on {order.dispatchedDate}</p>
            </div>
            <div className={styles.obRight}>
              <div className={`${styles.statusPill} ${isDelivered ? styles.delivered : styles.transit}`}>
                {!isDelivered && <span className={styles.dot}></span>}
                {order.statusLabel}
              </div>
              <div className={styles.eta}>{isDelivered ? 'Delivered' : 'Expected'} <strong>{order.eta}</strong></div>
            </div>
          </div>

          <div className={styles.resultsGrid}>
            <div>
              <div className={styles.timelineCard}>
                <div className={styles.tcHead}><h3>Delivery timeline</h3><a href="#" className={styles.courierLink}>Open in {order.courier} <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 17 17 7M7 7h10v10" /></svg></a></div>
                <div className={styles.timeline}>
                  {TIMELINE_STEPS.map((step) => (
                    <div className={`${styles.tStep} ${styles.done}`} key={step.name}>
                      <div className={styles.tIcon}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 7 9 18l-5-5" /></svg></div>
                      <div><div className={styles.tLabel}>{step.label}</div><div className={styles.tName}>{step.name}</div><div className={styles.tMeta}>{step.meta}</div></div>
                    </div>
                  ))}
                  <div className={`${styles.tStep} ${isDelivered ? styles.done : styles.active}`}>
                    <div className={styles.tIcon}>
                      {isDelivered ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 7 9 18l-5-5" /></svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 7h14l3 4v6h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M3 7v11h2" /></svg>
                      )}
                    </div>
                    <div>
                      <div className={styles.tLabel}>Step 5 · {isDelivered ? '' : 'Now'}</div>
                      <div className={styles.tName}>Out for delivery</div>
                      <div className={styles.tMeta}>{isDelivered ? order.eta : `Since 9:30 AM`}</div>
                      {!isDelivered && (
                        <div className={styles.tDetail}>Your delivery partner is on the way with your Healthy Mijo bhel. You'll receive a call 30 minutes before arrival. Store in a cool, dry place and keep sealed until you're ready to snack.</div>
                      )}
                    </div>
                  </div>
                  <div className={`${styles.tStep} ${isDelivered ? styles.done : ''}`}>
                    <div className={styles.tIcon}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg></div>
                    <div><div className={styles.tLabel}>Step 6</div><div className={styles.tName}>Delivered</div><div className={styles.tMeta}>{isDelivered ? order.eta : `Expected: ${order.eta}`}</div></div>
                  </div>
                </div>
              </div>
              {!isDelivered && (
                <div className={styles.mapCard}>
                  <div className={styles.mapPh}><div className={styles.mapPin}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" /><circle cx="12" cy="9" r="2.5" /></svg></div></div>
                  <div className={styles.mapInfo}>
                    <div className={styles.addr}><strong>Delivering to</strong>{mockUser.address.line1}, {mockUser.address.city} {mockUser.address.pincode}</div>
                    <div><div className={styles.km}>{order.deliveryKm}</div><small>km away</small></div>
                  </div>
                </div>
              )}
              <div className={styles.actionsRow}>
                <Link className={styles.btnPrimary} to="/shop"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></svg>Reorder</Link>
                <button className={styles.btnSecondary}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>Invoice</button>
                <a className={styles.btnGhost} href="#">Contact support</a>
              </div>
              <div className={styles.freshNote}>
                <div className={styles.fnIc}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3c-3 5-3 9-3 12a3 3 0 0 0 6 0c0-3 0-7-3-12Z" /></svg></div>
                <p><strong>Storage tip:</strong> Keep your Healthy Mijo bhel in an airtight container in a cool, dry place. Once opened, consume within 2–3 days for best taste and crunch. No refrigeration needed.</p>
              </div>
            </div>

            <aside>
              <div className={styles.summaryCard}>
                <div className={styles.scHead}><h3>Your order</h3><span className={styles.badge}>{order.lines.length} items</span></div>
                <div className={styles.scItems}>
                  {thumbs.map((p, i) => (
                    <div className={styles.scItem} key={p.id}>
                      <div className={styles.scThumb}><img src={p.image} alt="" /><span className={styles.scQty}>{order.lines[i].qty}</span></div>
                      <div><div className={styles.scName}>{p.name}</div><div className={styles.scMeta}>{p.weight} · {p.catLabel}</div></div>
                      <div className={styles.scPrice}>₹{p.price * order.lines[i].qty}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.scTotals}>
                  <div className={styles.scRow}><span>Subtotal</span><span className={styles.v}>₹{order.total}</span></div>
                  <div className={styles.scRow}><span>Delivery</span><span className={styles.v} style={{ color: 'var(--green-deep)', fontSize: 11, textTransform: 'uppercase', fontWeight: 700 }}>Free</span></div>
                  <div className={`${styles.scRow} ${styles.grand}`}><span className={styles.k}>Total paid</span><span className={styles.v}>₹{order.total}</span></div>
                </div>
                <div className={styles.scAddr}>
                  <div className={styles.scAddrLbl}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" /><circle cx="12" cy="9" r="2.5" /></svg>Delivery address</div>
                  <p><strong>{mockUser.firstName} {mockUser.lastName}</strong>{mockUser.address.line1}<br />{mockUser.address.city} {mockUser.address.pincode}, {mockUser.address.state}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer tagline={trackingFooter.tagline} columns={trackingFooter.columns} />
    </>
  );
}
