import React from "react";
import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/layout/FrequentyQuestion";
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

const faqQuestions = [
    {
        question: "How do I apply for a job at EduEngine?",
        answer:
            "You can apply for a job at EduEngine by visiting our Careers page, where you’ll find current openings. Submit your resume and any relevant portfolio through the application form provided.",
    },
    {
        question: "Do you offer remote or hybrid work options?",
        answer:
            "Yes, EduEngine offers flexible work options including remote and hybrid roles, depending on the job profile and team requirements.",
    },
    {
        question: "How soon will I hear back after applying?",
        answer:
            "We aim to respond to applicants within 5–7 business days. If your profile matches our needs, our HR team will contact you for the next steps.",
    },
    {
        question: "Internships or fresher roles available?",
        answer:
            "Absolutely! EduEngine regularly offers internship programs and entry-level roles to help freshers gain real-world experience and kickstart their careers.",
    },
    {
        question: "What benefits do you offer to employees?",
        answer:
            "We offer competitive salaries, flexible work hours, health insurance, professional development opportunities, and a collaborative work environment.",
    },
    {
        question: "What is the interview process like at EduEngine?",
        answer:
            "Our interview process typically involves an initial HR screening, a technical or role-specific round, and a final cultural fit interview. The process may vary slightly based on the position.",
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
                        <select className=" text-sm px-3 py-2 rounded-md focus:ring-1 bg-background">
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
            <FaqSection questions={faqQuestions} />
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

                <Link href="/career/apply" className="mt-4 sm:mt-0">
                    <button className="bg-indigo-600 cursor-pointer text-white text-sm font-semibold px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
                        Apply
                    </button>
                </Link>
            </div>
        </div>
    );
};

