'use client';

import { title } from 'process';
import ExampleComponents from './ExampleComponents';
import { useState } from 'react';

const TABS = [
  {
    title: 'Products',
    Components: ExampleComponents,
  },
  {
    title: 'Pricing',
    Components: ExampleComponents,
  },
  {
    title: 'Blog',
    Components: ExampleComponents,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default function Tabs() {
  const [selected, setSelected] = useState<number | null>(null);

  const [ dir,setDir] = useState<null|'l':'r'>(null)

  return <div></div>;
}
