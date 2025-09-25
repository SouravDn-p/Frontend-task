"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I install the app?",
    a: "You can download it from Play Store or App Store.",
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use strong encryption for your data.",
  },
  {
    q: "Do you provide support?",
    a: "Yes, our support team is available 24/7.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="mt-10 max-w-2xl mx-auto space-y-4">
        {faqs.map((f, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 cursor-pointer"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <h3 className="font-semibold text-lg">{f.q}</h3>
            {open === idx && <p className="mt-2 text-gray-600">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
