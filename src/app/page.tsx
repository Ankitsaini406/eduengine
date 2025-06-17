import ServiceBlock from "@/components/SectionBlocks";
import TextFade from "@/components/TextFade";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const section = [
  {
    title: "🌐 Web Development Services make a Strong Online Presence ",
    description: "Unleash your business's full eventuality with our professional web development services. We draft presto, responsive, and SEO-friendly websites adapted to your unique business pretensions. Whether you need marketable Websites E-commerce Platforms Custom Web operations Our expert web formulators ensure indefectible functionality, modern design, mobile responsiveness, and high-performance optimization — delivering exceptional user exploits that convert guests into guests. Keywords optimized web development services, responsive websites, SEO-- commerce platforms, custom web operations ",
    imgSrc: "/web.jpg",
    reverse: true,
    highlight: "Web Services",
    color: "amber-300",
    link: '/services/web-development'
  },
  {
    title: "🎨 Graphic Design Services Elevate Your Brand Identity ",
    description: "Stand out in a crowded request with our creative graphic design services. Our talented introducers transform your vision into stunning illustrations that effectively communicate your brand communication and appeal to your target cult. We specialize in Logo Design circulars & flyers Social Media Creatives Complete Brand Identity Packages With a perfect blend of creativity and strategic design, we help businesses strengthen their brand presence and leave a lasting print. Keywords optimized graphic design services, brand identity, totem design, social media creatives ",
    imgSrc: "/graphic-design.png",
    reverse: false,
    highlight: "Graphic Design",
    color: "amber-300",
    link: '/services/graphic-design',
  },
  {
    title: "📱 Mobile App Development Bring Your Ideas to Life ",
    description: "Transform your business ideas into significant, user-friendly mobile operations. Our custom app development services cover every stage — from creativity and UI/ UX design to development, testing, and ongoing conservation. We make Android Apps iOS Apps Cross-Platform operations Our apps are secure, scalable, and optimized for maximum performance, furnishing your stoners with indefectible mobile exploits that drive business growth. Keywords optimized mobile app development, Android app development, iOS app-platform apps, UI/ UX design. ",
    imgSrc: "/app.png",
    reverse: true,
    highlight: "App Development",
    color: "amber-300",
    link: '/services/app-development',
  },
  {
    title: "☁️ Cloud Computing Services Scale Your Business Seamlessly ",
    description: "Maximize effectiveness and strictness with our pall calculating results. We help businesses migrate, manage, and optimize their IT structure on the pall with pall Hosting Data Storage & Provisory Cloud Security pall-Native App Development With our pall moxie, you gain enhanced security, high performance, cost savings, and continued scalability that energy long-term business growth. Keywords optimized pall computing results, pall hosting, data storage, pall migration, pall-native operations ",
    imgSrc: "/cloud.jpg",
    reverse: false,
    highlight: "Cloud Computing",
    color: "amber-300",
    link: '/services/cloud-computing',
  },
  {
    title: "🔒 Cyber Security Services cover Your Digital means ",
    description: "Secure your business from growing digital risks with our comprehensive cyber security services. Our pukka experts deliver visionary protection through trouble Detection & Risk Assessment Vulnerability operation Data Encryption & insulation Incident Response & Compliance We guard your critical data, ensure nonsupervisory compliance, and give you peace of mind — allowing you to concentrate on growing your business with confidence. Keywords optimized cyber security services, trouble discovery, trouble operation, data protection, incident response ",
    imgSrc: "/cyber.jpg",
    reverse: true,
    highlight: "Cyber Security",
    color: "amber-300",
    link: '/services/cyber-security',
  },
  {
    title: "🤖 Machine literacy results Drive Innovation with AI ",
    description: "Influence the power of machine knowledge and AI to automate processes, cast trends, and deliver substantiated exploits. Our machine knowledge services include Custom Model Development Predictive Analytics Natural Language Processing( NLP) Computer Vision AI Integration We help you turn complex data into practicable perceptivity, empowering your business to make smarter, data-driven opinions. Keywords optimized machine knowledge results, predictive analytics, AI development, NLP, data-driven perceptivity ",
    imgSrc: "/ai.jpg",
    reverse: false,
    highlight: "Machine Learning",
    color: "amber-300",
    link: '/services/machine-learning',
  },
];

