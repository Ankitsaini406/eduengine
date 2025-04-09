"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-4xl px-6 py-3 rounded-xl bg-red-800/30 backdrop-blur-md shadow-lg border border-white/20"
        >
            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link href="/" className="text-lg font-bold text-white">
                <h1>Eduengine</h1>
                </Link>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
                {["About", "Services", "Contact"].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={`/${item.toLowerCase()}`} className="text-white text-sm font-medium hover:text-gray-300 transition">
                            {item}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-white text-xl"
            >
                ☰
            </motion.button>
        </motion.nav>
    );
}
