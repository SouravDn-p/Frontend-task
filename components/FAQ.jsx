"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the app free to use?",
      answer:
        "We offer a free trial with basic features. Our premium plans start at $29/month and include advanced features for scaling businesses.",
    },
    {
      question: "Can I assign multiple employees to one job?",
      answer:
        "Yes, you can assign multiple team members to a single job and track their individual progress and time contributions.",
    },
    {
      question: "Does it work on both mobile and desktop?",
      answer:
        "ScapeSync works seamlessly across all devices - mobile, tablet, and desktop - with real-time synchronization.",
    },

    {
      question: "How secure is my data?",
      answer:
        "We use bank-level encryption and comply with industry security standards to ensure your data is always protected.",
    },
  ];

  const toggleFAQ = (index) => {
    console.log("Current openIndex:", openIndex);
    console.log("Clicked index:", index);
    const newIndex = openIndex === index ? null : index;
    console.log("Setting openIndex to:", newIndex);
    setOpenIndex(newIndex);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about ScapeSync
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 cursor-pointer" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 cursor-pointer" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
