// src/components/AnimatedPage.tsx
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const animation = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 },
};

// ✅ Type the props using React.FC alternative
interface AnimatedPageProps {
    children: ReactNode;
}

const AnimatedPage = (props: AnimatedPageProps) => {
    const { children } = props
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation}
            transition={{ duration: 0.6, type: 'spring' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
