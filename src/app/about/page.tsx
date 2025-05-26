import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
    src: string;
    href: string;
    external: boolean;
}

export default function Page() {

    const projects: ProjectItem[] = [
        {
            src: "/assest/webrainweb.gif",
            href: "https://webraintech.in/",
            external: true,
        },
        {
            src: "/gif/eduweb.gif",
            href: "https://eduengine.in/",
            external: true,
        },
        {
            src: "/gif/tripwayweb.gif",
            href: "https://tripwayholidays.in/",
            external: true,
        },
    ];

    return (
        <div className="w-full min-h-screen">
            <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/gif/about-us.gif"
                        alt="Background"
                        fill
                        priority
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
                            <Image
                                src={item.src}
                                alt={`project ${idx + 1}`}
                                fill
                                className="filter blur-xs group-hover:blur-0"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}


