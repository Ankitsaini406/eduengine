"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container m-auto">
      <main className="w-full h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src="/favicon.ico" alt="Eduengine Logo" width={200} height={200} />
        </motion.div>
      </main>
    </div>
  );
}
