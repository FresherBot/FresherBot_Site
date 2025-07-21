import React, { useState } from 'react';

function Howtodo() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01",
      title: "CRT, LMS, CST Assessment",
      description: "The CRT, LMS, and CST assessments are designed to evaluate students across various stages of their learning journey.",
      content: (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Candidates</h3>
            <div className="flex gap-2">
              <div className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-600">joe@gmail.com</div>
              <div className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-600">maya@gmail.com</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Subject</h3>
              <input
                type="text"
                value="Invitation to Equip's Developer Assessment"
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-700"
                readOnly
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Email Body</h3>
              <div className="p-5 bg-gray-50 rounded-xl text-gray-600 space-y-3">
                <p>Hello there,</p>
                <p>Congratulations on being shortlisted for the next round. Here is the link to the assessment: <a href="#" className="text-blue-600 hover:text-blue-700">Assessment Link</a></p>
                <p>The assessment will take roughly 30 minutes and will need camera and microphone access.</p>
                <p>All the best!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "Candidates attempt remotely",
      description: "Candidates complete the assessment at their convenience.",
      content: (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-semibold text-gray-800">John Doe</h3>
                <p className="text-sm text-gray-500">Started 2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">In Progress</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-semibold text-gray-800">Sarah Smith</h3>
                <p className="text-sm text-gray-500">Completed 1 hour ago</p>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">Completed</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">Mike Johnson</h3>
                <p className="text-sm text-gray-500">Not started</p>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Pending</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Shortlist only the best",
      description: "Review and analyze candidate performance.",
      content: (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">SS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sarah Smith</h3>
                  <p className="text-sm text-gray-500">98% Score</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                Shortlist
              </button>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">John Doe</h3>
                  <p className="text-sm text-gray-500">85% Score</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                Shortlist
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F1EDFF] to-[#8F76FF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            HOW IT WORKS
          </span>
        </div>

        <h1 className="text-5xl title-font mb-16 text-gray-900 font-bold">
          Only 3 Steps? It’s Like<br />We’re Spoiling You!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`p-6 rounded-2xl cursor-pointer transition-all ${
                  activeStep === parseInt(step.number)
                    ? 'bg-[#8F76FF] text-white shadow-lg'
                    : 'bg-white hover:bg-[#BEB2F3] text-gray-800 shadow'
                }`}
                onClick={() => setActiveStep(parseInt(step.number))}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-xl font-bold ${
                    activeStep === parseInt(step.number) ? 'text-white' : 'text-[#8F76FF]'
                  }`}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className={activeStep === parseInt(step.number) ? 'text-blue-100' : 'text-gray-500'}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`step-content ${
                  activeStep === parseInt(step.number) ? 'block' : 'hidden'
                }`}
              >
                {step.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtodo;
