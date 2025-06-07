import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { PiThreadsLogoBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-10 px-6 lg:px-12 rounded-t-4xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Contact & Socials */}
                    <div className="flex flex-col gap-6 max-w-md">
                        <h4 className="text-2xl lg:text-3xl font-bold">Get In Touch</h4>
                        <div className="flex flex-wrap gap-4">
                            <Link href="https://www.facebook.com/eduenginetech" target="_blank" className="hover:text-background/80 transition"><Facebook size={20} /></Link>
                            <Link href="https://x.com/eduenginetech" target="_blank" className="hover:text-background/80 transition"><Twitter size={20} /></Link>
                            <Link href="https://www.instagram.com/eduenginetech/" target="_blank" className="hover:text-background/80 transition"><Instagram size={20} /></Link>
                            <Link href="https://www.linkedin.com/company/eduengine/" target="_blank" className="hover:text-background/80 transition"><Linkedin size={20} /></Link>
                            <Link href="https://www.threads.net/@officialeduengine" target="_blank" className="hover:text-background/80 transition"><PiThreadsLogoBold size={20} /></Link>
                            <Link href="https://www.youtube.com/@eduenginetech" target="_blank" className="hover:text-background/80 transition"><Youtube size={20} /></Link>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-6 w-full md:max-w-md">
                        <h4 className="text-2xl lg:text-3xl font-semibold">Subscribe to Newsletter</h4>
                        <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                            <div className="relative w-full">
                            <input
                                placeholder="Email Address"
                                className="relative w-full flex-1 pl-10 pr-4 py-2 rounded-md bg-background text-foreground border border-background/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            <Image src="/mail.png" alt="email icon" width={24} height={24} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                                </div>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    {/* Services */}
                    <div>
                        <h5 className="text-xl font-semibold mb-3">Services</h5>
                        <ul className="space-y-2">
                            {[
                                { name: "Web Development", href: "/services/web-devlopmnet" },
                                { name: "App Development", href: "/services/app-devlopmnet" },
                                { name: "Graphic Design", href: "/services/graphic-design" },
                                { name: "Cloud Computing", href: "/services/cloud-computing" },
                                { name: "Machine Learning", href: "/services/machine-learning" },
                                { name: "Cyber Security", href: "/services/cyber-security" },
                            ].map(({ name, href }) => (
                                <li key={name} className="group relative overflow-hidden">
                                    <Link href={href} className="relative z-10 inline-block">
                                        {name}
                                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h5 className="text-xl font-semibold mb-3">About</h5>
                        <ul className="space-y-2">
                            {[
                                { name: "Contact Us", href: "/contact-us" },
                                { name: "About Us", href: "/about-us" },
                                { name: "Careers", href: "/careers" },
                            ].map(({ name, href }) => (
                                <li key={name} className="group relative overflow-hidden">
                                    <Link href={href} className="relative z-10 inline-block">
                                        {name}
                                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h5 className="font-semibold text-lg">Location</h5>
                            <p>Chandpol, Sikar (Rajasthan) - 332001</p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-lg">Email</h5>
                            <p>director@eduengine.com</p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-lg">Contact No.</h5>
                            <p>+91 82331 01033</p>
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
