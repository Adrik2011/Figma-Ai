export type MenuItem = {
  id: number;
  name: string;
  category: 'Burgers' | 'Chicken' | 'Sides' | 'Drinks';
  price: string;
  desc: string;
  img: string;
  badge?: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Inferno Cheeseburger',
    category: 'Burgers',
    price: '$8.90',
    desc: 'Double beef patty, cheddar, smoky chili sauce, brioche bun.',
    img: img('photo-1568901346375-23c9450c58cd'),
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Classic Stack Burger',
    category: 'Burgers',
    price: '$7.50',
    desc: 'Beef patty, lettuce, tomato, house sauce, sesame bun.',
    img: img('photo-1571091718767-18b5b1457add'),
  },
  {
    id: 3,
    name: 'Crispy Fire Wings',
    category: 'Chicken',
    price: '$9.20',
    desc: 'Hand-breaded wings tossed in spicy fire glaze.',
    img: img('photo-1562967914-608f82629710'),
    badge: 'Spicy',
  },
  {
    id: 4,
    name: 'Golden Fried Chicken',
    category: 'Chicken',
    price: '$10.90',
    desc: 'Buttermilk-brined, double-crisp fried chicken pieces.',
    img: img('photo-1567620905732-2d1ec7ab7445'),
  },
  {
    id: 5,
    name: 'Loaded Cheese Fries',
    category: 'Sides',
    price: '$5.50',
    desc: 'Crispy fries, melted cheddar, herbs, sea salt.',
    img: img('photo-1573080496219-bb080dd4f877'),
  },
  {
    id: 6,
    name: 'Golden Onion Rings',
    category: 'Sides',
    price: '$4.90',
    desc: 'Beer-battered onion rings with smoky dip.',
    img: img('photo-1639024471283-03518883512d'),
  },
  {
    id: 7,
    name: 'Ice Cold Cola',
    category: 'Drinks',
    price: '$2.50',
    desc: 'Classic fizzy cola, served ice cold.',
    img: img('photo-1622483767028-3f66f32aef97'),
  },
  {
    id: 8,
    name: 'Fresh Garden Salad',
    category: 'Sides',
    price: '$6.20',
    desc: 'Mixed greens, cherry tomato, walnut, feta, house dressing.',
    img: img('photo-1512621776951-a57141f2eefd'),
    badge: 'Fresh',
  },
];

export type GalleryImg = { id: number; img: string; caption: string };

export const galleryImages: GalleryImg[] = [
  { id: 1, img: img('photo-1568901346375-23c9450c58cd'), caption: 'Signature Inferno Burger' },
  { id: 2, img: img('photo-1573080496219-bb080dd4f877'), caption: 'Loaded Cheese Fries' },
  { id: 3, img: img('photo-1562967914-608f82629710'), caption: 'Crispy Fire Wings' },
  { id: 4, img: img('photo-1639024471283-03518883512d'), caption: 'Golden Onion Rings' },
  { id: 5, img: img('photo-1571091718767-18b5b1457add'), caption: 'Classic Stack Burger' },
  { id: 6, img: img('photo-1544148103-0773bf10d330'), caption: 'The FFood Dining Room' },
];

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Carter',
    role: 'Regular Customer',
    quote:
      'The Inferno Cheeseburger is unreal — smoky, spicy, and always fresh off the grill. FFood is my go-to every Friday night.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Food Blogger',
    quote:
      'Fast service, bold flavors, and a dark, buzzing atmosphere. It genuinely feels different from every other fast food spot in town.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marco Lee',
    role: 'Local Guide',
    quote:
      'Booked a table for six on a Saturday — smooth reservation, great staff, and the wings are worth the trip alone.',
    rating: 4,
  },
];

export const features = [
  { id: 1, value: 15, suffix: '+', label: 'Years of Flavor' },
  { id: 2, value: 50, suffix: 'K+', label: 'Happy Customers' },
  { id: 3, value: 120, suffix: '+', label: 'Menu Items' },
  { id: 4, value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
];
