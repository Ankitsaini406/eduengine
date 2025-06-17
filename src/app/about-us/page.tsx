import React from 'react';
import Link from "next/link";
import { Metadata } from 'next';

interface ProjectItem {
    src: string;
    href: string;
    external: boolean;
}

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "About Eduengine | Digital Solutions for Business Growth",
        description:
            "Eduengine offers expert digital solutions—marketing, app development, AI, design & cybersecurity—to help businesses grow and thrive in the digital era.",
        alternates: {
            canonical: "https://eduengine.in/about-us",
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

    const projects: ProjectItem[] = [
        {
            src: "/videos/webraintech.mp4",
            href: "https://webraintech.in/",
            external: true,
        },
        {
            src: "/videos/eduweb.mp4",
            href: "https://eduengine.in/",
            external: true,
        },
        {
            src: "/videos/tripwayweb.mp4",
            href: "https://tripwayholidays.in/",
            external: true,
        },
    ];

    return (
        <div className="w-full min-h-screen">
            <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute h-full w-full z-0">
                    <video
                        src="/videos/about-us.mp4"
                        loop
                        autoPlay
                        muted
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-5">ABOUT US</h1>
                    <h5 className="text-xl sm:text-2xl font-semibold mb-6 max-w-3xl">
                        Empowering Your Business with Innovative Digital Solutions and
                        Specialized Services That Transform Ideas Into Reality.
                    </h5>
                    <p className="opacity-60 max-w-3xl">
                        We offer comprehensive digital solutions, including expert Digital
                        Marketing to grow your brand, App Development to build innovative
                        mobile experiences, Cybersecurity to protect your business, and
                        Website Development to create high-performing online platforms.
                    </p>
                </div>
            </div>

            <div className="w-full py-20">
                <div className="flex flex-wrap justify-center gap-6 px-6">
                    {projects.map((item, idx) =>
                        <Link
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-[48%] md:w-[30%] h-60 rounded-lg overflow-hidden relative"
                        >
                            <video
                                src={item.src}
                                loop
                                autoPlay
                                muted
                                className="filter blur-xs group-hover:blur-0"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}


