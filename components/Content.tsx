'use client';

import { motion } from 'framer-motion';

type ContentPropsT = {
  selected: number | null;
  dir: null | 'l' | 'r';
};

export default function Content({ selected, dir }: ContentPropsT) {
  return <motion.div className='w-24 h-24 bg-red-800'></motion.div>;
}
