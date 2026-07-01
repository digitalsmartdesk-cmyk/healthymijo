export interface OrderLine {
  productId: number;
  qty: number;
}

export interface Order {
  id: string;
  placedDate: string;
  total: number;
  status: 'transit' | 'delivered';
  statusLabel: string;
  lines: OrderLine[];
  itemsSummary: string;
  subLabel: string;
  trackingId: string;
  courier: string;
  dispatchedFrom: string;
  dispatchedDate: string;
  eta: string;
  deliveryKm: number;
}

export const orders: Order[] = [
  {
    id: 'HM-2026-1421',
    placedDate: '24 Jun 2026',
    total: 627,
    status: 'transit',
    statusLabel: 'Out for delivery',
    lines: [
      { productId: 1, qty: 2 },
      { productId: 3, qty: 1 },
    ],
    itemsSummary: 'Classic Protein Bhel ×2, Gym Bhel ×1',
    subLabel: 'Arriving today before 8 PM',
    trackingId: 'DL49820734IN',
    courier: 'Delhivery',
    dispatchedFrom: 'Pune',
    dispatchedDate: '25 Jun 2026',
    eta: 'Today, 1 Jul · Before 8 PM',
    deliveryKm: 2.8,
  },
  {
    id: 'HM-2026-1218',
    placedDate: '8 Jun 2026',
    total: 816,
    status: 'delivered',
    statusLabel: 'Delivered',
    lines: [
      { productId: 2, qty: 1 },
      { productId: 6, qty: 1 },
      { productId: 4, qty: 1 },
      { productId: 5, qty: 1 },
    ],
    itemsSummary: 'Millet Power Bhel, Diet Lite Bhel +2',
    subLabel: 'Delivered 10 Jun 2026',
    trackingId: 'DL49810221IN',
    courier: 'Delhivery',
    dispatchedFrom: 'Pune',
    dispatchedDate: '9 Jun 2026',
    eta: 'Delivered 10 Jun 2026',
    deliveryKm: 0,
  },
  {
    id: 'HM-2026-0988',
    placedDate: '20 May 2026',
    total: 378,
    status: 'delivered',
    statusLabel: 'Delivered',
    lines: [
      { productId: 5, qty: 1 },
      { productId: 7, qty: 1 },
    ],
    itemsSummary: 'Jaggery Bhel, Kids Mild Masala Bhel',
    subLabel: 'Delivered 23 May 2026',
    trackingId: 'DL49795310IN',
    courier: 'Delhivery',
    dispatchedFrom: 'Pune',
    dispatchedDate: '21 May 2026',
    eta: 'Delivered 23 May 2026',
    deliveryKm: 0,
  },
];

export function findOrder(id: string): Order | undefined {
  return orders.find((o) => o.id.toLowerCase() === id.trim().toLowerCase());
}
