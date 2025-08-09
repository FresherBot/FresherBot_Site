import { useState } from "react";
import { FaLaptopCode, FaUsers, FaCubes, FaChartLine, FaProjectDiagram } from "react-icons/fa";

const dropdownItems = [
  {
    icon: <FaLaptopCode className="text-orange-500 text-xl" />,
    title: "IT Services",
    description: "Streamline workflows and collaborate securely with your IT clients",
  },
  {
    icon: <FaUsers className="text-blue-500 text-xl" />,
    title: "Client Work",
    description: "Deliver client projects on time and within budget",
  },
  {
    icon: <FaCubes className="text-green-500 text-xl" />,
    title: "Product Teams",
    description: "Collaborate across departments to build better products",
  },
  {
    icon: <FaChartLine className="text-purple-500 text-xl" />,
    title: "Agencies",
    description: "Manage creative projects and client relationships smoothly",
  },
  {
    icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
    title: "PMOs",
    description: "Gain visibility into project portfolios and team capacity",
  },
];

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-[#0b0d23] px-6 py-4 text-white">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative"
      >
        <button className="hover:text-purple-300 transition font-medium text-base">
          Why FresherBot
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-[700px] bg-white text-black shadow-xl rounded-xl p-6 grid grid-cols-2 gap-5 z-50">
            {dropdownItems.map((item, index) => (
              <div key={index} className="flex gap-4 items-start hover:bg-gray-100 p-3 rounded-lg transition cursor-pointer">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
