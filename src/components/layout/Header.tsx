"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { title: "Services", link: "/services" },
        { title: "Contact Us", link: "/contact-us" },
        { title: "About Us", link: "/about-us" },
        { title: "Careers", link: "/careers" },
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg border-b bg-background/50 border-white/20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-lg font-bold text-white">
                        <Image
                            src="/logo.webp"
                            alt="Eduengine"
                            width={200}
                            height={100}
                            className="object-fill h-14 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="text-white font-medium hover:text-gray-300 transition"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden text-white text-2xl"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer + Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40 h-screen"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.aside
                            className="fixed top-0 right-0 h-screen w-64 bg-gray-900 text-white z-50 shadow-xl p-6"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-semibold">Menu</h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Close menu"
                                    className="text-2xl"
                                >
                                    ×
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className="text-white font-medium hover:text-gray-300 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
