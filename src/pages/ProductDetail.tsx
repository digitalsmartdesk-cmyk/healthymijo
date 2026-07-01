import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productFooter } from '../data/footerContent';
import { getProduct } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from './ProductDetail.module.css';

const THUMBS = ['/assets/products/1.jpg', '/assets/products/2.jpg', '/assets/products/3.jpg', '/assets/products/8.jpg'];
const SIZES = [
  { label: '200g · ₹199' },
  { label: 'Pack of 3 · ₹549' },
  { label: 'Pack of 6 · ₹999' },
];
const RELATED_IDS = [2, 3, 4, 8];

export default function ProductDetail() {
  const product = getProduct(1)!;
  const [mainImg, setMainImg] = useState(THUMBS[0]);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const changeQty = (delta: number) => setQty((q) => Math.max(1, Math.min(10, q + delta)));

  return (
    <>
      <Header mobileCartAction />

      <div className={styles.breadcrumb}>
        <div className={`wrap ${styles.bcInner}`}>
          <Link to="/">Home</Link><span className={styles.sep}>›</span>
          <Link to="/shop">Shop</Link><span className={styles.sep}>›</span>
          <a href="#">Protein Bhel</a><span className={styles.sep}>›</span>
          <span className={styles.here}>Classic Protein Bhel</span>
        </div>
      </div>

      <section className={styles.pdp}>
        <div className={`wrap ${styles.pdpGrid}`}>
          <div className={styles.gallery}>
            <div className={styles.mainImg}>
              <img src={mainImg} alt="Classic Protein Bhel 200g" />
              <div className={styles.certOverlay}>
                <span className={styles.certBadge}>No Maida</span>
                <span className={styles.certBadge}>No Frying</span>
              </div>
            </div>
            <div className={styles.thumbs}>
              {THUMBS.map((src) => (
                <div
                  key={src}
                  className={`${styles.thumb} ${mainImg === src ? styles.on : ''}`}
                  onClick={() => setMainImg(src)}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.cat}>Protein Bhel · 100% Veg · Ready in 30s</div>
            <h1>Classic Protein Bhel</h1>
            <div className={styles.starsRow}>
              <div className={styles.stars}>★★★★★</div>
              <span className={styles.ratingNum}>4.9</span>
              <span className={styles.reviewCount}><a href="#">812 reviews</a></span>
            </div>
            <div className={styles.priceBlock}>
              <span className={styles.now}>₹{product.price}</span>
              <span className={styles.was}>₹{product.compareAt}</span>
              <span className={styles.save}>Save 20%</span>
            </div>
            <p className={styles.desc}>Pour into a bowl. Add chopped onion &amp; a squeeze of lemon. Eat. That's it — a high-protein snack that's ready in 30 seconds. Made with roasted chana, makhana &amp; puffed grains. No cooking, no maida, no frying.</p>
            <div className={styles.sizeRow}>
              <div className={styles.sizeLabel}>Select pack</div>
              <div className={styles.sizes}>
                {SIZES.map((s, i) => (
                  <button key={s.label} className={`${styles.sz} ${sizeIdx === i ? styles.on : ''}`} onClick={() => setSizeIdx(i)}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.highlights}>
              <div className={styles.hl}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>High protein — made with roasted, not fried ingredients</div>
              <div className={styles.hl}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2" /></svg>Ready in 30 seconds — no cooking required</div>
              <div className={styles.hl}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="m6 6 12 12" /></svg>No maida · No preservatives · No artificial colours</div>
              <div className={styles.hl}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 3c-3 5-3 9-3 12a3 3 0 0 0 6 0c0-3 0-7-3-12Z" /></svg>100% plant based · 100% veg</div>
            </div>
            <div className={styles.ctaRow}>
              <div className={styles.stepper}>
                <button onClick={() => changeQty(-1)}>−</button>
                <input type="number" className={styles.qty} value={qty} min={1} max={10} readOnly />
                <button onClick={() => changeQty(1)}>+</button>
              </div>
              <button className={styles.addToCart} onClick={() => addItem(product.id, qty)}>
                Add to Cart <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 7h12l-1.2 11a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7Z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></svg>
              </button>
            </div>
            <button className={styles.wishlistBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg>Save to Wishlist
            </button>
            <div className={styles.certRow}>
              <div className={styles.cp}>No Maida</div>
              <div className={styles.cp}>No Preservatives</div>
              <div className={styles.cp}>No Frying</div>
              <div className={styles.cp}>Plant Based</div>
              <div className={styles.cp}>100% Veg</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.fullDesc}>
        <div className={`wrap ${styles.fdGrid}`}>
          <div className={styles.fdLeft}>
            <div className={`eyebrow ${styles.eyebrow}`}>About this product</div>
            <h2>Real snacking, <em>real nutrition.</em></h2>
            <p>Snacking doesn't have to mean guilt. Healthy Mijo Classic Protein Bhel puts nutrition first without sacrificing taste.</p>
          </div>
          <div className={styles.fdRight}>
            <p className={styles.lead}>Healthy Mijo Classic Protein Bhel is built for the modern snacker who wants a quick, satisfying, and genuinely nutritious bite. We start with roasted chana, makhana and puffed grains — never fried, never made with maida, never with preservatives.</p>
            <p>The bhel is seasoned with a thoughtfully balanced masala that delivers that classic street-bhel taste — tangy, a little spicy, deeply satisfying — without the junk. All you add is chopped onion and a squeeze of fresh lemon, and you're done in under 30 seconds.</p>
            <p>At over 15g of protein per pack, it's the kind of snack that actually fuels you. Rich in fibre, low in empty calories, 100% plant-based and veg. No compromises on ingredients or on taste.</p>
            <div className={styles.specs}>
              <div className={styles.spec}><div className={styles.sk}>Net weight</div><div className={styles.sv}>200g</div></div>
              <div className={styles.spec}><div className={styles.sk}>Key ingredients</div><div className={styles.sv}>Roasted chana, makhana, puffed grains, masala</div></div>
              <div className={styles.spec}><div className={styles.sk}>Protein</div><div className={styles.sv}>15g+ per pack</div></div>
              <div className={styles.spec}><div className={styles.sk}>Prep time</div><div className={styles.sv}>30 seconds</div></div>
              <div className={styles.spec}><div className={styles.sk}>Shelf life</div><div className={styles.sv}>6 months sealed</div></div>
              <div className={styles.spec}><div className={styles.sk}>Storage</div><div className={styles.sv}>Cool, dry place. Airtight after opening.</div></div>
              <div className={styles.spec}><div className={styles.sk}>Certifications</div><div className={styles.sv}>FSSAI · 100% Veg · Plant Based</div></div>
              <div className={styles.spec}><div className={styles.sk}>Allergens</div><div className={styles.sv}>Contains peanuts &amp; soy. Gluten traces.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.related}>
        <div className="wrap">
          <div className={styles.relatedHead}><h2>You might also like</h2><Link to="/shop">View all →</Link></div>
          <div className={styles.relatedGrid}>
            {RELATED_IDS.map((id) => {
              const p = getProduct(id)!;
              return (
                <div className={styles.rCard} key={id}>
                  <div className={styles.rPic}><img src={p.image} alt={p.name} /></div>
                  <div className={styles.rBody}>
                    <div className={styles.rCat}>{p.catLabel}</div>
                    <h3>{p.name}</h3>
                    <div className={styles.rRow}>
                      <span className={styles.rPrice}>₹{p.price}</span>
                      <button className={styles.rAdd} onClick={() => addItem(p.id)}>Add →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer tagline={productFooter.tagline} columns={productFooter.columns} />
    </>
  );
}
