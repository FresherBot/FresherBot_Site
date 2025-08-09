import React from "react";
import {
  BookOpen,
  Cpu,
  Users,
  Network,
  GraduationCap,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const HowWeDoIt = () => {
  const methodologies = [
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Structured Curriculum",
      description:
        "Learn with a well-organized, practical-first curriculum that aligns with current industry standards.",
      iconBg: "bg-indigo-500"
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "AI + Tech Enabled Learning",
      description:
        "Personalized and adaptive tools powered by AI to keep your skills future-ready.",
      iconBg: "bg-purple-500"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Mentor Support",
      description:
        "1:1 guidance, portfolio reviews, and career mentorship from industry professionals.",
      iconBg: "bg-rose-500"
    },
    {
      icon: <Network className="h-6 w-6 text-white" />,
      title: "Access to Industry Network",
      description:
        "Connect with our alumni, hiring partners, and exclusive internal job boards.",
      iconBg: "bg-blue-500"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Leadership Training",
      description:
        "Improve soft skills, team communication, and leadership capacity through experiential learning.",
      iconBg: "bg-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F4F2FF] to-[#E4E0FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            How We Do It
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We combine structured learning, expert mentorship, and tech-enabled tools to ensure real outcomes for every learner.
          </motion.p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {methodologies.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl hover:scale-[1.02] border border-gray-100"
              variants={itemVariants}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA box */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white border border-gray-200 rounded-full px-6 py-4 shadow-lg flex items-center space-x-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold text-sm">
              97% Success Rate
            </div>
            <div className="flex items-center space-x-2 text-gray-700 text-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Our learners consistently hit their career goals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
