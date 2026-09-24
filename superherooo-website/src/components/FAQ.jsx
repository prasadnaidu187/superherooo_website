import React, { useState } from "react";

const faqs = [
  {
    question: "What is Superherooo?",
    answer:
      "Superherooo is India's premium on-demand everyday-help platform. We connect you with background-verified local partners for errands, pickup-drop help, queue waiting, and daily assistance.",
  },
  {
    question: "How are the professionals verified?",
    answer:
      "Every Hero undergoes government ID verification, police background checks, and a skill assessment before joining the platform.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Download the Superherooo app, select your service, choose a time slot, and confirm your booking.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Contact our support team within 24 hours and we'll arrange a free re-service or provide a refund.",
  },
  {
    question: "How can I become a Superherooo professional?",
    answer:
      'Click "Become a Hero", fill in your details, select your skill, and submit your application.',
  },
  {
    question: "What cities is Superherooo available in?",
    answer:
      "Superherooo is currently operational in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, and Pune.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. We support secure payments through UPI, credit/debit cards, and net banking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#FFB627]" />
            <span className="text-xs font-black tracking-[0.3em] text-[#FFB627]">
              FAQ
            </span>
            <span className="h-px w-14 bg-[#FFB627]" />
          </div>

          <h2
            className="text-[36px] leading-[1] tracking-tight sm:text-[44px] lg:text-[50px]"
            style={{
              fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
            }}
          >
            <span className="text-[#0F1C3D]">FREQUENTLY ASKED</span>
            <br />
            <span className="text-[#2468FF]">QUESTIONS</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            Have questions? We've got answers. Find everything you need to
            know about booking, verification, payments, and becoming a Hero.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`mb-3 overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen
                    ? "border-[#FFB627]/50 shadow-[0_10px_30px_rgba(15,28,61,0.07)]"
                    : "border-slate-200 hover:border-[#FFB627]/40"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`text-xs font-black ${
                      isOpen ? "text-[#FFB627]" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-sm font-semibold sm:text-[15px] ${
                      isOpen ? "text-[#0F1C3D]" : "text-slate-700"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "rotate-180 border-[#FFB627] bg-[#FFB627] text-[#0F1C3D]"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-5 pl-14 text-sm leading-7 text-slate-500 sm:pl-[70px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}