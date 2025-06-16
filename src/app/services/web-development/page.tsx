import FaqSection from "@/components/FrequentyQuestion";
import { Metadata } from "next";
import Image from "next/image";

const FAQ_LIST = [
    {
        question: "Why Choose Us?",
        answer:
            "Fast development times Skilled developers with expertise in modern web technologies Ongoing support and maintenance",
    },
    {
        question: "What services do you offer?",
        answer:
            "We offer end-to-end web development solutions including custom website design, front-end and back-end development, e-commerce, CMS integrations (like WordPress), SEO optimization, redesigns, and ongoing maintenance services. Whether you're a startup or an established business, we tailor solutions to your specific goals.",
    },
    {
        question: "What is your web development process?",
        answer:
            "We follow a structured six-step process: Discovery & Planning, UI/UX Design, Development, Testing, Launch, and Ongoing Support. This ensures your website is strategically built, visually engaging, technically sound, and optimized for growth.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "The timeline depends on complexity. Standard sites take 4–6 weeks, while more complex builds may take longer. A detailed schedule is shared after understanding your project scope.",
    },
    {
        question: "What information do I need to provide before starting?",
        answer:
            "We’ll need your business goals, target audience, design preferences, required features, budget, timeline, and any reference websites to better tailor the solution to your needs.",
    },
    {
        question: "Do I need to be tech-savvy to work with you?",
        answer:
            "Not at all. We manage the technical aspects and communicate in simple terms, ensuring a smooth and transparent process regardless of your technical background.",
    },
];

const CARD_DATA = [
    {
        title: "User-Centric UI/UX Approach",
        description:
            "Intuitive, visually appealing designs focused on usability, accessibility, and seamless user experience.",
        image: "/services/graphic-design/graphic-success.jpg",
        bgColor: "bg-blue-300",
    },
    {
        title: "Fast-Loading & Optimized Design",
        description:
            "Performance-focused builds with fast load times and seamless experiences across all devices.",
        image: "/services/web/seo.jpg",
        bgColor: "bg-orange-300",
    },
    {
        title: "Responsive Across All Devices",
        description:
            "Mobile-first, responsive designs that adapt to any screen size for consistent user experience.",
        image: "/services/web/phone.jpg",
        bgColor: "bg-fuchsia-100",
    },
    {
        title: "Custom Design for Every Brand",
        description:
            "Unique designs tailored to your brand's goals, values, and audience, making your presence stand out.",
        image: "/services/web/leptop.jpg",
        bgColor: "bg-orange-300",
    },
];

const PROCESS_STEPS = [
    {
        title: "E-commerce Platforms",
        description:
            "Build secure, scalable, and user-friendly e-commerce websites with integrated payment gateways and product management systems.",
        image: "/services/app/app1.jpg",
    },
    {
        title: "Custom Web Applications",
        description:
            "Develop custom web applications designed to meet your business needs with advanced functionalities.",
        image: "/services/app/app2.jpg",
    },
    {
        title: "SEO-Friendly Websites",
        description:
            " Our websites are optimized for search engines to enhance your visibility and rank higher in search results.",
        image: "/services/app/app3.jpg",
    },
    {
        title: "TESTING & QUALITY ASSURANCE",
        description:
            "Thorough testing ensures responsiveness, performance, and bug-free deployment.",
        image: "/services/app/app4.jpg",
    },
    {
        title: "Responsive Designs",
        description:
            "Websites that look great on every device, from desktop to mobile, ensuring an optimal user experience.",
        image: "/services/app/app5.jpg",
    },
    {
        title: "Support & Growth",
        description:
            "We offer ongoing support, performance monitoring, and updates to foster growth.",
        image: "/services/app/app6.jpg",
    },
];

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Expert Web Development Services | Custom, SEO-Friendly & Scalable",
        description:
            "Unlock your business’s potential with fast, responsive, and SEO-optimized websites. Offering custom web apps, eCommerce platforms, and scalable digital solutions to fuel growth.",
        alternates: {
            canonical: "https://eduengine.in/services/web-development",
        },
        keywords: [
            "Web Development",
            "UI/UX Design",
            "Responsive Websites",
            "SEO Optimization",
            "Custom Website Design",
            "Eduengine Web Services",
        ],
        openGraph: {
            title: "Custom Web Design & Development | Eduengine",
            description:
                "Eduengine builds fast, responsive, and SEO-optimized websites tailored to your business needs.",
            url: "https://eduengine.in/services/web-development",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/og-image.jpg",
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Web Development",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Custom Web Design & Development | Eduengine",
            description:
                "Eduengine provides end-to-end web development and custom design solutions to help businesses thrive online.",
            // images: ["https://eduengine.in/og-image.jpg"],
        },
    };
};

export default async function Page() {
    return (
        <div className="min-h-screen w-full">
            {/* Hero Section */}
            <section className="w-full px-8 py-16 bg-[linear-gradient(to_bottom,_#d3d3d3_0%,_#f5f5f5_0%,_#d2b48c_20%,_#000000_90%)] flex flex-col gap-16">
                <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2 text-foreground text-center md:text-left">
                        <h3 className="text-xl md:text-3xl md:max-w-2xl font-semibold">
                            We provide support for a wide range of programming languages to
                            build your website, including HTML, CSS, JavaScript, PHP, Python,
                            Ruby, and more. Our solutions are custom-crafted for flexibility
                            and functionality.
                        </h3>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/services/web/tree.png"
                            alt="Web Development"
                            width={500}
                            height={400}
                            className="rounded-lg object-cover drop-shadow-lg"
                        />
                    </div>
                </div>

                {/* Service Cards */}
                <div className="flex flex-wrap justify-center gap-4 px-4">
                    {CARD_DATA.map((card, idx) => (
                        <Card key={idx} {...card} />
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="container mx-auto w-full px-6 md:px-20 py-16 ">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Our Web Development Process
                </h2>

                <div className="flex flex-col gap-10 pt-10">
                    {PROCESS_STEPS.map((step, index) => (
                        <ProcessStep key={index} {...step} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSection questions={FAQ_LIST} />
        </div>
    );
}

type CardProps = {
    title: string;
    description: string;
    image: string;
    bgColor: string;
};

const Card = ({ title, description, image, bgColor }: CardProps) => (
    <div
        className={`max-w-[300px] min-w-[200px] rounded-lg shadow-md flex flex-col items-center ${bgColor} overflow-hidden`}
    >
        <div className="relative h-48 w-full">
            <Image src={image} alt={title} fill className=" object-cover" />
        </div>
        <div className="p-4">
            <h1 className="mt-3 font-semibold text-xl text-center text-background">
                {title}
            </h1>
            <p className="mt-4 text-sm text-center text-background">{description}</p>
        </div>
    </div>
);

type ProcessStepProps = {
    title: string;
    description: string;
    image: string;
    reverse: boolean;
};

const ProcessStep = ({
    title,
    description,
    image,
    reverse,
}: ProcessStepProps) => (
    <div
        className={`w-full flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
            } justify-center items-center gap-6 md:gap-20`}
    >
        <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shrink-0">
            <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pt-4 max-w-xl text-center">
            <h3 className="text-2xl text-yellow-300">{title}</h3>
            <p className="text-xl">{description}</p>
        </div>
    </div>
);