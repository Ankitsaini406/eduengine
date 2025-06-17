import FaqSection from "@/components/FrequentyQuestion";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const faqData = [
    {
        question: "How do Machine Learning services benefit businesses??",
        answer:
            "ML services help businesses automate tasks, gain insights from data, personalize customer experiences, and make accurate predictions to improve decision-making."
    },
    {
        question: "What is Machine Learning as a Service (MLaaS)?",
        answer:
            "MLaaS refers to a suite of cloud-based platforms that provide machine learning tools as a service. It allows users to develop, train, and deploy ML models without having to manage infrastructure, making it easier and faster to implement ML solutions.",
    },
    {
        question: "Which cloud providers offer ML services?",
        answer:
            "Major cloud providers offering ML services include:<br/>Amazon Web Services (AWS) with Amazon SageMaker<br/>Google Cloud Platform (GCP) with Vertex AI<br/>Microsoft Azure with Azure Machine Learning<br/>IBM Cloud with Watson Machine Learning<br/>These platforms offer scalable tools for training, deployment, and data processing.",
    },
    {
        question: "What are some common use cases of Machine Learning?",
        answer:
            "Common ML use cases include:<br/>Predictive maintenance in manufacturing<br/>Fraud detection in banking<br/>Customer recommendation systems in e-commerce<br/>mage and speech recognition<br/>Medical diagnosis and drug discovey",
    },
    {
        question: "Do I need coding knowledge to use ML services?",
        answer:
            "Not necessarily. Many MLaaS platforms provide low-code or no-code interfaces for building and deploying models. However, having basic coding knowledge can offer more flexibility and control over advanced functionalities.",
    },
    {
        question: "How secure is data used in Machine Learning services?",
        answer:
            "We primarily work with modern stacks including React, Next.js, Node.js, Python, and various cloud technologiesReputable ML service providers implement strong security measures, including data encryption, access controls, and compliance with standards like GDPR and HIPAA. However, users should still ensure proper data anonymization and follow best practices for data privacy and security.",
    },
];

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI & Machine Learning Solutions | Predictive Analytics & NLP",
        description:
            "Leverage AI & machine learning to drive innovation with predictive analytics, natural language processing (NLP), and computer vision. Transform data into actionable insights with expert solutions.",
        alternates: {
            canonical: "https://eduengine.in/services/machine-learning",
        },
        keywords: [
            "Machine Learning Services",
            "ML Model Development",
            "Data Analytics",
            "Custom AI Solutions",
            "Predictive Analytics",
            "Eduengine Machine Learning",
            "ML Consulting",
        ],
        openGraph: {
            title: "Machine Learning Services | Model Development & AI Solutions",
            description:
                "Leverage Eduengine’s ML expertise to build intelligent systems — from fraud detection to recommendation engines. Drive smarter decisions with custom solutions.",
            url: "https://eduengine.in/services/machine-learning",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/og-machine-learning.jpg",
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Machine Learning Services",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Custom Machine Learning Services | Eduengine",
            description:
                "From computer vision to NLP and predictive analytics — get tailored ML services to solve your business challenges.",
            // images: ["https://eduengine.in/og-machine-learning.jpg"],
        },
    };
};

export default async function Page() {
    const serviceData = [
        { title: "Model Development", img: "/services/ml/business-model.webp" },
        { title: "Data Collection", img: "/services/ml/data-collection.webp" },
        { title: "Predictive Analytics", img: "/services/ml/analysis.webp" },
        { title: "Computer Vision", img: "/services/ml/opportunity.webp" },
        { title: "Recommendation Systems", img: "/services/ml/setting.webp" },
        { title: "Anomaly Detection", img: "/services/ml/detective.webp" },
        { title: "Model Deployment", img: "/services/ml/project-launch.webp" },
        { title: "Model Monitoring", img: "/services/ml/monitoring.webp" },
        { title: "Machine Learning Consulting", img: "/services/ml/conversation.webp" },
    ];

    return (
        <div className="py-8 px-4">
            <main className="max-w-screen-xl mx-auto text-left">
                <h1 className="text-5xl font-bold mb-6 pt-16">
                    Get Your Custom Machine Learning Services
                </h1>

                <h2 className="text-white text-xl md:text-2xl mb-10 max-w-3xl">
                    &quot;Harness the power of artificial intelligence and machine learning to gain actionable insights and drive innovation. Eduengine’s AI and ML services help businesses automate processes and make smarter, data-driven decisions.&quot;
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
                    <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-auto group">
                        <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                        <Image src="/services/ml/custom.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                        <div className="relative z-20 p-4">
                            <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Custom Model</h3>
                            <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">We design and train machine learning models specifically for your business goals, ensuring accurate and efficient solutions.</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative rounded-2xl overflow-hidden min-h-[200px] group">
                            <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                            <Image src="/services/ml/intelligent.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                            <div className="relative z-20 p-4">
                                <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Intelligent Data Processing</h3>
                                <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">We clean, organize, and optimize your raw data, making it ready for powerful machine learning applications.</h4>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden min-h-[200px] group">
                            <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                            <Image src="/services/ml/paper.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                            <div className="relative z-20 p-4">
                                <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Natural Language Understanding</h3>
                                <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">Develop systems that can read, interpret, and respond to human language across different platforms and industries.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-auto group">
                        <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                        <Image src="/services/ml/fraud.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                        <div className="relative z-20 p-4">
                            <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Fraud and Anomaly Detection</h3>
                            <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">Protect your operations by identifying unusual activities and treats before they impact your business.</h4>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h3 className="text-3xl text-white font-semibold mb-6 animate-pulse pb-5">
                        MORE SERVICES
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                        {serviceData.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white w-full flex items-center gap-4 p-4 text-center shadow-lg transform transition duration-300 hover:scale-105 animate-float-slow"
                            >
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={80}
                                    height={80}
                                />
                                <p className="font-bold text-slate-900 text-2xl text-shadow-blue">
                                    {service.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row gap-10">
                    <Image
                        height={300}
                        width={400}
                        src="/services/ml/ml-last.webp"
                        alt="Design Portfolio"
                        className="max-w-xs xl:max-w-xl rounded-bl-[50%] rounded-tr-[50%] shadow-md shadow-gray-500"
                    />
                    <div>
                        <h5 className="text-3xl md:text-5xl font-bold pb-5">Your Success, Our Vision</h5>
                        <h6 className="text-base md:text-xl lg:text-2xl opacity-60">We believe great design is more than just visuals — it&apos;s a tool to drive your success. Our vision is to turn your goals into stunning creative solutions that connect, inspire, and perform. When you grow, we grow with you.</h6>
                    </div>
                </div>
            </main>
            <FaqSection questions={faqData} />
        </div>
    );
}
