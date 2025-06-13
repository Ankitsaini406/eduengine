
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceBlockProps {
    title: string;
    description: string;
    imgSrc: string;
    reverse?: boolean;
    highlight: string;
    color: string;
    link: string;
}

export default function ServiceBlock({
    title,
    description,
    imgSrc,
    reverse = false,
    highlight,
    color,
    link,
}: ServiceBlockProps) {
    const [before, after] = title.split(highlight);
    const colorMap: Record<string, string> = {
        'lime-300': 'text-lime-300',
        'lime-400': 'text-lime-400',
        'amber-300': 'text-amber-300',
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center justify-around px-5 py-16 gap-10`}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-full md:w-[500px]"
            >
                <Image
                    className="bg-gray-800 p-0 rounded-xl w-full max-w-md shadow-lg"
                    src={imgSrc}
                    alt={highlight}
                    width={400}
                    height={300}
                />
            </motion.div>

            <div className="md:w-[500px] text-center space-y-4">
                <h3 className="text-3xl font-semibold text-foreground">
                    {before}
                    <span className={`${colorMap[color]}`}>{highlight}</span>
                    {after}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                    {description}
                </p>
                <Link
                    href={link}
                    className="relative group z-10 inline-block text-primary hover:text-primary/80 font-bold items-center transition overflow-hidden text-blue-700"
                >
                    👉 Explore further <span className="ml-1">↗</span>
                    <span className="absolute -ml-2 group-hover:ml-0 left-0 bottom-0 h-0.5 w-full bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                </Link>
            </div>
        </motion.section>
    );
}
