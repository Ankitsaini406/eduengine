
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Contact Eduengine | Get in Touch for Digital Solutions",
        description:
            "Have questions or project ideas? Contact Eduengine for expert help with web development, mobile apps, cloud computing, AI, and cybersecurity solutions.",
        alternates: {
            canonical: "https://eduengine.in/contact-us",
        },
        keywords: [
            "Contact Eduengine",
            "Get in Touch",
            "Web Development Help",
            "Mobile App Development Support",
            "Cloud Solutions Contact",
            "AI Services Inquiry",
            "Cybersecurity Consultation",
            "Digital Agency Support",
            "Tech Project Discussion",
            "Hire Eduengine",
        ],
        openGraph: {
            title: "Contact Eduengine | Let's Build Something Great Together",
            description:
                "Reach out to our team for collaboration, project estimates, or general queries. Eduengine is here to support your digital journey.",
            url: "https://eduengine.in/contact-us",
            type: "website",
            images: [
                {
                    url: "https://eduengine.in/contact-hero.webp",
                    width: 1200,
                    height: 630,
                    alt: "Contact Eduengine - Digital Innovation Team",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Eduengine | Start Your Digital Project Today",
            description:
                "Want to collaborate with Eduengine? Get in touch with our experts in web, mobile, AI, and cloud development.",
        },
    };
};
