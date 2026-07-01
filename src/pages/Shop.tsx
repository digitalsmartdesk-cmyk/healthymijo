import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { shopFooter } from '../data/footerContent';
import { products, type Category } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from './Shop.module.css';

type Tab = 'all' | Category;

const TABS: { id: Tab; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'protein', label: 'High Protein' },
  { id: 'millet', label: 'Millet Based' },
  { id: 'fiber', label: 'Fiber Rich' },
  { id: 'kids', label: 'Kids' },
  { id: 'premium', label: 'Premium' },
];

type Sort = 'bestselling' | 'price-asc' | 'price-desc' | 'newest';

export default function Shop() {
  const [tab, setTab] = useState<Tab>('all');
  const [pills, setPills] = useState({ noMaida: true, plantBased: false, noFrying: false });
  const [sort, setSort] = useState<Sort>('bestselling');
  const { addItem } = useCart();

  const togglePill = (key: keyof typeof pills) => setPills((p) => ({ ...p, [key]: !p[key] }));

  const visible = useMemo(() => {
    let list = tab === 'all' ? products : products.filter((p) => p.category === tab);
    list = [...list];
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') list.sort((a, b) => b.id - a.id);
    return list;
  }, [tab, sort]);

  return (
    <>
      <Header mobileCartAction />

      <section className={styles.pageHero}>
        <svg className={styles.phPattern} viewBox="0 0 1200 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="p" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(14)">
              <circle cx="80" cy="80" r="60" fill="none" stroke="#6EAB42" strokeWidth="1.2" />
              <circle cx="140" cy="140" r="2" fill="#6EAB42" />
            </pattern>
          </defs>
          <rect width="1200" height="260" fill="url(#p)" />
        </svg>
        <div className={`wrap ${styles.pageHeroInner}`}>
          <div>
            <div className={styles.crumb}><Link to="/">Home</Link> <span>›</span> <span className={styles.here}>Shop</span></div>
            <h1>Healthy. Tasty. <em>Ready in 30s.</em></h1>
            <p>Our range of bhel snacks — high protein, millet-based, fiber-rich — no maida, no frying, no preservatives. Real ingredients, real nutrition.</p>
          </div>
          <div className={styles.phMeta}>
            <div className={styles.m}><div className={styles.n}>8</div><div className={styles.l}>Varieties</div></div>
            <div className={styles.m}><div className={styles.n}>100%</div><div className={styles.l}>Plant Based</div></div>
            <div className={styles.m}><div className={styles.n}>30s</div><div className={styles.l}>Ready In</div></div>
          </div>
        </div>
      </section>

      <div className={styles.filterBar}>
        <div className="wrap">
          <div className={styles.filterInner}>
            <div className={styles.tabs}>
              {TABS.map((t) => (
                <button key={t.id} className={tab === t.id ? styles.on : ''} onClick={() => setTab(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className={styles.filterRow}>
              <span className={styles.filterLabel}>Filter:</span>
              <button className={`${styles.pill} ${pills.noMaida ? styles.on : ''}`} onClick={() => togglePill('noMaida')}>No Maida</button>
              <button className={`${styles.pill} ${pills.plantBased ? styles.on : ''}`} onClick={() => togglePill('plantBased')}>Plant Based</button>
              <button className={`${styles.pill} ${pills.noFrying ? styles.on : ''}`} onClick={() => togglePill('noFrying')}>No Frying</button>
            </div>
            <div className={styles.sort}>
              <div className={styles.selectWrap}>
                <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                  <option value="bestselling">Sort: Bestselling</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.resultsRow}>
            <span>Showing <strong>{visible.length}</strong> products</span>
            <span>No Maida · No Preservatives · Plant Based · Ready in 30s</span>
          </div>
        </div>
      </div>

      <section className={styles.shop}>
        <div className="wrap">
          <div className={styles.productGrid}>
            {visible.map((p) => {
              const detailLink = p.id === 1 ? '/product' : '/shop';
              return (
                <article className={styles.product} key={p.id}>
                  <div className={styles.pic}>
                    <span className={`${styles.tag} ${styles[p.tagClass]}`}>{p.tag}</span>
                    <button className={styles.heart} aria-label="Save">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" /></svg>
                    </button>
                    <Link to={detailLink}><img src={p.image} alt={`${p.name} ${p.weight}`} /></Link>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.cat}>{p.catLabel} · {p.weight}</div>
                    <h3><Link to={detailLink}>{p.name}</Link></h3>
                    <p className={styles.desc}>{p.desc}</p>
                    <div className={styles.stars}>★★★★★ <span>({p.reviews})</span></div>
                    <div className={styles.row}>
                      <div className={styles.price}><span className={styles.now}>₹{p.price}</span><span className={styles.was}>₹{p.compareAt}</span></div>
                      <button className={styles.add} onClick={() => addItem(p.id)}>Add →</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.assurance}>
        <div className={`wrap ${styles.assuranceRow}`}>
          <div className={styles.asItem}><div className={styles.asIc}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg></div><div><div className={styles.asTitle}>No Maida · No Preservatives</div><div className={styles.asSub}>Every product clean &amp; honest</div></div></div>
          <div className={styles.asItem}><div className={styles.asIc}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h14l3 4v6h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M3 7v11h2" /></svg></div><div><div className={styles.asTitle}>Free Shipping ₹499+</div><div className={styles.asSub}>Pan-India delivery</div></div></div>
          <div className={styles.asItem}><div className={styles.asIc}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg></div><div><div className={styles.asTitle}>Easy 7-day Returns</div><div className={styles.asSub}>Hassle-free return policy</div></div></div>
          <div className={styles.asItem}><div className={styles.asIc}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg></div><div><div className={styles.asTitle}>Secure Payment</div><div className={styles.asSub}>UPI, cards, COD accepted</div></div></div>
        </div>
      </section>

      <Footer tagline={shopFooter.tagline} columns={shopFooter.columns} />
    </>
  );
}
