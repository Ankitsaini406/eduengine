"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Question = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  questions: Question[];
}

export default function FaqSection({ questions }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 px-4 lg:px-24 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-6">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="lg:w-[48%] w-full h-fit p-5 rounded-2xl shadow-md border border-gray-700 cursor-pointer bg-white text-black transition-colors duration-300"
            >
              <div className="flex items-center justify-between text-lg font-bold">
                <span>{item.question}</span>
                <span className="text-lg font-semibold">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-lg font-semibold opacity-60">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
