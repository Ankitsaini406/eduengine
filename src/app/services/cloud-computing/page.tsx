import React from "react";
import Image from "next/image";
import FaqSection from "@/components/FrequentyQuestion";
import { Metadata } from "next";

const faqcloud = [
    {
        question: " What types of cloud services do you offer (IaaS, PaaS, SaaS)?",
        answer:
            "We offer a full range of cloud services including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Whether you need virtual servers and storage, application development platforms, or ready-to-use software solutions, we tailor the services to fit your business needs.",
    },
    {
        question: "How secure is my data in the cloud?",
        answer:
            "Security is our top priority. We implement industry-standard encryption, multi-factor authentication, and regular security audits to protect your data. Our cloud solutions comply with major regulations like GDPR and HIPAA to ensure your sensitive information is safe at all times.",
    },
    {
        question: "Can you help migrate our existing systems to the cloud?",
        answer:
            "Absolutely. We provide end-to-end cloud migration services, from planning and assessment to execution and post-migration support. Our experts ensure minimal downtime and data integrity throughout the process, making your transition smooth and efficie",
    },
    {
        question: "What is the typical cost structure for cloud computing services?",
        answer:
            "Costs vary depending on your usage, service type, and cloud provider. We work with you to design a cost-efficient plan, often based on a pay-as-you-go model, so you only pay for what you use. We also help optimize your cloud resources to minimize expenses without compromising performance.",
    },
    {
        question: "What cloud platforms do you support (AWS, Azure, Google Cloud)?",
        answer:
            "We have expertise in all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). This allows us to recommend and implement the best platform based on your unique technical and budgetary requirements.",
    },
    {
        question: "How do you ensure high availability and disaster recovery for cloud applications?",
        answer:
            "We design cloud architectures with redundancy, load balancing, and automated failover to maximize uptime. Additionally, we implement robust backup and disaster recovery plans to quickly restore services in case of any unexpected events.",
    },
];

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Scalable Cloud Computing Services | Hosting, Data Storage & Security",
        description:
            "Optimize your business with secure cloud hosting, data storage, and cloud security solutions. Expert cloud migration and app development services to fuel growth.",
        alternates: {
            canonical: "https://eduengine.in/services/cloud-computing",
        },
        keywords: [
            "Cloud Computing Services",
            "Cloud Infrastructure",
            "DevOps Automation",
            "AWS Cloud Services",
            "Azure Cloud Solutions",
            "Cloud Migration",
            "Scalable Cloud Hosting",
            "Eduengine Cloud Solutions",
        ],
        openGraph: {
            title: "Cloud Infrastructure & DevOps Services | Secure & Scalable Solutions",
            description:
                "Eduengine provides end-to-end cloud computing services — from infrastructure setup to CI/CD pipelines and cloud-native app deployment. Build faster. Scale smarter.",
            url: "https://eduengine.in/services/cloud-computing",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/og-cloud-computing.jpg",
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Cloud Computing Services",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Cloud Computing & DevOps Services | Eduengine",
            description:
                "Boost your infrastructure with secure, scalable cloud solutions. Eduengine specializes in AWS, Azure, CI/CD, and cloud-native architecture for modern businesses.",
            // images: ["https://eduengine.in/og-cloud-computing.jpg"],
        },
    };
};

export default function Page() {
    const services = [
        {
            title: "Infrastructure as a Service (IaaS)",
            description:
                "Provides virtualized computing resources over the internet, such as servers, storage, and networking.",
            img: "/services/cloud/iaas.webp",
        },
        {
            title: "Platform as a Service (PaaS)",
            description:
                "PaaS delivers a cloud-based environment for developers to build, deploy, and manage applications. It includes everything from development tools, middleware, to the operating system.",
            img: "/services/cloud/paas.webp",
        },
        {
            title: "Cloud Hosting",
            description:
                "Secure, reliable cloud hosting solutions for businesses of all sizes.",
            img: "/services/cloud/saas.webp",
        },
        {
            title: "Security as a Service (SECaaS)",
            description:
                "Provides cloud-based security solutions, including firewalls, antivirus, and encryption, to protect against cyber threats.",
            img: "/services/cloud/globe-grid.webp",
        },
        {
            title: "Backup as a Service (BaaS)",
            description:
                "Automatically backs up data to the cloud, ensuring disaster recovery and protection from data loss.",
            img: "/services/cloud/data-recovery.webp",
        },
        {
            title: "Function as a Service / Serverless Computing",
            description:
                "Allows developers to run code in response to events without managing servers, scaling automatically as needed.",
            img: "/services/cloud/innovation.webp",
        },
        {
            title: "Storage as a Service (STaaS)",
            description:
                "Provides scalable, on-demand storage solutions over the cloud, allowing businesses to store and access data securely.",
            img: "/services/cloud/cloud-sync.webp",
        },
        {
            title: "Database as a Service (DBaaS)",
            description:
                "Offers managed databases in the cloud, eliminating the need for physical hardware and simplifying database management.",
            img: "/services/cloud/database.webp",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row justify-around items-center pt-15 md:pt-0 px-8 bg-black text-white relative">
                <div className="w-full md:w-[65%] lg:w-[60%] xl:w-[40%]">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl bg-black font-bold leading-snug mb-4">
                        Empowering Business Growth Through Secure<br />
                        <span className="text-[#00f0ff]">Cloud Computing</span>
                    </h1>
                    <h2 className="text-sm lg:text-lg mb-4 opacity-70">
                        Cloud computing is key to improving efficiency and ensuring scalability for modern businesses. At Eduengine, we offer comprehensive cloud computing solutions to help you scale your operations with ease.
                    </h2>
                </div>

                <div className="mb-8 lg:mb-0">
                    <Image
                        src="/services/cloud/cloud-banner.webp"
                        alt="Cybersecurity Illustration"
                        width={600}
                        height={400}
                        className="max-w-full bg-black rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="md:container mx-auto px-4 text-center ">
                <h3 className="text-2xl lg:text-4xl my-8 tracking-wide pb-2">
                    SERVICES WE OFFER
                </h3>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 px-4 md:px-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-[1px] rounded-xl bg-gradient-to-r from-white to-[#00f0ff]"
                        >
                            <div className="group bg-black p-8 rounded-xl transition-all relative text-center h-full overflow-hidden">
                                <div className="mb-6 overflow-hidden rounded-xl flex justify-center">
                                    <Image
                                        width={80}
                                        height={80}
                                        src={service.img}
                                        alt={service.title}
                                        className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="text-2xl font-bold text-[#00f0ff] mb-4">
                                    {service.title}
                                </h4>
                                <h5
                                    className="text-base text-gray-300 leading-relaxed text-center"
                                    dangerouslySetInnerHTML={{ __html: service.description }}
                                />
                                {/* Optional overlay effect */}
                                <div className="absolute inset-0 bg-[#00f0ff]/10 opacity-0 rounded-xl pointer-events-none transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
            <FaqSection questions={faqcloud} />
        </>
    );
};