const fetchImageUrl = async () => {
  const apiPoint = process.env.NODE_ENV === "development" ? 'http://localhost:3002/' : 'https://eduengine.in/';
  const response = await fetch(`${apiPoint}api/image-url`,
    // { cache: "no-store" }
  ); // No caching
  const data = await response.json();
  return data.imageUrl;
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Expert Digital Solutions Agency | Web, App, Cloud, AI",
        description:
            "Powerful digital services: web & app development, AI, cloud, cybersecurity & design. Scalable tech solutions to grow your business. Get a free consultation!",
        alternates: {
            canonical: "https://eduengine.in/",
        },
        keywords: [
            "Web Development",
            "Mobile App Development",
            "Cloud Computing",
            "Cybersecurity Services",
            "AI Solutions",
            "Graphic Design",
            "Eduengine Digital Agency",
            "Full-Stack Development",
            "UI/UX Design",
            "Custom Software Development",
        ],
        openGraph: {
            title: "Eduengine | Scalable Web, App, AI & Cloud Solutions",
            description:
                "Transform your business with Eduengine's cutting-edge services in web and app development, AI, cloud computing, cybersecurity, and design. Trusted by modern startups and enterprises.",
            url: "https://eduengine.in/",
            type: "website",
            images: [
                {
                    url: "https://eduengine.in/hero.webp",
                    width: 1200,
                    height: 630,
                    alt: "Eduengine - Smart Digital Solutions",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Eduengine | Smart Digital Services to Scale Your Business",
            description:
                "We build custom apps, websites, cloud systems, and AI-driven solutions with secure infrastructure and modern design. Explore how Eduengine can help your business grow.",
        },
    };
};

export default async function Home() {

  const imageUrl = await fetchImageUrl();

  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section className="mb-10 md:mb-20">
        <div className="container mx-auto border-b border-foreground/20 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-12 gap-10">
          <div className="relative h-[40vh] md:h-[50vh] lg:w-[60vh] w-full md:w-1/2 flex justify-center mt-10">
            <Image
              src={imageUrl}
              alt="Development"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="md:w-1/2 md:text-left space-y-6 flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl leading-9 md:leading-12 lg:leading-17 font-bold text-center">
              We provide smart digital solutions for your business.
            </h1>
            <TextFade titles={[
              "WEB DEVELOPMENT",
              "APP DEVELOPMENT",
              "GRAPHIC DESIGNER",
              "UI/UX DESIGN",
              "CLOUD SERVICES"
            ]} />
            <Link
              href="/contact-us"
              className="inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto text-center px-5 md:w-[900px] ">
        <h3 className="text-2xl md:text-5xl font-extrabold uppercase pb-5">🚀 Our Leading Digital Services</h3>
        <h4 className="text-gray-300 text-lg">
          At Eduengine, we combine technology, invention, and moxie to deliver strategic, secure, and scalable results that drive business growth. From startups to enterprises, we help associations thrive in the digital period with our comprehensive range of IT services.
        </h4>
      </section>

      {/* Service Blocks */}
      <div className="container mx-auto border-b border-foreground/20 pb-14 flex flex-col mb-10 md:mb-20">
        {section.map((item, index) => (
          <ServiceBlock key={index} {...item} />
        ))}
      </div>

      {/* Contact Section */}
      <section className="xl:container mx-auto p-5 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="w-full lg:w-[45%] text-center space-y-5">
            <p className="text-5xl font-bold uppercase">FEEL FREE TO REACH US</p>
            <p className="text-gray-400 text-2xl">
              Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you! Reach out anytime and we&apos;ll get back to you as soon as possible.
            </p>
            <Image src="/social-reach.png" alt="Contact" width={200} height={200} className="mx-auto w-[150px] aspect-square" />
          </div>
          <form className="w-full lg:w-1/2 xl:w-1/3 bg-neutral-800 rounded-2xl p-6 space-y-5">
            <Input label="Name" type="text" />
            <Input label="Email" type="email" />
            <Input label="Contact" type="tel" />
            <div>
              <label className="block text-sm mb-2">How we can help</label>
              <textarea 
                aria-label="Message"
                className="w-full p-3 rounded-lg bg-gray-950 text-white min-h-[100px] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 cursor-pointer px-8 py-2 rounded-md text-white font-bold "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        type={type}
        aria-label={label}
        className="w-full p-3 rounded-lg bg-gray-950 text-white"
      />
    </div>
  );
}
