'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
// import Image from 'next/image';

const splashVariants = {
    initial: { opacity: 1 },
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.4, ease: 'easeInOut' },
    },
};

const nameVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

// const logoVariants = {
//     initial: { scale: 0.8, opacity: 0 },
//     animate: {
//         scale: 1,
//         opacity: 1,
//         transition: { duration: 0.5, ease: 'easeOut' },
//     },
// };

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => setIsVisible(false), 1200);
        setIsVisible(true);
        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) return null;

    return (
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    variants={splashVariants}
                    initial="initial"
                    animate="initial"
                    exit="exit"
                    className="fixed inset-0 z-[99] w-full h-full flex flex-col items-center justify-center bg-black text-white"
                    style={{ willChange: 'opacity, transform' }}
                >
                    {/* <motion.div
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        className="mb-4"
                        style={{ willChange: 'opacity, transform' }}
                    >
                        <Image
                            src="/favicon.ico"
                            alt="Eduengine Pvt. Lmt."
                            width={120}
                            height={120}
                            priority
                        />
                    </motion.div> */}
                    <motion.h1
                        variants={nameVariants}
                        initial="initial"
                        animate="animate"
                        className="text-2xl font-semibold tracking-wide"
                        style={{ willChange: 'opacity, transform' }}
                    >
                        Eduengine Pvt. Lmt.
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
