import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { PiThreadsLogoBold } from "react-icons/pi";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                
                {/* Brand Info */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-white">Eduengine</h2>
                    <p className="text-sm text-gray-400 mt-1">Empowering digital solutions for a smarter future.</p>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="text-sm hover:text-white transition">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm hover:text-white transition">
                        Terms of Service
                    </Link>
                    <Link href="/contact" className="text-sm hover:text-white transition">
                        Contact Us
                    </Link>
                </nav>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="https://www.facebook.com/eduenginetech" target="_blank" className="hover:text-white transition">
                        <Facebook size={20} />
                    </Link>
                    <Link href="https://x.com/eduenginetech" target="_blank" className="hover:text-white transition">
                        <Twitter size={20} />
                    </Link>
                    <Link href="https://www.instagram.com/eduenginetech/" target="_blank" className="hover:text-white transition">
                        <Instagram size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/eduengine/" target="_blank" className="hover:text-white transition">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://www.threads.net/@officialeduengine" target="_blank" className="hover:text-white transition">
                        <PiThreadsLogoBold size={20} />
                    </Link>
                    <Link href="https://www.youtube.com/@eduenginetech" target="_blank" className="hover:text-white transition">
                        <Youtube size={20} />
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Eduengine. All rights reserved.
            </div>
        </footer>
    );
}
