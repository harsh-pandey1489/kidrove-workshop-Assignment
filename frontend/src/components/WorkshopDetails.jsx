import {
  FaClock,
  FaCalendarAlt,
  FaLaptop,
  FaRupeeSign,
  FaUserGraduate,
} from "react-icons/fa";

const data = [
  {
    icon: <FaUserGraduate />,
    title: "Age Group",
    value: "8 - 14 Years",
  },
  {
    icon: <FaClock />,
    title: "Duration",
    value: "4 Weeks",
  },
  {
    icon: <FaLaptop />,
    title: "Mode",
    value: "Online",
  },
  {
    icon: <FaRupeeSign />,
    title: "Fee",
    value: "₹2,999",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Start Date",
    value: "15 July 2026",
  },
];

const WorkshopDetails = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {data.map((item) => (
            <div
              key={item.title}
              className="shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 transition"
            >
              <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default WorkshopDetails;