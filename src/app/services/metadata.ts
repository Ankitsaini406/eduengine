import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Our Services | Web, Mobile, Cloud, AI & Design | Eduengine",
        description:
            "Discover Eduengine’s full range of digital services — from web and mobile app development to AI, cloud computing, cybersecurity, and UI/UX design.",
        alternates: {
            canonical: "https://eduengine.in/services",
        },
        keywords: [
            "Eduengine Services",
            "Web Development Services",
            "Mobile App Development",
            "AI and Machine Learning Solutions",
            "Cloud Computing",
            "Cybersecurity Services",
            "UI/UX Design",
            "Custom Software Development",
            "Digital Transformation",
            "Technology Solutions Agency",
        ],
        openGraph: {
            title: "Explore Our Services | Eduengine Digital Solutions",
            description:
                "At Eduengine, we deliver tailored digital solutions including web & app development, AI, cloud services, cybersecurity, and UI/UX design.",
            url: "https://eduengine.in/services",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/services-hero.webp", // Replace with your actual services hero image
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Services Overview",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Eduengine Services | Web, App, AI, Cloud & Design",
            description:
                "From idea to execution, Eduengine offers a complete suite of digital services to power your business growth.",
        },
    };
};