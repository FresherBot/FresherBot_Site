import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BarChart, Building } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CRT = () => {
  useEffect(() => {
    document.title = "Campus Recruitment Training - FresherBot";
  }, []);

  const crtModules = [
    {
      id: 1,
      title: "Aptitude Training",
      description: "Comprehensive preparation for quantitative aptitude, logical reasoning, and verbal ability tests.",
      features: [
        "Practice tests with company-specific patterns",
        "Time management strategies",
        "Video tutorials for complex topics",
        "Regular mock tests"
      ]
    },
    {
      id: 2,
      title: "Technical Training",
      description: "Domain-specific training for programming, data structures, algorithms, and other technical subjects.",
      features: [
        "Hands-on coding sessions",
        "Industry-relevant projects",
        "Expert-led workshops",
        "Technical assessment preparation"
      ]
    },
    {
      id: 3,
      title: "Soft Skills Development",
      description: "Essential communication and interpersonal skills training required for corporate success.",
      features: [
        "Group discussion practice",
        "Interview preparation",
        "Business communication",
        "Personality development"
      ]
    },
    {
      id: 4,
      title: "HR Interview Preparation",
      description: "Comprehensive preparation for HR rounds with mock interviews and feedback sessions.",
      features: [
        "Common HR questions and answers",
        "Resume building workshops",
        "Body language training",
        "Stress interview practice"
      ]
    }
  ];
  
  const statistics = [
    { value: 85, suffix: "%", label: "Placement Rate", icon: <GraduationCap className="h-6 w-6 text-fresherbot-blue" /> },
    { value: 200, suffix: "+", label: "Partner Companies", icon: <Building className="h-6 w-6 text-fresherbot-blue" /> },
    { value: 50000, suffix: "+", label: "Students Trained", icon: <Users className="h-6 w-6 text-fresherbot-blue" /> },
    { value: 300, suffix: "+", label: "College Partners", icon: <BarChart className="h-6 w-6 text-fresherbot-blue" /> }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12 mt-12">
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-sm">
          <h1 className="text-4xl font-bold mb-4" style={{color: 'rgb(3 105 161)'}}>Campus Recruitment Training (CRT)</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Prepare your students for successful campus placements with our comprehensive
            Campus Recruitment Training program. Our industry-aligned training modules help
            students build the skills that employers are looking for.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {statistics.map((stat, index) => (
            <motion.div key={index} variants={fadeIn}>
              <div className="bg-white border border-gray-100 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex p-3 bg-blue-50 rounded-full mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-fresherbot-blue">
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>Our CRT Program</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {crtModules.map((module) => (
              <motion.div key={module.id} variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium mb-2">Key Components:</h3>
                    <ul className="space-y-1">
                      {module.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-fresherbot-blue mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>Program Timeline</h2>
          <div className="relative border-l-2 border-fresherbot-blue pl-8 space-y-12">
            <div>
              <div className="absolute -left-3 mt-1.5"> 
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div className="mx-12">
                <h3 className="text-xl font-bold">Phase 1: Foundation Building</h3>
                <p className="text-gray-600 mt-1">4 weeks</p>
                <p className="mt-2">
                  Focus on fundamental concepts in aptitude, logical reasoning, and verbal ability.
                  Introduction to technical subjects relevant to the students' domains.
                </p>
              </div>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 2: Skill Enhancement</h3>
                <p className="text-gray-600 mt-1">6 weeks</p>
                <p className="mt-2">
                  Deep dive into advanced topics, hands-on projects, and regular practice tests.
                  Introduction to soft skills training and interview preparation.
                </p>
              </div>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 3: Mock Assessments</h3>
                <p className="text-gray-600 mt-1">2 weeks</p>
                <p className="mt-2">
                  Full-length mock tests simulating actual company assessment patterns.
                  Group discussion and mock interview sessions with detailed feedback.
                </p>
              </div>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 4: Company-Specific Preparation</h3>
                <p className="text-gray-600 mt-1">Ongoing</p>
                <p className="mt-2">
                  Targeted preparation for specific companies visiting the campus.
                  Company-specific mock tests and interview preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="bg-fresherbot-blue text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>
            <p className="text-lg mb-6">
              Enhance your students' placement opportunities with our proven Campus Recruitment Training program.
              Let's work together to prepare your students for successful careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100">
                Schedule a Meeting
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Request Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CRT;
