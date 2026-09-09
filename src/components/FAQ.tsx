import { useState } from "react";

const faqs = [
  {
    question: "How accurate is the bus tracking?",
    answer:
      "Our GPS tracking provides real-time location updates with accuracy within 10-50 meters, depending on GPS signal strength and urban conditions.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, the Evide app is completely free for passengers. There are no subscription fees or hidden charges.",
  },
  {
    question: "How do I add my bus route to Evide?",
    answer:
      "Contact our partnership team through the contact section below. We'll guide you through the integration process and help you get started quickly.",
  },
  {
    question: "What cities does Evide cover?",
    answer:
      "We're continuously expanding our coverage. Contact us to check if your city is covered or to discuss bringing Evide to your area.",
  },
  {
    question: "How often are bus schedules updated?",
    answer:
      "We work with bus operators to update schedules in real-time. Any changes are reflected in the app within minutes.",
  },
  {
    question: "Can I track multiple buses at once?",
    answer:
      "Yes, you can save multiple routes and track several buses simultaneously to find the best option for your journey.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-evide-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — left-aligned, no badge */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-evide-dark mb-3">
            Questions?
          </h2>
          <p className="text-lg text-gray-500">
            We've answered the most common ones below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-evide-blue/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-evide-dark pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-evide-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
