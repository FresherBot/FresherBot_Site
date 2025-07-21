
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Trophy, Users, Clock, GraduationCap, Building, BarChart3 } from "lucide-react";

const stats = [
  {
    value: 97,
    suffix: "%",
    title: "Placement Rate",
    icon: <Trophy className="h-8 w-8 text-fresherbot-primary" />,
    description: "Success rate for candidates"
  },
  {
    value: 10000,
    suffix: "+",
    title: "Graduates",
    icon: <Users className="h-8 w-8 text-fresherbot-primary" />,
    description: "Successfully placed candidates"
  },
  {
    value: 45,
    suffix: " days",
    title: "Average Time to Placement",
    icon: <Clock className="h-8 w-8 text-fresherbot-primary" />,
    description: "From program completion"
  },
  {
    value: 250,
    suffix: "+",
    title: "College Partners",
    icon: <GraduationCap className="h-8 w-8 text-fresherbot-primary" />,
    description: "Working with us nationwide"
  },
  {
    value: 500,
    suffix: "+",
    title: "Hiring Partners",
    icon: <Building className="h-8 w-8 text-fresherbot-primary" />,
    description: "Leading employers"
  },
  {
    value: 35,
    suffix: "%",
    title: "Average Salary Increase",
    icon: <BarChart3 className="h-8 w-8 text-fresherbot-primary" />,
    description: "After program completion"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-20 bg-fresherbot-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-fresherbot-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fresherbot-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 border border-fresherbot-primary text-fresherbot-primary text-sm font-medium rounded-full mb-4">
              Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fresherbot-primary">Our Success Stories</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              The numbers speak for themselves. See how we've helped thousands of candidates launch their careers.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-fresherbot-dark border border-fresherbot-primary/20 rounded-xl p-6 flex flex-col items-center text-center hover:border-fresherbot-primary/50 transition-all duration-300"
            >
              <div className="bg-fresherbot-primary/10 p-4 rounded-full mb-6">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-fresherbot-primary mb-2">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy={true} />
                {stat.suffix}
              </h3>
              <p className="text-xl font-semibold text-foreground mb-1">{stat.title}</p>
              <p className="text-foreground/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
