"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What is SMM and how does it work?",
    answer:
      "SMM (Social Media Marketing) is a platform that helps you grow your social media presence across Facebook, Instagram, YouTube, TikTok, and more. Simply create an account, choose your desired service, and watch your engagement grow organically.",
  },
  {
    question: "Is it safe to use your services?",
    answer:
      "Absolutely! We use only safe and compliant methods to boost your social media presence. Our platform follows all major social media platform guidelines to ensure your accounts remain secure and in good standing.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most users start seeing results within 24-48 hours of placing an order. However, delivery times may vary depending on the service type and order size. We always aim to deliver quality results in the shortest time possible.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a wide range of payment methods including bKash, Nagad, Rocket, bank transfer, and international payment options like Visa, Mastercard, and PayPal. All transactions are secured with industry-standard encryption.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a satisfaction guarantee. If we are unable to deliver the service as described, you are eligible for a full or partial refund. Please contact our support team within 7 days of your order for assistance.",
  },
];

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
