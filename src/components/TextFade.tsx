"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextFade({
    titles,
    interval = 2500,
}: {
    titles: string[];
    interval?: number;
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, interval);
        return () => clearInterval(intervalId);
    }, [interval, titles.length]);

    return (
        <div className="relative h-[40px] md:h-[50px] w-full overflow-hidden text-2xl md:text-5xl font-bold">
            <AnimatePresence mode="wait">
                <motion.div
                    key={titles[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full text-center"
                >
                    <motion.span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(270deg, #f43f5e, #facc15, #10b981, #f43f5e)",
                            backgroundSize: "600% 100%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {titles[index]}
                    </motion.span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
