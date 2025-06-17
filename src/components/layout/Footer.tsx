"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { PiThreadsLogoBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const serviceLinks = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Cloud Computing", href: "/services/cloud-computing" },
    { name: "Machine Learning", href: "/services/machine-learning" },
    { name: "Cyber Security", href: "/services/cyber-security" },
];

const aboutLinks = [
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
];

export default function Footer() {
    const [openSection, setOpenSection] = useState<"services" | "about" | null>(null);

    const toggleAccordion = (section: "services" | "about") => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    return (
        <footer className="relative bg-foreground text-background py-10 px-6 lg:px-12 rounded-t-4xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Top: Social + Newsletter */}
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-6 max-w-md">
                        <span className="text-2xl lg:text-3xl font-bold">Get In Touch</span>
                        <div className="flex flex-wrap gap-4">
                            <Link href="https://www.facebook.com/eduenginetech" aria-label="Facebook" target="_blank" className="hover:text-background/80 transition"><Facebook size={20} /></Link>
                            <Link href="https://x.com/eduenginetech" target="_blank" aria-label="Twitter" className="hover:text-background/80 transition"><Twitter size={20} /></Link>
                            <Link href="https://www.instagram.com/eduenginetech/" aria-label="Instagram" target="_blank" className="hover:text-background/80 transition"><Instagram size={20} /></Link>
                            <Link href="https://www.linkedin.com/company/eduengine/" aria-label="Linkedin" target="_blank" className="hover:text-background/80 transition"><Linkedin size={20} /></Link>
                            <Link href="https://www.threads.net/@officialeduengine" aria-label="Tread" target="_blank" className="hover:text-background/80 transition"><PiThreadsLogoBold size={20} /></Link>
                            <Link href="https://www.youtube.com/@eduenginetech" aria-label="You Tube" target="_blank" className="hover:text-background/80 transition"><Youtube size={20} /></Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full md:max-w-md">
                        <span className="text-2xl lg:text-3xl font-semibold">Subscribe to Newsletter</span>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-0 items-center relative">
                            <div className="relative w-full">
                                <input
                                    placeholder="Email Address"
                                    className="w-full pl-10 pr-4 py-2  rounded-md md:rounded-r-none bg-background text-foreground border border-background/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <Image src="/mail.webp" alt="email icon" width={24} height={24} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            <button className="bg-red-600 hover:bg-red-500 cursor-pointer text-white font-semibold px-4 py-[8.7px] rounded-md md:rounded-l-none transition">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Link Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                    {/* Services Accordion */}
                    <div className="w-full md:w-fit border-b pb-2.5 md:py-0 md:border-b-0">
                        <div className="cursor-pointer md:cursor-default" onClick={() => toggleAccordion("services")}>
                            <p className="text-xl md:text-2xl font-semibold flex justify-between items-center">
                                Services
                                <span className="md:hidden">{openSection === "services" ? "−" : "+"}</span>
                            </p>
                        </div>
                        <AnimatePresence initial={false}>
                            {openSection === "services" && (
                                <motion.div
                                    key="services"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden md:hidden space-y-2 mt-3"
                                >
                                    <ul className="space-y-2 mt-3">
                                        {serviceLinks.map(({ name, href }) => (
                                            <li key={name} className="group relative overflow-hidden">
                                                <Link href={href} target="_blank" className="relative z-10 inline-block">
                                                    {name}
                                                    <span className="absolute -ml-2 group-hover:ml-0 left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <ul className="hidden md:block md:space-y-2 mt-3">
                            {serviceLinks.map(({ name, href }) => (
                                <li key={name} className="group relative overflow-hidden">
                                    <Link href={href} target="_blank" className="relative z-10 inline-block">
                                        {name}
                                        <span className="absolute -ml-2 group-hover:ml-0 left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Accordion */}
                    <div className="w-full md:w-fit border-b pb-2.5 md:py-0 md:border-b-0">
                        <div className="cursor-pointer md:cursor-default" onClick={() => toggleAccordion("about")}>
                            <p className="text-xl md:text-2xl font-semibold flex justify-between items-center">
                                About
                                <span className="md:hidden">{openSection === "about" ? "−" : "+"}</span>
                            </p>
                        </div>
                        <AnimatePresence initial={false}>
                            {openSection === "about" && (
                                <motion.div
                                    key="about"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden md:hidden space-y-2 mt-3"
                                >
                                    <ul className="space-y-2 mt-3">
                                        {aboutLinks.map(({ name, href }) => (
                                            <li key={name} className="group relative overflow-hidden">
                                                <Link href={href} target="_blank" className="relative z-10 inline-block">
                                                    {name}
                                                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <ul className="hidden md:block space-y-2 mt-3">
                            {aboutLinks.map(({ name, href }) => (
                                <li key={name} className="group relative overflow-hidden">
                                    <Link href={href} target="_blank" className="relative z-10 inline-block">
                                        {name}
                                        <span className="absolute -ml-2 left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="font-semibold text-lg">Location</p>
                            <span>Chandpol, Sikar (Rajasthan) - 332001</span>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Email</p>
                            <Link href="mailto:director@eduengine.com">
                                director@eduengine.com
                            </Link>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Contact No.</p>
                            <span>+91 82331 01033</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-background/20 text-center text-sm">
                    © {new Date().getFullYear()} Eduengine. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
