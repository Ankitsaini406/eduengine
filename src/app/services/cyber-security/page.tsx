import React from "react";
import Image from "next/image";
import FaqSection from "@/components/FrequentyQuestion";

const cyberdata = [
    {
        question: "What Cyber security do you provide?",
        answer:
            "We provide a range of services including vulnerability assessments, penetration testing, firewall and network security, endpoint protection, data encryption, incident response, malware removal, and cybersecurity consulting for businesses of all sizes."
    },
    {
        question: "Why is cybersecurity important for my business?",
        answer:
            "Cybersecurity is crucial as it protects your business from data breaches and cyber attacks, ensuring the integrity and confidentiality of your information."
    },
    {
        question: "What types of businesses do you work with?",
        answer:
            "We work with various industries including finance, healthcare, retail, and more.",
    },
    {
        question: "How do you assess the security of a company?",
        answer:
            "We perform comprehensive security assessments that include vulnerability scanning and risk analysis."
    },
    {
        question: "Do you offer 24/7 security monitoring?",
        answer:
            "Yes, we provide round-the-clock security monitoring to ensure the utmost protection.n",
    },
    {
        question: "How often should a business conduct security audits?",
        answer:
            "It's recommended to conduct security audits at least annually, or more frequently for businesses handling sensitive data or operating in high-risk industries. Regular audits help identify vulnerabilities, ensure compliance, and strengthen your overall security posture.",
    }
];

const Cybersecurity = () => {
    const services = [
        {
            title: "Incident Response & Digital Forensics",
            description:
                "Our specialized team quickly identifies and neutralizes security breaches while conducting indepth forensic  analysis to trace their origins. We help you recover swiftly and strengthen your defenses—ensuring your operations stay secure and uninterrupted.",
            img: "/services/cyber-security/user.png",
        },
        {
            title: "Data Protection with Advanced Encryption",
            description:
                "Shield your sensitive information—both in storage and during transmission—with enterprise-grade encryption. Our end-to-end solutions ensure confidentiality, data integrity, and strong defense against unauthorized access and cyber threats.",
            img: "/services/cyber-security/key.png",
        },
        {
            title: "Comprehensive Protection for Every Device",
            description:
                "Our all-in-one endpoint security solutions shield your devices and networks from malware, ransomware, and evolving cyber threats. With real-time detection and rapid response, we help protect sensitive data and keep your business running without interruption.",
            img: "/services/cyber-security/lock.png",
        },
        {
            title: "Network Security Solutions",
            description:
                "Protect your infrastructure from unauthorized access and data breaches with cutting-edge security solutions. Stay ahead of evolving threats and ensure network integrity with powerful firewalls and proactive defense strategies.",
            img: "/services/cyber-security/network.png",
        },
        {
            title: "Cloud Security Solution",
            description:
                "Protect your infrastructure from unauthorized access and data breaches with cutting-edge security solutions. Stay ahead of evolving threats and ensure network integrity with powerful firewalls and proactive defense strategies.",
            img: "/services/cyber-security/cloud.png",
        },
        {
            title: "Security Awareness Training",
            description:
                "Equip your employees with the knowledge and skills to identify and prevent cyber threats. Our tailored security awareness training programs promote best practices, minimize human error, and fortify your organization’s security framework.",
            img: "/services/cyber-security/secure-shield.png",
        },
        {
            title: "Backup & Disaster Recovery",
            description:
                "Protect your critical data and recover quickly from any disruption with our automated backup and disaster recovery services. We provide secure, encrypted backups with fast restoration to keep your operations running no matter what",
            img: "/services/cloud/cloud-sync.png",
        },
        {
            title: "Threat Intelligence & Monitoring",
            description:
                "Stay ahead of cyber threats with continuous monitoring and actionable threat intelligence. Our platform aggregates global threat data and uses AI-driven analytics to detect anomalies and prevent attacks before they impact your business",
            img: "/services/cyber-security/performance.png",
        },
    ];

    return (
        <section className="pt-15">
            {/* Flex container: text left, image right */}
            <div className="px-6 container mx-auto flex flex-col md:flex-row justify-center items-center mb-16">
                {/* Text content on left */}
                <div className="w-full md:w-[50%] lg:w-[40%] text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
                        Integrated <span className="text-cyan-400">Cybersecurity </span>
                        Strategies to Drive Growth
                        and Ensure Resilience.
                    </h1>

                    <p className="leading-relaxed mb-8 opacity-70">
                        Unlock Your Business&apos;s Potential with Advanced Cybersecurity.
                        Ensure sustainable growth and operational resilience in an ever-evolving
                        digital landscape.
                    </p>

                    {/* <a
                        href="#contact"
                        className="inline-block px-8 py-3 border-2 border-cyan-400 text-white rounded-full text-lg bg-transparent transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1"
                    >
                        TALK WITH US
                    </a> */}
                </div>

                {/* Image on right */}
                <div className="">
                    <Image
                        src="/services/cyber-security/cyberbanner.png"
                        alt="Cybersecurity Illustration"
                        width={600}
                        height={300}
                        className=""
                    />
                </div>
            </div>

            {/* Services Grid */}
            <h2 className="text-2xl lg:text-4xl my-8 tracking-wide pb-2 text-center">
                SERVICES WE OFFER
            </h2>
            <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-[#080808] p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden text-center"
                    >
                        {/* Hover overlay: behind the content */}
                        <div
                            className="absolute inset-0 bg-teal-950 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-0"
                        />

                        {/* Content wrapper: make sure text and image are above overlay */}
                        <div className="relative z-10">
                            {/* Image */}
                            <div className="mb-6 overflow-hidden rounded-lg flex justify-center">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    className="w-16 h-16 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                                    width={64}
                                    height={100}
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h2>

                            {/* Description */}
                            <p
                                className="text-gray-300 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: service.description }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <FaqSection questions={cyberdata} />
        </section>
    );
};

export default Cybersecurity;
