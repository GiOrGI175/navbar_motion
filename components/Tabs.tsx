'use client';

import { useState } from 'react';
import Tab from './Tab';
import { AnimatePresence } from 'framer-motion';
import Content from './Content';
import { TABS } from '@/common/tabs';

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
      onMouseLeave={() => handleSetSelected(null)}
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
