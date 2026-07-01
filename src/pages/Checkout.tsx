import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FooterMini } from '../components/Footer';
import { getProduct } from '../data/products';
import { mockUser } from '../data/user';
import { useCart } from '../context/CartContext';
import styles from './Checkout.module.css';
import { asset } from '../lib/asset';

type PayTab = 'card' | 'upi' | 'cod';

export default function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const [delivery, setDelivery] = useState<'standard' | 'express'>('standard');
  const [payTab, setPayTab] = useState<PayTab>('card');
  const [coupon, setCoupon] = useState('');
  const [discountPct, setDiscountPct] = useState(0);
  const navigate = useNavigate();

  const deliveryFee = delivery === 'express' ? 79 : 0;
  const discount = Math.round((subtotal * discountPct) / 100);
  const total = subtotal + deliveryFee - discount;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'MIJO10') setDiscountPct(10);
    else setDiscountPct(0);
  };

  const placeOrder = () => {
    clear();
    navigate('/account');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`wrap ${styles.headerInner}`}>
          <Link className={styles.brand} to="/"><img src={asset("assets/logo.png")} alt="Healthy Mijo" /></Link>
          <div className={styles.secureTitle}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>Secure Checkout</div>
          <div className={styles.ssl}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>256-bit SSL Protected</div>
          <button className={styles.hamburger} aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </header>

      <div className="wrap">
        <div className={styles.steps}>
          <div className={styles.stepsRow}>
            <div className={`${styles.step} ${styles.done}`}><div className={styles.num}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 7 9 18l-5-5" /></svg></div><div><div className={styles.lbl}>Step 1</div><div className={styles.name}>Cart</div></div></div>
            <div className={styles.stepSep}></div>
            <div className={`${styles.step} ${styles.active}`}><div className={styles.num}>2</div><div><div className={styles.lbl}>Step 2</div><div className={styles.name}>Details</div></div></div>
            <div className={styles.stepSep}></div>
            <div className={styles.step}><div className={styles.num}>3</div><div><div className={styles.lbl}>Step 3</div><div className={styles.name}>Payment</div></div></div>
            <div className={styles.stepSep}></div>
            <div className={styles.step}><div className={styles.num}>4</div><div><div className={styles.lbl}>Step 4</div><div className={styles.name}>Confirm</div></div></div>
          </div>
        </div>

        <div className={styles.pageTop}><h1>Almost there — <em>confirm your order.</em></h1></div>

        <div className={styles.checkoutGrid}>
          <div>
            <div className={styles.formCard}>
              <div className={styles.sectionHead}><h2>Contact details</h2></div>
              <div className={styles.cols2}>
                <div className={styles.field}><label>First name</label><input className={styles.input} type="text" defaultValue={mockUser.firstName} /></div>
                <div className={styles.field}><label>Last name</label><input className={styles.input} type="text" defaultValue={mockUser.lastName} /></div>
              </div>
              <div className={styles.field}><label>Email address</label><input className={styles.input} type="email" defaultValue={mockUser.email} /></div>
              <div className={styles.field}><label>Phone number</label><input className={styles.input} type="tel" defaultValue={mockUser.phone} /></div>
            </div>

            <div className={styles.formCard}>
              <div className={styles.sectionHead}><h2>Delivery address</h2></div>
              <div className={styles.field}><label>Address line 1</label><input className={styles.input} type="text" defaultValue={mockUser.address.line1} /></div>
              <div className={styles.field}><label>Address line 2</label><input className={styles.input} type="text" placeholder="Apartment, suite, landmark…" defaultValue={mockUser.address.line2} /></div>
              <div className={styles.cols2}>
                <div className={styles.field}><label>City</label><input className={styles.input} type="text" defaultValue={mockUser.address.city} /></div>
                <div className={styles.field}><label>PIN code</label><input className={styles.input} type="text" defaultValue={mockUser.address.pincode} /></div>
              </div>
              <div className={styles.cols2}>
                <div className={styles.field}><label>State</label><input className={styles.input} type="text" defaultValue={mockUser.address.state} /></div>
                <div className={styles.field}><label>Country</label><input className={styles.input} type="text" defaultValue={mockUser.address.country} /></div>
              </div>
            </div>

            <div className={styles.formCard}>
              <div className={styles.sectionHead}><h2>Delivery option</h2></div>
              <div className={styles.deliveryOpts}>
                <label className={`${styles.dOpt} ${delivery === 'standard' ? styles.on : ''}`}>
                  <input type="radio" name="delivery" checked={delivery === 'standard'} onChange={() => setDelivery('standard')} />
                  <div className={styles.dt}>Standard Delivery (3–5 days)</div><div className={styles.dp}>Free</div>
                </label>
                <label className={`${styles.dOpt} ${delivery === 'express' ? styles.on : ''}`}>
                  <input type="radio" name="delivery" checked={delivery === 'express'} onChange={() => setDelivery('express')} />
                  <div className={styles.dt}>Express Delivery (1–2 days)</div><div className={styles.dp}>₹79</div>
                </label>
              </div>
            </div>

            <div className={styles.formCard}>
              <div className={styles.sectionHead}><h2>Payment</h2></div>
              <div className={styles.payTabs}>
                <button className={`${styles.payTab} ${payTab === 'card' ? styles.on : ''}`} onClick={() => setPayTab('card')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>Card
                </button>
                <button className={`${styles.payTab} ${payTab === 'upi' ? styles.on : ''}`} onClick={() => setPayTab('upi')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>UPI
                </button>
                <button className={`${styles.payTab} ${payTab === 'cod' ? styles.on : ''}`} onClick={() => setPayTab('cod')}>COD</button>
              </div>
              {payTab === 'card' && (
                <>
                  <div className={styles.field}><label>Card number</label><input className={styles.input} type="text" placeholder="1234 5678 9012 3456" /></div>
                  <div className={styles.cols2}>
                    <div className={styles.field}><label>Expiry</label><input className={styles.input} type="text" placeholder="MM / YY" /></div>
                    <div className={styles.field}><label>CVV</label><input className={styles.input} type="text" placeholder="•••" /></div>
                  </div>
                  <div className={styles.field}><label>Name on card</label><input className={styles.input} type="text" defaultValue={`${mockUser.firstName} ${mockUser.lastName}`} /></div>
                </>
              )}
              {payTab === 'upi' && (
                <div className={styles.field}><label>UPI ID</label><input className={styles.input} type="text" placeholder="yourname@upi" /></div>
              )}
              {payTab === 'cod' && (
                <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 14 }}>Pay with cash when your order arrives.</p>
              )}
              <button className={styles.continue} onClick={placeOrder}>
                Place Order — ₹{total} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>

          <aside className={styles.summary}>
            <div className={styles.summaryCard}>
              <div className={styles.scHead}><h3>Your order</h3><span className={styles.badge}>{lines.length} Items</span></div>
              <div className={styles.cartList}>
                {lines.map((line) => {
                  const p = getProduct(line.productId)!;
                  return (
                    <div className={styles.cartItem} key={p.id}>
                      <div className={styles.ciThumb}><img src={p.image} alt="" /><span className={styles.ciQty}>{line.qty}</span></div>
                      <div>
                        <div className={styles.ciName}>{p.name}</div>
                        <div className={styles.ciMeta}>{p.weight} · {p.catLabel}</div>
                      </div>
                      <div className={styles.ciPrice}>₹{p.price * line.qty}</div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.totals}>
                <div className={styles.totRow}><span>Subtotal</span><span className={styles.v}>₹{subtotal}</span></div>
                <div className={styles.totRow}><span>Delivery</span><span className={styles.v} style={{ color: deliveryFee === 0 ? 'var(--green-deep)' : undefined, textTransform: 'uppercase', fontSize: 11, fontWeight: 700 }}>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span></div>
                <div className={styles.totRow}><span>Discount</span><span className={styles.v} style={{ color: 'var(--orange)' }}>–₹{discount}</span></div>
                <div className={`${styles.totRow} ${styles.grand}`}><span className={styles.k}>Total</span><span className={styles.v}>₹{total}</span></div>
              </div>
              <div className={styles.coupon}>
                <div className={styles.couponRow}>
                  <input type="text" placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                  <button onClick={applyCoupon}>Apply</button>
                </div>
              </div>
              <div className={styles.payStrip}>
                <span className={styles.psLabel}>We accept</span>
                <span className={styles.psBadge}>UPI</span><span className={styles.psBadge}>VISA</span><span className={styles.psBadge}>RUPAY</span><span className={styles.psBadge}>COD</span>
              </div>
              <div className={styles.trustList}>
                <div className={styles.tl}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>No maida · No preservatives · Plant based</div>
                <div className={styles.tl}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>256-bit secure payment</div>
                <div className={styles.tl}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>Easy 7-day returns</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <FooterMini />
    </>
  );
}
