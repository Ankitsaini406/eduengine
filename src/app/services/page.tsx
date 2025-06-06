'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const services = [
    { title: 'App Development', slug: 'app-development', img: '/app.png' },
    { title: 'Cloud Computing', slug: 'cloud-computing', img: '/cloud.jpg' },
    { title: 'Cyber Security', slug: 'cyber-security', img: '/cyber.jpg' },
    { title: 'Machine Learning', slug: 'machine-learning', img: '/ai.jpg' },
    { title: 'Graphic Design', slug: 'graphic-design', img: '/graphic-design.png' },
    { title: 'Web Devlopment', slug: 'web-devlopment', img: '/web.jpg' },
];

export default function Page() {
    const router = useRouter();

    return (
        <div className="min-h-screen px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-8">Services</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.slug}
                            onClick={() => router.push(`/services/${service.slug}`)}
                            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={service.img}
                                alt={service.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-slate-800">{service.title}</h3>
                                <p className="text-slate-500">Learn more about our {service.title.toLowerCase()} service.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
