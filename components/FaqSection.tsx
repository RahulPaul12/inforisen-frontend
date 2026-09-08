"use client";
import { useState } from "react";
import faqData from '@/data/faq.json'

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="gradient-border-wrap h-fit rounded-2xl">
      <div className={`gradient-border-inner px-6 py-5 ${isOpen ? "bg-primary! text-white!" : "bg-white text-black!" }`}>
        <button onClick={onClick} className="w-full flex items-center justify-between gap-4 text-left">
          <span className="font-inter font-semibold text-base sm:text-lg">{question}</span>
          <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
            +
          </span>
        </button>
        <div className="grid transition-[grid-template-rows] duration-400 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", }}>
          <div className="overflow-hidden"><p className="pt-4 text-sm sm:text-base font-inter leading-relaxed">{answer}</p></div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
          <h2 className="font-parkinsans font-semibold text-[32px] sm:text-[36px] mb-4.5">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="font-inter text-lg font-normal">
            Find clear and simple explanations to the most common questions about our services,payments, orders, and account management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
