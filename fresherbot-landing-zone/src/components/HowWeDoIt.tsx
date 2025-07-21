
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
      icon: <BookOpen className="h-8 w-8 text-fresherbot-primary" />,
      title: "Well-Defined Teaching Methodology",
      description: "Our structured curriculum follows industry standards with practical projects, ensuring you gain relevant skills through hands-on experience and real-world problem solving.",
      color: "from-fresherbot-primary/10 to-fresherbot-primary/5",
      border: "border-fresherbot-primary/20"
    },
    {
      icon: <Cpu className="h-8 w-8 text-fresherbot-secondary" />,
      title: "Tech-Enabled Learning & AI Skills",
      description: "Stay ahead with cutting-edge technology training and AI-powered learning tools that adapt to your progress, offering personalized paths to master in-demand skills.",
      color: "from-fresherbot-secondary/10 to-fresherbot-secondary/5",
      border: "border-fresherbot-secondary/20"
    },
    {
      icon: <Users className="h-8 w-8 text-fresherbot-accent" />,
      title: "Mentorship & Guidance",
      description: "Connect with industry experts who provide personalized guidance, feedback on your projects, and career advice to help you navigate your professional journey.",
      color: "from-fresherbot-accent/10 to-fresherbot-accent/5",
      border: "border-fresherbot-accent/20"
    },
    {
      icon: <Network className="h-8 w-8 text-fresherbot-info" />,
      title: "Network Access & Leverage",
      description: "Gain access to our extensive network of alumni, industry professionals, and corporate partners, opening doors to opportunities through meaningful connections.",
      color: "from-fresherbot-info/10 to-fresherbot-info/5",
      border: "border-fresherbot-info/20"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-fresherbot-primary" />,
      title: "Leadership & Personal Development",
      description: "Develop essential soft skills, emotional intelligence, and leadership qualities through workshops, team projects, and personalized coaching sessions.",
      color: "from-fresherbot-primary/10 to-fresherbot-primary/5",
      border: "border-fresherbot-primary/20"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-fresherbot-secondary/10 to-fresherbot-accent/10 text-fresherbot-secondary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="heading-gradient">How We Do It</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our comprehensive approach combines cutting-edge technology, industry expertise, and personalized guidance to ensure your success.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {methodologies.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={itemVariants}
            >
              <div className={`rounded-2xl p-8 bg-gradient-to-br ${item.color} ${item.border} border shadow-sm card-hover h-full`}>
                <div className="bg-white p-3 rounded-xl shadow-sm inline-block mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary shadow-lg overflow-hidden">
            <div className="flex items-center bg-white rounded-full p-1">
              <div className="bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary text-white px-6 py-3 rounded-full font-semibold">
                97% Success Rate
              </div>
              <div className="px-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fresherbot-success mr-2" />
                  <span className="text-sm font-medium">Our students consistently achieve their career goals</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
