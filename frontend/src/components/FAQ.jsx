import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "Do children need coding experience?",
    a: "No. Beginners are welcome.",
  },
  {
    q: "Will recordings be available?",
    a: "Yes, all sessions will be recorded.",
  },
  {
    q: "What device is required?",
    a: "A laptop with internet connection.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl mb-4 shadow-sm overflow-hidden"
          >
            <button
              className="w-full p-5 cursor-pointer flex justify-between items-center text-left font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.q}</span>

              {active === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-blue-600" />
              )}
            </button>

            {active === index && (
              <div className="px-5 pb-5 text-gray-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;