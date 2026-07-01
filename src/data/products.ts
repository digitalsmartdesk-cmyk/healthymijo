export type Category = 'protein' | 'millet' | 'fiber' | 'kids' | 'premium' | 'classic';

export interface Product {
  id: number;
  name: string;
  category: Category;
  catLabel: string;
  weight: string;
  price: number;
  compareAt: number;
  rating: number;
  reviews: number;
  tag: string;
  tagClass: 'bestseller' | 'protein' | 'millet' | 'fiber' | 'kids' | 'premium';
  desc: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Protein Bhel',
    category: 'protein',
    catLabel: 'Protein Bhel',
    weight: '200g',
    price: 199,
    compareAt: 249,
    rating: 4.9,
    reviews: 812,
    tag: 'Bestseller',
    tagClass: 'bestseller',
    desc: 'High protein snack with roasted chana & makhana. Pour, add onion & lemon. Eat in 30 seconds.',
    image: '/assets/products/1.jpg',
  },
  {
    id: 2,
    name: 'Millet Power Bhel',
    category: 'millet',
    catLabel: 'Millet Bhel',
    weight: '200g',
    price: 219,
    compareAt: 269,
    rating: 5,
    reviews: 634,
    tag: 'Millet',
    tagClass: 'millet',
    desc: 'Made with millets & super grains. Multi-grain goodness, high fibre, no frying. Gut-friendly snacking.',
    image: '/assets/products/2.jpg',
  },
  {
    id: 3,
    name: 'Gym Bhel',
    category: 'protein',
    catLabel: 'Protein Bhel',
    weight: '200g',
    price: 229,
    compareAt: 279,
    rating: 5,
    reviews: 529,
    tag: 'High Protein',
    tagClass: 'protein',
    desc: '20g protein per pack. Made with soy, chana & super seeds. Perfect post-workout, plant-based fuel.',
    image: '/assets/products/3.jpg',
  },
  {
    id: 4,
    name: 'Chatpata Fiber Bhel',
    category: 'fiber',
    catLabel: 'Fiber Bhel',
    weight: '200g',
    price: 199,
    compareAt: 249,
    rating: 5,
    reviews: 477,
    tag: 'Fiber Rich',
    tagClass: 'fiber',
    desc: 'Made with oats, flax seeds & roasted pulses. Digestive-friendly, chatpata flavour, high fibre.',
    image: '/assets/products/4.jpg',
  },
  {
    id: 5,
    name: 'Jaggery Bhel',
    category: 'classic',
    catLabel: 'Classic Bhel',
    weight: '200g',
    price: 199,
    compareAt: 249,
    rating: 5,
    reviews: 391,
    tag: 'No Sugar',
    tagClass: 'bestseller',
    desc: 'Sweet & tangy made with natural jaggery. No refined sugar, rich in iron. A guilt-free indulgence.',
    image: '/assets/products/5.jpg',
  },
  {
    id: 6,
    name: 'Diet Lite Bhel',
    category: 'fiber',
    catLabel: 'Light Bhel',
    weight: '200g',
    price: 199,
    compareAt: 249,
    rating: 5,
    reviews: 443,
    tag: 'Low Calorie',
    tagClass: 'fiber',
    desc: 'Light & crunchy with millet goodness. Low calorie, high nutrition. Made for weight-conscious snackers.',
    image: '/assets/products/6.jpg',
  },
  {
    id: 7,
    name: 'Kids Mild Masala Bhel',
    category: 'kids',
    catLabel: 'Kids Bhel',
    weight: '200g',
    price: 179,
    compareAt: 219,
    rating: 5,
    reviews: 612,
    tag: 'Kids',
    tagClass: 'kids',
    desc: 'Mild on spice, big on taste! Made with super grains & pulses. No artificial colours or flavours.',
    image: '/assets/products/7.jpg',
  },
  {
    id: 8,
    name: 'Premium Dry Fruit Bhel',
    category: 'premium',
    catLabel: 'Premium Bhel',
    weight: '200g',
    price: 299,
    compareAt: 349,
    rating: 5,
    reviews: 358,
    tag: 'Premium',
    tagClass: 'premium',
    desc: 'Loaded with cashews, almonds & raisins. Rich in natural nutrition. Nutritious, delicious & truly premium.',
    image: '/assets/products/8.jpg',
  },
];

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
