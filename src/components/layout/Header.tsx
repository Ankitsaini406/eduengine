'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { title: 'Services', link: '/services' },
        { title: 'Contact Us', link: '/contact-us' },
        { title: 'Careers', link: '/careers' }
    ];


    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md shadow-lg border-b border-white/20 ">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between ">
                    {/* Logo */}
                    <div>
                        <Link href="/" className="text-lg font-bold text-white">
                            <Image
                                src="/logo.webp"
                                alt="Eduengine"
                                width={200}
                                height={100}
                                className="object-fill h-14 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={`${item.link}`}
                                className="text-white text-sm font-medium hover:text-gray-300 transition"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white text-2xl focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col items-start gap-4 pb-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={`${item.link}`}
                                className="text-white text-sm font-medium hover:text-gray-300 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
