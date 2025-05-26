"use client";
import React, { useState } from "react";

export default function FaqSection({ questions }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 px-4 lg:px-24 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`p-5 h-fit rounded-2xl shadow-md border border-gray-700 cursor-pointer transition-all duration-300 ease-in-out ${
                isOpen ? "bg-white text-black" : "bg-white text-black"
              }`}
            >
              <div className="flex items-center justify-between text-lg font-bold">
                <span>{item.question}</span>
                <span className="text-lg font-semibold">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {isOpen && (
                <div className="mt-3 text-lg font-semibold opacity-60">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
