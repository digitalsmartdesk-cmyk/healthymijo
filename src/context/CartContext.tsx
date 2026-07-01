import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getProduct } from '../data/products';

interface CartLine {
  productId: number;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  addItem: (productId: number, qty?: number) => void;
  removeItem: (productId: number) => void;
  setQty: (productId: number, qty: number) => void;
  clear: () => void;
}

const STORAGE_KEY = 'hm-cart';
const DEFAULT_LINES: CartLine[] = [
  { productId: 1, qty: 2 },
  { productId: 3, qty: 1 },
];

const CartContext = createContext<CartContextValue | null>(null);

function loadInitial(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return DEFAULT_LINES;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addItem = (productId: number, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        return prev.map((l) => (l.productId === productId ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { productId, qty }];
    });
  };

  const removeItem = (productId: number) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  };

  const setQty = (productId: number, qty: number) => {
    setLines((prev) => prev.map((l) => (l.productId === productId ? { ...l, qty: Math.max(1, qty) } : l)));
  };

  const clear = () => setLines([]);

  const { count, subtotal } = useMemo(() => {
    let count = 0;
    let subtotal = 0;
    for (const line of lines) {
      const product = getProduct(line.productId);
      count += line.qty;
      if (product) subtotal += product.price * line.qty;
    }
    return { count, subtotal };
  }, [lines]);

  return (
    <CartContext.Provider value={{ lines, count, subtotal, addItem, removeItem, setQty, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
