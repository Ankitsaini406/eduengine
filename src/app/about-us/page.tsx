import React from 'react';
import Link from "next/link";

interface ProjectItem {
    src: string;
    href: string;
    external: boolean;
}

export default function Page() {

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


