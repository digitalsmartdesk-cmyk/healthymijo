import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { homeFooter } from '../data/footerContent';
import { getProduct } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from './Home.module.css';
import { asset } from '../lib/asset';

const FEATURED_IDS = [1, 2, 3, 7];
const VARIETY_IDS = [1, 2, 3, 4, 5, 6, 7, 8];
const MARQUEE_WORDS = ['No Maida', 'No Frying', 'No Preservatives', 'Plant Based', 'High Protein', 'Ready in 30 Seconds', '100% Veg', 'Roasted Not Fried'];
const MARQUEE_ITEMS = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

export default function Home() {
  const { addItem } = useCart();

  return (
    <>
      <div className={styles.announce}>
        Use code <strong>MIJO10</strong> for 10% off your first order · Free shipping above ₹499
      </div>

      <Header />

      <section className={styles.hero}>
        <svg className={styles.heroPattern} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hp" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(14)">
              <circle cx="80" cy="80" r="60" fill="none" stroke="#6EAB42" strokeWidth="1.2" />
              <circle cx="148" cy="148" r="2" fill="#6EAB42" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#hp)" />
        </svg>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>Foods for modern lifestyles</div>
            <h1>Snack smart.<br /><em>Eat happy.</em></h1>
            <p className={styles.heroSub}>Protein-rich bhel snacks ready in 30 seconds. No maida, no frying, no preservatives — just honest, wholesome flavour.</p>
            <div className={styles.heroCtas}>
              <Link className={styles.btnHeroPrimary} to="/shop">
                Shop All Bhel
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link className={styles.btnHeroGhost} to="/product">See our bestseller →</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.s}><div className={styles.n}>8</div><div className={styles.l}>Varieties</div></div>
              <div className={styles.s}><div className={styles.n}>30s</div><div className={styles.l}>Ready in</div></div>
              <div className={styles.s}><div className={styles.n}>0</div><div className={styles.l}>Maida ever</div></div>
              <div className={styles.s}><div className={styles.n}>100%</div><div className={styles.l}>Plant based</div></div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImgWrap}>
              <img className={styles.heroImgMain} src={asset("assets/products/1.jpg")} alt="Classic Protein Bhel" />
              <div className={styles.heroBadge}>
                <div className={styles.hbIc}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className={styles.hbText}><div className={styles.t}>No maida · No preservatives</div><div className={styles.s}>Plant based · 100% veg</div></div>
              </div>
              <div className={styles.heroFloat}>Ready in 30 sec</div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.trustBar}>
        <div className="wrap">
          <div className={styles.trustRow}>
            <div className={styles.trustItem}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg><div><div className={styles.t}>No Maida</div><div className={styles.s}>Clean ingredients always</div></div></div>
            <div className={styles.trustItem}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3c-3 5-3 9-3 12a3 3 0 0 0 6 0c0-3 0-7-3-12Z" /></svg><div><div className={styles.t}>No Frying</div><div className={styles.s}>Roasted, not fried</div></div></div>
            <div className={styles.trustItem}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg><div><div className={styles.t}>No Preservatives</div><div className={styles.s}>Real food, nothing fake</div></div></div>
            <div className={styles.trustItem}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg><div><div className={styles.t}>Plant Based</div><div className={styles.s}>100% vegetarian</div></div></div>
          </div>
        </div>
      </div>

      <section className={styles.how}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className={`eyebrow ${styles.eyebrow}`}>It's that simple</div>
            <h2>Ready in <em>30 seconds.</em></h2>
            <p>No cooking. No mess. Just rip open, add two ingredients from your fridge, and eat.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span className={styles.stepEmoji}>🥣</span>
              <div className={styles.stepNum}>1</div>
              <h3>Pour</h3>
              <p>Empty the pack into a bowl. The bhel is already seasoned — all the flavour is in there.</p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepEmoji}>🧅</span>
              <div className={styles.stepNum}>2</div>
              <h3>Add</h3>
              <p>Toss in some freshly chopped onion and a squeeze of lemon. That's the only prep you need.</p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepEmoji}>😋</span>
              <div className={styles.stepNum}>3</div>
              <h3>Eat</h3>
              <p>Mix it up and dig in. Crunchy, chatpata, filling — and packed with real nutrition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="wrap">
          <div className={styles.productsHead}>
            <h2>Our most loved bhel</h2>
            <Link to="/shop">View all 8 varieties →</Link>
          </div>
          <div className={styles.productGrid}>
            {FEATURED_IDS.map((id) => {
              const p = getProduct(id)!;
              const detailLink = id === 1 ? '/product' : '/shop';
              return (
                <div className={styles.productCard} key={id}>
                  <div className={styles.pcPic}>
                    <span className={`${styles.pcTag} ${styles[p.tagClass]}`}>{p.tag}</span>
                    <button className={styles.pcHeart} aria-label="Save">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg>
                    </button>
                    <Link to={detailLink}><img src={p.image} alt={p.name} /></Link>
                  </div>
                  <div className={styles.pcBody}>
                    <div className={styles.pcCat}>{p.catLabel} · {p.weight}</div>
                    <h3><Link to={detailLink}>{p.name}</Link></h3>
                    <p className={styles.pcDesc}>{p.desc}</p>
                    <div className={styles.pcRow}>
                      <div className={styles.pcPrice}><span className={styles.now}>₹{p.price}</span><span className={styles.was}>₹{p.compareAt}</span></div>
                      <button className={styles.pcAdd} onClick={() => addItem(p.id)}>Add →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {MARQUEE_ITEMS.map((t, i) => (
            <span className={styles.marqueeItem} key={i}><span className={styles.marqueeDot}></span>{t}</span>
          ))}
        </div>
      </div>

      <section className={styles.why}>
        <div className={`wrap ${styles.whyGrid}`}>
          <div className={styles.whyImages}>
            <div className={`${styles.whyImg} ${styles.tall}`}><img src={asset("assets/products/8.jpg")} alt="Premium Dry Fruit Bhel" /></div>
            <div className={styles.whyImg}><img src={asset("assets/products/4.jpg")} alt="Chatpata Fiber Bhel" /></div>
            <div className={styles.whyImg}><img src={asset("assets/products/5.jpg")} alt="Jaggery Bhel" /></div>
          </div>
          <div className={styles.whyRight}>
            <div className={`eyebrow ${styles.eyebrow}`}>Why Healthy Mijo</div>
            <h2>Snacking that <em>actually loves you back.</em></h2>
            <p>We started Healthy Mijo because we were tired of choosing between tasty and healthy. Every product is built on one rule: if it's not good for you, it doesn't go in.</p>
            <div className={styles.whyList}>
              <div className={styles.whyItem}><div className={styles.wiIc}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg></div><div className={styles.wiText}><div className={styles.t}>Real ingredients only</div><div className={styles.s}>No maida, no refined oils, no artificial anything</div></div></div>
              <div className={styles.whyItem}><div className={styles.wiIc}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 3c-3 5-3 9-3 12a3 3 0 0 0 6 0c0-3 0-7-3-12Z" /></svg></div><div className={styles.wiText}><div className={styles.t}>Roasted, never fried</div><div className={styles.s}>All crunch, a fraction of the calories</div></div></div>
              <div className={styles.whyItem}><div className={styles.wiIc}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg></div><div className={styles.wiText}><div className={styles.t}>Protein &amp; fibre forward</div><div className={styles.s}>Snacks that fuel you, not just fill you</div></div></div>
              <div className={styles.whyItem}><div className={styles.wiIc}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg></div><div className={styles.wiText}><div className={styles.t}>Made for real life</div><div className={styles.s}>Ready in 30 seconds, zero cooking required</div></div></div>
            </div>
            <Link className={styles.btnCta} to="/shop">Explore all varieties <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </div>
        </div>
      </section>

      <section className={styles.testi}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className={`eyebrow ${styles.eyebrow}`}>What snackers say</div>
            <h2>People are <em>loving it.</em></h2>
          </div>
          <div className={styles.testiGrid}>
            <div className={styles.testiCard}>
              <div className={styles.testiStars}>★★★★★</div>
              <blockquote>"I keep a box of Classic Protein Bhel at my desk. It's the only 3 PM snack that doesn't make me feel terrible after."</blockquote>
              <div className={styles.testiAuthor}><div className={styles.testiAva} style={{ background: 'var(--brown)' }}>P</div><div><div className={styles.name}>Priya M.</div><div className={styles.sub}>Bangalore · Verified buyer</div></div></div>
              <div className={styles.testiProduct}>Classic Protein Bhel</div>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.testiStars}>★★★★★</div>
              <blockquote>"My kids refused every healthy snack I tried — until the Kids Bhel. They ask for it by name now. It's a miracle product."</blockquote>
              <div className={styles.testiAuthor}><div className={styles.testiAva} style={{ background: 'var(--green)' }}>R</div><div><div className={styles.name}>Rohan S.</div><div className={styles.sub}>Mumbai · Verified buyer</div></div></div>
              <div className={styles.testiProduct}>Kids Mild Masala Bhel</div>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.testiStars}>★★★★★</div>
              <blockquote>"The Gym Bhel is genuinely impressive for the protein content. Tastes like street bhel, fuels like a protein supplement. Ordered 3 packs."</blockquote>
              <div className={styles.testiAuthor}><div className={styles.testiAva} style={{ background: 'var(--orange)' }}>A</div><div><div className={styles.name}>Aditya K.</div><div className={styles.sub}>Pune · Verified buyer</div></div></div>
              <div className={styles.testiProduct}>Gym Bhel</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.variety}>
        <svg className={styles.varietyPattern} viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vp" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(14)">
              <circle cx="80" cy="80" r="60" fill="none" stroke="#6EAB42" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="1200" height="500" fill="url(#vp)" />
        </svg>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className={`eyebrow ${styles.eyebrow}`}>8 varieties</div>
            <h2>Something for <em>everyone.</em></h2>
            <p>From high-protein for gym-goers to mild masala for kids — every lifestyle has its bhel.</p>
          </div>
          <div className={styles.varietyStrip}>
            {VARIETY_IDS.map((id) => {
              const p = getProduct(id)!;
              const detailLink = id === 1 ? '/product' : '/shop';
              return (
                <Link className={styles.varietyCard} to={detailLink} key={id}>
                  <div className={styles.vcPic}><img src={p.image} alt={p.name} /></div>
                  <div className={styles.vcBody}><div className={styles.name}>{p.name}</div><div className={styles.price}>₹{p.price}</div></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={`wrap ${styles.ctaBannerInner}`}>
          <div>
            <h2>Ready to snack <em>smarter?</em></h2>
            <p>Try our bestselling Classic Protein Bhel. If you don't love it, we'll make it right — no questions asked.</p>
          </div>
          <Link className={styles.btnBanner} to="/shop">Shop All Varieties <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
        </div>
      </section>

      <Footer tagline={homeFooter.tagline} columns={homeFooter.columns} />
    </>
  );
}
