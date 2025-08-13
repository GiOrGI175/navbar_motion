'use client';

import { title } from 'process';
import ExampleComponents from './ExampleComponents';
import { useState } from 'react';
import Tab from './Tab';
import { AnimatePresence } from 'framer-motion';
import Content from './Content';

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

  const [dir, setDir] = useState<null | 'l' | 'r'>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseMove={() => handleSetSelected(null)}
      className='relative flex h-fit gap-2'
    >
      {TABS.map((item) => {
        return (
          <Tab
            key={item.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={item.id}
          >
            {item.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
}
