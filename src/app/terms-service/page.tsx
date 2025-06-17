import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Terms & Conditions | Eduengine Technologies Pvt. Ltd.",
        description:
            "Read the terms and conditions for using Eduengine’s website and digital services. Understand your rights, responsibilities, and legal agreements.",
        alternates: {
            canonical: "https://eduengine.in/terms-service",
        },
        keywords: [
            "Eduengine Terms and Conditions",
            "Terms of Service",
            "User Agreement",
            "Service Terms",
            "Website Terms",
            "Legal Agreement",
            "Eduengine Usage Policy",
            "Digital Services Terms",
            "User Obligations",
            "Limitation of Liability",
        ],
        openGraph: {
            title: "Terms & Conditions | Eduengine Digital Service Agreement",
            description:
                "Understand the rules and agreements for using Eduengine’s digital services. These terms govern your relationship with our platform and offerings.",
            url: "https://eduengine.in/terms-service",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/terms-hero.webp", // Replace with your actual terms image
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Terms and Conditions",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Terms & Conditions | Eduengine Usage Policy",
            description:
                "Review the terms and conditions to understand how you can use Eduengine’s services, products, and digital platforms responsibly.",
        },
    };
};

export default async function Page() {
    return (
        <div>
            <h1>Terms And Conditions</h1>
        </div>
    )
}