import React from "react";
import Image from "next/image";
import FaqSection from "@/components/FrequentyQuestion";
import { Metadata } from "next";

const appdata = [
    {
        question: "What types of apps do you develop?",
        answer: "We develop mobile (iOS & Android), web, hybrid, and cross-platform applications tailored to your business needs.",
    },
    {
        question: "How much does app development cost?",
        answer: "The cost varies based on the project's complexity, features, platforms, and timeline. We offer customized quotes after understanding your requirements.",
    },
    {
        question: "Will I own the source code of my app?",
        answer: "Yes, upon project completion and payment, you will fully own the source code and intellectual property rights.",
    },
    {
        question: "How long does it take to build an app?",
        answer: "Typical app development timelines range from 2 to 6 months depending on app complexity, features, and team size.",
    },
    {
        question: "Can you update or fix my existing app?",
        answer: "Absolutely! We offer maintenance, updates, bug fixes, and new feature additions for existing apps.",
    },
    {
        question: "What platforms do you develop apps for, and can you create apps that work on both iOS and Android?",
        answer: "We develop apps for multiple platforms including iOS, Android, and sometimes cross-platform solutions. Our team specializes in building native apps tailored to each platform to ensure the best performance and user experience. Additionally, we offer cross-platform app development using frameworks like React Native or Flutter, which allow us to create a single app that works seamlessly on both iOS and Android, saving you time and development costs.",
    },
];

const steps = [
    {
        title: "Android App Development",
        img: "/services/app/app1.webp",
        desc: "Build high-performing Android apps tailored to your business needs.",
    },
    {
        title: "iOS App Development",
        img: "/services/app/app2.webp",
        desc: "Create smooth and intuitive iOS apps for a superior user experience.",
    },
    {
        title: "Cross-Platform Apps",
        img: "/services/app/app3.webp",
        desc: "Develop apps that work seamlessly across both Android and iOS platforms.",
    },
    {
        title: "UI/UX Design",
        img: "/services/app/app4.webp",
        desc: " We design user interfaces that are intuitive and enhance user experience.",
    },
    {
        title: "Testing & QA",
        img: "/services/app/app5.webp",
        desc: "We perform thorough testing to ensure your app is bug-free, secure, and runs smoothly on all target devices.",
    },
    {
        title: "Deployment",
        img: "/services/app/app6.webp",
        desc: "We launch your app on the App Store, Google Play, or web platform with full support for approvals and publishing.",
    },
];

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Custom Mobile App Development | Android, iOS & Cross-Platform Solutions",
        description:
            "Bring your ideas to life with secure, scalable mobile apps. Expert Android, iOS, and cross-platform development with seamless UX/UI for top-tier user experiences.",
        alternates: {
            canonical: "https://eduengine.in/services/app-development",
        },
        keywords: [
            "App Development Services",
            "Mobile App Development",
            "iOS App Development",
            "Android App Development",
            "Cross-Platform Apps",
            "Eduengine App Solutions",
            "Web App Development",
            "Custom Software Development",
        ],
        openGraph: {
            title: "App Development Services | iOS, Android & Web Solutions | Eduengine",
            description:
                "Launch powerful iOS, Android, and web applications with Eduengine. From UI/UX to deployment, we create custom apps that engage users and grow businesses.",
            url: "https://eduengine.in/services/app-development",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/og-app-development.jpg",
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine App Development Services",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Mobile & Web App Development Services | Eduengine",
            description:
                "Eduengine builds custom Android, iOS, and web applications with seamless performance and modern design. Let's bring your app idea to life.",
            // images: ["https://eduengine.in/og-app-development.jpg"],
        },
    };
};


export default async function Page() {
    return (
        <div className="min-h-screen bg-radial from-[#0d0d0d] to-[#1a1a1a] px-4 py-16">

            {/* Top Section */}
            <div className="flex flex-wrap items-center justify-between gap-12 mb-16 max-w-7xl mx-auto">
                <div className="max-w-xl flex-1 space-y-4">
                    <h1 className="text-4xl font-bold">
                        We build powerful, user-friendly mobile and web apps tailored to your business needs.
                    </h1>
                    <h2>
                        In today’s digital world, a mobile app can significantly boost your business’s reach and engagement. At Eduengine, we offer end-to-end mobile app development services, including strategy, design, development, and maintenance.
                    </h2>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image
                        width={500}
                        height={500}
                        src="/services/app/app-development.webp"
                        alt="App Development"
                        className="rounded-xl max-w-full"
                    />
                </div>
            </div>

            {/* Process Section */}
            <div className="text-center max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Our App Development Process</h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            <div className="w-fit h-[210px] mx-auto mb-4 rounded-[20%] bg-[#222] flex items-center justify-center">
                                <Image
                                    width={500}
                                    height={500}
                                    src={step.img}
                                    alt={step.title}
                                    className="object-cover w-full h-full"
                                />
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
