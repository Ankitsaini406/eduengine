import FaqSection from "@/components/FrequentyQuestion";
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

export default function Design() {
    const serviceData = [
        { title: "App/Web U/X Design", img: "/services/graphic-design/business-cards.png" },
        { title: "3D Modelling", img: "/services/graphic-design/3d-model.png" },
        { title: "Typography", img: "/services/graphic-design/edit-text.png" },
        { title: "Illustration", img: "/services/graphic-design/pen-tool.png" },
        { title: "Videography", img: "/services/graphic-design/videography.png" },
        { title: "Print Design", img: "/services/graphic-design/printing-machine.png" },
        { title: "Banner & Ad Design", img: "/services/graphic-design/advertising.png" },
        { title: "Logo Design", img: "/services/graphic-design/logo-design.png" },
        { title: "Animation", img: "/services/graphic-design/motion.png" },
    ];

    return (
        <div className="py-8 px-4">
            <main className="max-w-screen-xl mx-auto text-left">
                <h1 className="text-5xl font-bold mb-6 pt-16">
                    GET YOUR BEST DESIGN
                </h1>

                <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl">
                    Need designs that stand out and speak your brand? From logos and
                    flyers to social media posts and full brand kits — we craft visuals
                    that match your vision with style and precision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
                    <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-auto group">
                        <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                        <Image src="/services/graphic-design/photo.jpg" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                        <div className="relative z-20 p-4">
                            <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Photography</h3>
                            <h5 className="text-sm opacity-60 duration-300 group-hover:opacity-0">we offer professional photography services to give your brand the perfect visual edge - from product shoots to personal portraits.</h5>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative rounded-2xl overflow-hidden min-h-[200px] group">
                            <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                            <Image src="/services/graphic-design/graphic-wall.jpg" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                            <div className="relative z-20 p-4">
                                <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Graphic Design</h3>
                                <h5 className="text-sm opacity-60 duration-300 group-hover:opacity-0">Along with care services, we also offer high-quality graphic design - from branding and social media posts to promotional materials.</h5>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden min-h-[200px] group">
                            <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                            <Image src="/services/app/app3.jpg" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                            <div className="relative z-20 p-4">
                                <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">UI UX Design</h3>
                                <h5 className="text-sm opacity-60 duration-300 group-hover:opacity-0">Beyond UI/UX, we bring your brand to life with custom graphic design for logos, flyers, and more.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-auto group">
                        <div className="absolute z-10 inset-0 bg-black opacity-50 duration-300 group-hover:opacity-40"></div>
                        <Image src="/services/graphic-design/graphic-brading.jpg" alt="Design Element 1" fill className="object-cover group-hover:scale-105 duration-300" />
                        <div className="relative z-20 p-4">
                            <h3 className="font-bold text-2xl pb-2 duration-300 group-hover:opacity-0">Branding</h3>
                            <h5 className="text-sm opacity-60 duration-300 group-hover:opacity-0">We don&apos;t just design interfaces - we also build brands. Let us craft your visual identity from the ground up.</h5>
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
                        src="/services/graphic-design/graphic-success.jpg"
                        alt="Design Portfolio"
                        className="max-w-xs xl:max-w-xl rounded-bl-[50%] rounded-tr-[50%] shadow-md shadow-gray-500"
                    />
                    <div>
                        <h4 className="text-3xl md:text-5xl font-bold pb-5">Your Success Our Vision</h4>
                        <h6 className="text-base md:text-xl lg:text-2xl opacity-60">We believe great design is more than just visuals - it&apos;s a tool to drive your success. Our vision is to turn your goals into stunning creative solutions that connect, inspire, and perform. When you grow, we grow with you.</h6>
                    </div>
                </div>
            </main>
            <FaqSection questions={designdata} />
        </div>
    );
}
