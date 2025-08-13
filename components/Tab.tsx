'use client';

import { ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type TabPropsT = {
  children: ReactNode;
  tab: number;
  selected: number | null;
  handleSetSelected: (val: number | null) => void;
};

export default function Tab({
  children,
  tab,
  selected,
  handleSetSelected,
}: TabPropsT) {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? 'bg-neutral-800 text-neutral-100'
          : 'text-neutral-400'
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
}
