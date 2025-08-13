import Blog from '@/components/Blog';
import Pricing from '@/components/Pricing';
import Products from '@/components/Products';

export const TABS = [
  {
    title: 'Products',
    Components: Products,
  },
  {
    title: 'Pricing',
    Components: Pricing,
  },
  {
    title: 'Blog',
    Components: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
