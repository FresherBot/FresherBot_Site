import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Clock, User } from "lucide-react";

function Howtodo() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      title: "CRT, LMS, CST Assessment",
      description: "Assess candidates across learning phases.",
      content: (
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Candidates</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1.5 rounded-full text-xs text-purple-700 shadow">
                joe@gmail.com
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1.5 rounded-full text-xs text-purple-700 shadow">
                maya@gmail.com
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-1">Subject</h3>
              <input
                type="text"
                value="Invitation to Equip's Developer Assessment"
                className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 shadow-inner text-sm"
                readOnly
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-1">Email Body</h3>
              <div className="p-4 bg-gray-50 rounded-lg text-gray-600 space-y-2 shadow-inner text-sm">
                <p>Hello there,</p>
                <p>
                  You're shortlisted! Start your assessment here:{" "}
                  <a href="#" className="text-[#8F76FF] font-medium hover:text-[#F472B6] transition">
                    Assessment Link
                  </a>
                </p>
                <p>It will take about 30 minutes. Allow camera and mic access.</p>
                <p>Good luck!</p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      number: "02",
      title: "Candidates attempt remotely",
      description: "Self-paced remote assessments.",
      content: (
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-4">
            {[
              { name: "John Doe", status: "In Progress", time: "2 hours ago", badge: "bg-yellow-100 text-yellow-700", icon: <Clock size={16}/> },
              { name: "Sarah Smith", status: "Completed", time: "1 hour ago", badge: "bg-green-100 text-green-700", icon: <CheckCircle size={16}/> },
              { name: "Mike Johnson", status: "Pending", time: "Not started", badge: "bg-gray-100 text-gray-600", icon: <User size={16}/> },
            ].map((user, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">{user.name}</h3>
                  <p className="text-xs text-gray-500">{user.time}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${user.badge}`}>
                  {user.icon} {user.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ),
    },
    {
      number: "03",
      title: "Shortlist only the best",
      description: "Evaluate scores & finalize hires.",
      content: (
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-4">
            {[
              { name: "Sarah Smith", score: "98%", initials: "SS" },
              { name: "John Doe", score: "85%", initials: "JD" },
            ].map((candidate, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center text-[#8F76FF] font-semibold text-sm shadow">
                    {candidate.initials}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">{candidate.name}</h3>
                    <p className="text-xs text-gray-500">{candidate.score} Score</p>
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-gradient-to-r from-[#8F76FF] to-[#F472B6] text-white rounded-lg hover:opacity-90 transition text-sm">
                  Shortlist
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-[#F1EDFF] via-white to-[#EDE9FE]">
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.span
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#8F76FF]/20 to-[#F472B6]/20 text-[#8F76FF] rounded-full text-xs font-semibold shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            HOW IT WORKS
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-[#F472B6] to-[#8F76FF] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Only 3 Steps? We're Spoiling You!
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            A simple, elegant process to help you evaluate and hire the best candidates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Steps list */}
          <div className="space-y-3">
            {steps.map((step) => {
              const stepNumber = parseInt(step.number);
              const isActive = activeStep === stepNumber;

              return (
                <motion.div
                  key={step.number}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#8F76FF] to-[#F472B6] text-white shadow-lg"
                      : "bg-white hover:bg-[#F8F6FF] text-gray-800 shadow"
                  }`}
                  onClick={() => setActiveStep(stepNumber)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-lg font-bold ${
                        isActive ? "text-white" : "text-[#8F76FF]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                      <p className={isActive ? "text-purple-100 text-xs" : "text-gray-500 text-xs"}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Step content with AnimatePresence */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {steps.map(
                (step) =>
                  activeStep === parseInt(step.number) && (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.content}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtodo;