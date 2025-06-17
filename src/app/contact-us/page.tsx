"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail, MdPerson, MdPhone } from "react-icons/md";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Contact Eduengine | Get in Touch for Digital Solutions",
        description:
            "Have questions or project ideas? Contact Eduengine for expert help with web development, mobile apps, cloud computing, AI, and cybersecurity solutions.",
        alternates: {
            canonical: "https://eduengine.in/contact-us",
        },
        keywords: [
            "Contact Eduengine",
            "Get in Touch",
            "Web Development Help",
            "Mobile App Development Support",
            "Cloud Solutions Contact",
            "AI Services Inquiry",
            "Cybersecurity Consultation",
            "Digital Agency Support",
            "Tech Project Discussion",
            "Hire Eduengine",
        ],
        openGraph: {
            title: "Contact Eduengine | Let's Build Something Great Together",
            description:
                "Reach out to our team for collaboration, project estimates, or general queries. Eduengine is here to support your digital journey.",
            url: "https://eduengine.in/contact-us",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/contact-hero.webp",
            //         width: 1200,
            //         height: 630,
            //         alt: "Contact Eduengine - Digital Innovation Team",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Eduengine | Start Your Digital Project Today",
            description:
                "Want to collaborate with Eduengine? Get in touch with our experts in web, mobile, AI, and cloud development.",
        },
    };
};


export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        contact: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "contact" ? value.replace(/\D/g, "") : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ fullName: '', email: '', contact: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus('error')
        }

        setTimeout(() => setStatus('idle'), 5000)
    }

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-[70vh] md:h-[90vh] w-full">
                <Image
                    src="/contact-us.webp"
                    alt="Contact Background"
                    fill
                    priority
                    className="z-0 object-cover object-top"
                />
                <div className="relative z-10 flex h-full w-full justify-end items-center bg-black/40 px-6 md:px-20">
                    <div className="md:w-1/2 backdrop-blur-md p-4 rounded-md bg-white/10">
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                            We are here to help you 24/7, so feel free to reach out anytime
                        </h3>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 px-8 py-16 gap-12 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]">
                {/* Left Image */}
                <div className="w-full ">
                    <Image
                        src="/contact-2.webp"
                        alt="Contact Visual"
                        width={400}
                        height={600}
                        className="rounded-tr-4xl rounded-bl-4xl object-cover w-full h-full"
                    />
                </div>

                {/* Contact Form */}
                <div className="w-full bg-white/5 p-6 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {[
                            { name: "fullName", type: "text", placeholder: "Full Name", icon: <MdPerson /> },
                            { name: "contact", type: "text", placeholder: "Contact Number", icon: <MdPhone /> },
                            { name: "email", type: "email", placeholder: "Email", icon: <MdOutlineEmail /> },
                        ].map(({ name, type, placeholder, icon }) => (
                            <div className="relative" key={name}>
                                <input
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    value={formData[name as keyof typeof formData]}
                                    onChange={handleChange}
                                    className="w-full pl-10 border-b-2 border-white/40 bg-transparent focus:outline-none py-2 placeholder:text-white/70 focus:border-yellow-400"
                                />
                                <div className="absolute left-0 top-2.5 text-yellow-300">{icon}</div>
                            </div>
                        ))}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border-b-2 border-white/40 bg-transparent focus:outline-none py-2 resize-none placeholder:text-white/70 focus:border-yellow-400"
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="bg-perimary hover:bg-perimary/80 cursor-pointer font-semibold py-3 px-6 rounded-2xl transition disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                        {status === "error" && (
                            <p className="text-red-400 text-center">Please fill out all fields before submitting.</p>
                        )}
                        {status === "success" && (
                            <p className="text-green-400 text-center">Your message has been sent successfully!</p>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="w-full flex flex-col justify-center pl-4">
                    <div className="text-lg space-y-8 mt-10 md:mt-20 text-white">
                        <div>
                            <p className="font-semibold text-yellow-300">Phone</p>
                            <p>+91 8233101033</p>
                        </div>
                        <div>
                            <p className="font-semibold text-yellow-300">Address</p>
                            <p>Chandpol, Sikar (Rajasthan) 332001</p>
                        </div>
                        <div className="flex space-x-6 mt-6">
                            {[
                                { href: "https://twitter.com", icon: <BsTwitterX /> },
                                { href: "https://twitter.com", icon: <TfiTwitter /> },
                                { href: "https://instagram.com", icon: <FaInstagram /> },
                                { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
                            ].map(({ href, icon }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-300 hover:text-yellow-400 transition-transform text-2xl hover:scale-125"
                                >
                                    {icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
