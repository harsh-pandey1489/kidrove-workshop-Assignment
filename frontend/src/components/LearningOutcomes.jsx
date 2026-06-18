const outcomes = [
  "Understand AI fundamentals",
  "Build beginner robotics projects",
  "Learn coding concepts",
  "Develop logical thinking",
  "Improve creativity and teamwork",
];
import { FaCheckCircle } from "react-icons/fa";

const LearningOutcomes = () => {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Learning Outcomes
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {outcomes.map((item, index) => (
             <div
    key={index}
    className="bg-white shadow p-5 rounded-lg flex items-center gap-3"
  >
    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />

    <span>{item}</span>
  </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default LearningOutcomes;