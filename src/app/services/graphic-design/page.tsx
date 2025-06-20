import FaqSection from "@/components/FrequentyQuestion";
import { Metadata } from "next";
import Image from "next/image";

const designdata = [
    {
        question: "What graphic design services do you offer?",
        answer:
            "We provide a wide range of design services including logo design, branding, social media graphics, posters, brochures, business cards, packaging design, website graphics, presentations, and more. Whether you're starting from scratch or refreshing your brand, we've got you covered.",
    },
    {
        question: "Do you only design logos, or do you offer full branding?",
        answer:
            "We offer comprehensive branding services which include logo design, color palettes, typography, brand guidelines, and more to ensure a consistent and professional identity across all platforms.",
    },
    {
        question: "What is your graphic design process like?",
        answer:
            "Our process starts with understanding your needs through a discovery call or questionnaire. We then move on to research, concept development, design drafts, feedback rounds, and final delivery of files in multiple formats.",
    },
    {
        question: "What industries do you work with?",
        answer:
            "We work with a diverse range of industries including tech startups, education, healthcare, retail, hospitality, non-profits, and more. We tailor our designs to meet the specific needs and aesthetics of each industry.",
    },
    {
        question: "How long does a project take to complete?",
        answer:
            "The timeline varies based on the project scope, but typically logo and branding projects take 1–2 weeks, while larger design projects like brand packages or website assets may take 2–4 weeks.",
    },
    {
        question: "Can I request revisions if I’m not satisfied with the design?",
        answer:
            "Absolutely! We include a set number of revision rounds in each package to ensure you are completely satisfied with the final result. Additional revisions can also be arranged if needed.",
    },
    {
        question: "Will I receive the source files for my designs?",
        answer:
            "Yes, upon project completion, we provide all final deliverables including high-resolution files and editable source files (such as PSD, AI, or Figma files), so you have full control over your brand assets.",
    }

];

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Creative Graphic Design & Animation Services | Eduengine",
        description:
            "Captivate your audience with stunning graphic designs, motion graphics, and branding visuals. Eduengine delivers custom creatives for logos, social media, and animations.",
        alternates: {
            canonical: "https://eduengine.in/services/graphic-design",
        },
        keywords: [
            "Graphic Design Services",
            "Animation Services",
            "Logo Design",
            "Motion Graphics",
            "Brand Identity",
            "Social Media Creatives",
            "Eduengine Graphic Design",
            "Custom Design Solutions",
        ],
        openGraph: {
            title: "Graphic Design & Animation Services | Custom Logos & Branding",
            description:
                "Get custom logo design, animated videos, and branding assets tailored to your business. Eduengine crafts visuals that engage, inform, and inspire.",
            url: "https://eduengine.in/services/graphic-design",
            type: "website",
            // images: [
            //     {
            //         url: "https://eduengine.in/og-graphic-design.jpg",
            //         width: 1200,
            //         height: 630,
            //         alt: "Eduengine Graphic Design Services",
            //     },
            // ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Creative Graphic & Animation Services | Eduengine",
            description:
                "Stand out with impactful designs and motion graphics. We create logos, branding visuals, and animations that bring your ideas to life.",
            // images: ["https://eduengine.in/og-graphic-design.jpg"],
        },
    };
};


export default function Design() {
    const serviceData = [
        { title: "App/Web UI/UX Design", img: "/services/graphic-design/business-cards.webp" },
        { title: "3D Modelling", img: "/services/graphic-design/3d-model.webp" },
        { title: "Typography", img: "/services/graphic-design/edit-text.webp" },
        { title: "Illustration", img: "/services/graphic-design/pen-tool.webp" },
        { title: "Videography", img: "/services/graphic-design/videography.webp" },
        { title: "Print Design", img: "/services/graphic-design/printing-machine.webp" },
        { title: "Banner & Ad Design", img: "/services/graphic-design/advertising.webp" },
        { title: "Logo Design", img: "/services/graphic-design/logo-design.webp" },
        { title: "Animation", img: "/services/graphic-design/motion.webp" },
    ];

    return (
        <div className="py-8 px-4">
            <main className="max-w-screen-xl mx-auto text-left">
                <h1 className="text-5xl font-bold mb-6 pt-16">
                    Get Your Best Design
                </h1>

                <h2 className="text-white text-xl md:text-2xl mb-10 max-w-3xl">
                    Your brand identity is key to standing out in a competitive market. Our graphic design services help your business leave a lasting impression. From logo design to full brand identity packages, we offer creative solutions that connect with your audience and communicate your brand’s message effectively.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
                    <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-auto group">
                        <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                        <Image src="/services/graphic-design/photo.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                        <div className="relative z-20 p-4">
                            <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Photography</h3>
                            <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">We offer professional photography services to give your brand the perfect visual edge - from product shoots to personal portraits.</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative rounded-2xl overflow-hidden min-h-[200px] group">
                            <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                            <Image src="/services/graphic-design/graphic-wall.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                            <div className="relative z-20 p-4">
                                <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Graphic Design</h3>
                                <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">Along with core services, we also offer high-quality graphic design — from branding and social media posts to promotional materials.</h4>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden min-h-[200px] group">
                            <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                            <Image src="/services/app/app3.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                            <div className="relative z-20 p-4">
                                <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">UI/UX Design</h3>
                                <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">Beyond UI/UX, we bring your brand to life with custom graphic design for logos, flyers, and more.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-auto group">
                        <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                        <Image src="/services/graphic-design/graphic-brading.webp" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                        <div className="relative z-20 p-4">
                            <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Branding</h3>
                            <h4 className="text-sm opacity-60 duration-300 group-hover:opacity-0">We don&apos;t just design interfaces — we also build brands. Let us craft your visual identity from the ground up.</h4>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h5 className="text-3xl text-white font-semibold mb-6 animate-pulse pb-5">
                        MORE SERVICES
                    </h5>
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
                        src="/services/graphic-design/graphic-success.webp"
                        alt="Design Portfolio"
                        className="max-w-xs xl:max-w-xl rounded-bl-[50%] rounded-tr-[50%] shadow-md shadow-gray-500"
                    />
                    <div>
                        <h5 className="text-3xl md:text-5xl font-bold pb-5">Your Success, Our Vision</h5>
                        <h6 className="text-base md:text-xl lg:text-2xl opacity-60">We believe great design is more than just visuals - it&apos;s a tool to drive your success. Our vision is to turn your goals into stunning creative solutions that connect, inspire, and perform. When you grow, we grow with you.</h6>
                    </div>
                </div>
            </main>
            <FaqSection questions={designdata} />
        </div>
    );
}
