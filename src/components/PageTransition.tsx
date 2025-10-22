import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type Props = PropsWithChildren<{
  direction?: number; // 1 = forward (left), -1 = back (right)
}>;

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function PageTransition({ children, direction = 1 }: Props) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

