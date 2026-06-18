import { FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            Summer Workshop 2026
          </span>

          <h1 className="text-5xl font-bold mt-6 mb-6">
            AI & Robotics Summer Workshop
          </h1>

          <p className="text-lg mb-8">
            Learn Artificial Intelligence, Robotics,
            Coding, and Problem Solving through
            exciting hands-on projects.
          </p>

          <button className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Enroll Now
          </button>
        </div>

        <div className="flex justify-center">
          <FaRobot size={250} />
        </div>

      </div>

    </section>
  );
};

export default Hero;