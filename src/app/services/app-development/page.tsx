"use client";

import FaqSection from "@/components/FrequentyQuestion";
import Image from "next/image";
import React from "react";

const appdata = [
    {
        question: "What types of apps do you develop?",
        answer:
            "We develop mobile (iOS & Android), web, hybrid, and cross-platform applications tailored to your business needs.",
    },
    {
        question: "How much does app development cost?",
        answer:
            "The cost varies based on the project's complexity, features, platforms, and timeline. We offer customized quotes after understanding your requirements.",
    },
    {
        question: "Will I own the source code of my app?",
        answer:
            "Yes, upon project completion and payment, you will fully own the source code and intellectual property rights.",
    },
    {
        question: "How long does it take to build an app?",
        answer:
            "Typical app development timelines range from 2 to 6 months depending on app complexity, features, and team size.",
    },
    {
        question: "Can you update or fix my existing app?",
        answer:
            "Absolutely! We offer maintenance, updates, bug fixes, and new feature additions for existing apps.",
    },
    {
        question: "What platforms do you develop apps for, and can you create apps that work on both iOS and Android?",
        answer:
            "We develop apps for multiple platforms including iOS, Android, and sometimes cross-platform solutions. Our team specializes in building native apps tailored to each platform to ensure the best performance and user experience. Additionally, we offer cross-platform app development using frameworks like React Native or Flutter, which allow us to create a single app that works seamlessly on both iOS and Android, saving you time and development costs.",
    },
];

const steps = [
    {
        title: "Requirement Gathering",
        img: "/services/app1.jpg",
        desc: "We start by understanding your vision, business goals, and target audience to define clear app objectives.",
    },
    {
        title: "Planning & Strategy",
        img: "/services/app2.jpg",
        desc: "We create a roadmap, select the right tech stack, and plan features, timelines, and resources.",
    },
    {
        title: "UI/UX Design",
        img: "/services/app3.jpg",
        desc: "Our design team crafts intuitive, engaging, and user-friendly interfaces that reflect your brand.",
    },
    {
        title: "App Development",
        img: "/services/app4.jpg",
        desc: "Our developers build the front-end and back-end using clean, scalable code with regular updates and reviews.",
    },
    {
        title: "Testing & QA",
        img: "/services/app5.jpg",
        desc: "We perform thorough testing to ensure your app is bug-free, secure, and runs smoothly on all target devices.",
    },
    {
        title: "Deployment",
        img: "/services/app6.jpg",
        desc: "We launch your app on the App Store, Google Play, or web platform with full support for approvals and publishing.",
    },
];

const AppDevelopment = () => {
    return (
        <div className="min-h-screen bg-radial from-[#0d0d0d] to-[#1a1a1a] px-4 py-16 ">
            {/* Top Section */}
                <div className="flex flex-wrap items-center justify-between gap-12 mb-16 max-w-7xl mx-auto">
                    <div className="max-w-xl flex-1 space-y-4">
                        <h2 className="text-4xl font-bold uppercase text-white">
                            We build powerful, user-friendly mobile and web apps tailored to your business needs.
                            From design to deployment, our expert team delivers innovative, scalable, and high-performance solutions that drive growth and engagement.
                        </h2>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            width={500}
                            height={500}
                            src="/services/app-development.webp"
                            alt="App Development"
                            className="rounded-xl max-w-full"
                        />
                    </div>
                </div>

            {/* Process Section */}
            <div className="text-center max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Our APP Development Process</h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            <div className="w-fit h-auto mx-auto mb-4 rounded-[20%] bg-[#222] flex items-center justify-center">
                                <Image
                                    width={500}
                                    height={500}
                                    src={step.img}
                                    alt={step.title}
                                    className="object-contain w-full h-full" />
                            </div>
                            <div className="p-4">
                            <h3 className="text-xl font-semibold text-white glowing-text mb-2">{step.title}</h3>
                            <p className="text-sm text-pink-100">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div>
                <FaqSection questions={appdata} />
            </div>
        </div>
    );
};

export default AppDevelopment;
