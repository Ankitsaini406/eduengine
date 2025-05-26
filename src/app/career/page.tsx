import React from "react";
import Link from "next/link";
import Image from "next/image";
// import FaqSection from "../faqsection/page";

interface Job {
    title: string;
    icon: string;
    location: string;
}

interface JobCardProps {
    job: Job;
}

const jobs: Job[] = [
    {
        title: "CyberSecurity Expert",
        icon: "/career/hacker.png",
        location: "SIKAR",
    },
    {
        title: "Graphic Designer",
        icon: "/career/graphic-designer.png",
        location: "SIKAR",
    },
    {
        title: "Digital Marketing",
        icon: "/career/social-media.png",
        location: "SIKAR",
    },
    {
        title: "Full Stack Developer",
        icon: "/career/app-development.png",
        location: "SIKAR",
    },
    {
        title: "Android Developer",
        icon: "/career/android.png",
        location: "SIKAR",
    },
    {
        title: "Content Writing",
        icon: "/career/content-writing.png",
        location: "SIKAR",
    },
];

export default function Page() {
    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <div className="relative h-[80vh] lg:h-[90vh] w-full object-cover ">
                <Image
                    src="/career/career.jpg"
                    alt="Career Hero"
                    fill
                    className="brightness-50 object-cover"
                />
                <div className="absolute inset-0  bg-opacity-20 flex flex-col justify-center items-start px-6 md:px-20 text-white z-10">
                    <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up">
                        Build Your <br />
                        Future with Us
                    </h1>
                    <p className="mt-6 text-lg lg:text-xl max-w-2xl text-white/90">
                        No matter where you are in the world, you can be a part of our growing team.
                        We offer flexible, remote opportunities so you can build your career from the comfort of your home.
                    </p>
                </div>
            </div>

            {/* Jobs Section */}
            <section className=" px-6 md:px-20 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold">All Jobs</h2>
                        <p className="text-sm text-gray-400 mt-1">Showing {jobs.length} results</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label className="text-sm text-gray-400 mr-2">Sort by:</label>
                        <select className=" border border-gray-300 text-sm px-3 py-2 rounded-md shadow-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                            <option>Most relevant</option>
                            <option>Newest</option>
                            <option>Location</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {jobs.map((job) => (
                        <JobCard key={job.title} job={job} />
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <div>
                {/* <FaqSection questions={faqData} /> */}
            </div>
        </div>
    );
};

function JobCard({ job }: JobCardProps) {
    return (
        <div className="group transform transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-200 p-4 rounded-2xl bg-white shadow-md">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
                <div className="flex items-start space-x-4">
                    <div className="relative w-20 h-20">
                        <Image src={job.icon} alt={job.title} fill className="object-contain" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                            {job.title}
                        </h3>
                        <p className="text-sm text-gray-600">Location • {job.location}</p>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                                Full-Time
                            </span>
                            <span className="bg-yellow-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                                Marketing
                            </span>
                            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                                Design
                            </span>
                        </div>
                    </div>
                </div>

                <Link href="/Apply">
                    <button className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
                        Apply
                    </button>
                </Link>
            </div>
        </div>
    );
};

