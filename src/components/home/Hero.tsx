"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const text = "Eduengine";

    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-around text-center h-screen bg-[url('/hero.avif')] bg-cover bg-center bg-fixed">
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

            <div className="relative z-10 max-w-2xl px-6 text-white">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-5xl font-extrabold leading-tight sm:text-6xl"
                >
                    Elevate Your Digital Presence with{" "}
                    <motion.span className="text-blue-400 inline-block">
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 3, // Slower entrance animation
                                    exit: { duration: 0.3 }, // Faster exit animation
                                    delay: index * 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 3, // Controls pause before repeating
                                    ease: "easeInOut",
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="mt-4 text-lg text-gray-200 sm:text-xl"
                >
                    We specialize in Web Development, App Creation, Digital Marketing, and Cybersecurity.
                    Transform your ideas into reality with cutting-edge solutions.
                </motion.p>
            </div>

            {/* Services Grid */}
            <motion.div
                className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
                {[ 
                    { name: "Website Development", icon: "🌐" },
                    { name: "App Development", icon: "📱" },
                    { name: "Digital Marketing", icon: "📈" },
                    { name: "Cybersecurity", icon: "🔒" },
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white/10 backdrop-blur-xl rounded-xl text-white text-center border border-white/20 shadow-md transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1 + index * 0.2 }}
                    >
                        <motion.div
                            initial={{ scale: 1, rotate: 0 }}
                            whileHover={{
                                rotateX: 360,
                                rotate: [0, 360], // Full rotation on hover
                                transition: { duration: 2, ease: "easeInOut" },
                            }}
                            className="text-4xl inline-block"
                        >
                            {service.icon}
                        </motion.div>
                        <h3 className="mt-3 text-lg font-semibold">{service.name}</h3>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
}
