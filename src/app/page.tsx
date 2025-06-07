import TextFade from "@/components/TextFade";
import Image from "next/image";
import Link from "next/link";

const section = [
  {
    title: "Professional Web Services to Build Your Online Presence",
    description: "Unlock the full potential of your business with our expert Web Development services. We design and develop fast, responsive, and user-friendly websites tailored to your brand and business goals. Whether you need a corporate website, e-commerce platform, or a custom web application, our team ensures seamless functionality, modern design, and optimized performance.",
    imgSrc: "/web.jpg",
    reverse: true,
    highlight: "Web Services",
    color: "amber-300",
    link: '/services/web-devlopment'
  },
  {
    title: "Creative Graphic Design Services to Elevate Your Brand",
    description: "Bring your ideas to life with our professional graphic design services. We create stunning visuals that communicate your brand message, captivate your audience, and enhance your identity. From logos, brochures, and social media creatives to complete brand identity packages, our expert designers deliver eye-catching designs that blend creativity with strategy — helping your business stand out in today’s competitive world.",
    imgSrc: "/graphic-design.png",
    reverse: false,
    highlight: "Graphic Design",
    color: "amber-300",
    link: '/services/graphic-design',
  },
  {
    title: "Custom Mobile App Development to Transform Your Ideas into Reality",
    description: "We bring your ideas to life with powerful, user-friendly mobile apps. Our App Development services cover everything from concept to launch — including UI/UX design, development, testing, and maintenance. Whether you need an Android app, iOS app, or a cros platform solution, our expert team delivers apps that are fast, secure, and scalable  Partner with us to create innovative mobile experiences that engage users and drive business growth.",
    imgSrc: "/app.png",
    reverse: true,
    highlight: "App Development",
    color: "amber-300",
    link: '/services/app-devlopment',
  },
  {
    title: "Cloud Computing Solution for Seamless Business Growth",
    description: "Empower your business with flexible, scalable, and secure cloud computing services. We help you migrate, manage, and optimize your infrastructure on the cloud — ensuring high performance, security, and cost-efficiency. Whether you need cloud hosting, data storage, backup solutions, or full cloud-native app development, our expert team delivers tailored solutions that fit your business needs and drive innovation.",
    imgSrc: "/cloud.jpg",
    reverse: false,
    highlight: "Cloud Computing",
    color: "amber-300",
    link: '/services/cloud-computing',
  },
  {
    title: "End-To-End Cyber Security Services to Safeguard Your Future",
    description: "Protect your business from evolving digital threats with our comprehensive Cyber Security Services. We offer end-to-end protection, including risk assessment, threat detection, vulnerability management, data encryption, and incident response. Our team of certified experts works proactively to safeguard your critical information, prevent cyber attacks, and ensure compliance with industry standards Trust us to secure your digital assets, so you can focus on growing your business with confidence.",
    imgSrc: "/cyber.jpg",
    reverse: true,
    highlight: "Cyber Security",
    color: "amber-300",
    link: '/services/cyber-security',
  },
  {
    title: "Machine Learning Solution to Empower Your Business",
    description: " Unlock the true potential of your data with our advanced Machine Learning services. We design intelligent systems that can learn, adapt, and make smarter decisions for your business. Our services include custom model development, data analysis, predictive analytics, natural language processing (NLP), computer vision, and AI integration. Whether you want to automate processes, forecast trends, or create personalized customer experiences, we deliver tailored solutions that drive innovation and business growth.",
    imgSrc: "/ai.jpg",
    reverse: false,
    highlight: "Machine Learning",
    color: "amber-300",
    link: '/services/machine-learning',
  },
];

export default function HomePage() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section className="border-b">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 gap-10">
          <div className="md:w-1/2 flex justify-center">
            <Image
              className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-10"
              src="/hero.png"
              alt="Development"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 md:text-left space-y-6 flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-center">
              WE ARE AN EXPERT DIGIT SOLUTION AGENCY
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
      <section className="container mx-auto text-center px-5 md:w-1/2">
        <h2 className="text-3xl font-extrabold uppercase">Our Leading Services</h2>
        <p className="text-gray-300">
          Our unmatched expertise in technology and innovation ensures strategic, secure, and scalable solutions for your business success.
        </p>
      </section>

      {/* Service Blocks */}
      <div className="border-b pb-14 flex flex-col gap-10">
      {section.map((item, index) => (
        <ServiceBlock key={index} {...item} />
      ))}
      </div>

      {/* Contact Section */}
      <section className="xl:container mx-auto p-5 my-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="w-full lg:w-1/3 text-center space-y-5">
            <h2 className="text-5xl font-bold text-blue-100 text-shadow-md text-shadow-lime-300 uppercase">FEEL FREE TO REACH US</h2>
            <p className="text-gray-400 text-2xl">
              Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you!
            </p>
            <Image src="/social-reach.png" alt="Contact" width={200} height={200} className="mx-auto" />
          </div>
          <form className="w-full lg:w-1/2 xl:w-1/3 bg-gray-800 rounded-2xl p-6 space-y-5">
            <Input label="Name" type="text" />
            <Input label="Email" type="email" />
            <Input label="Contact" type="tel" />
            <div>
              <label className="block text-sm mb-2">How we can help</label>
              <textarea
                className="w-full p-3 rounded-lg bg-gray-950 text-white min-h-[100px] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-bold w-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

interface ServiceBlockProps {
  title: string;
  description: string;
  imgSrc: string;
  reverse: boolean;
  highlight: string;
  color: string;
  link: string;
}

function ServiceBlock({
  title,
  description,
  imgSrc,
  reverse,
  highlight,
  color,
  link,
}: ServiceBlockProps) {
  const [before, after] = title.split(highlight);
  const colorMap: Record<string, string> = {
    "lime-300": "text-lime-300",
    "lime-400": "text-lime-400",
    "amber-300": "text-amber-300",
  };

  return (
    <section
      className={`container mx-auto flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between p-5 gap-10`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          className="bg-gray-800 p-0 rounded-xl w-full max-w-md"
          src={imgSrc}
          alt={highlight}
          width={400}
          height={300}
        />
      </div>
      <div className="md:w-1/2 text-center space-y-4">
        <h3 className="text-3xl font-semibold">
          {before}
          <span className={`${colorMap[color]}`}>{highlight}</span>
          {after}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="text-blue-500 hover:text-blue-600 font-bold hover:underline inline-flex items-center"
        >
          MORE <span className="ml-1">↗</span>
        </Link>
      </div>
    </section>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        type={type}
        className="w-full p-3 rounded-lg bg-gray-950 text-white"
      />
    </div>
  );
}
