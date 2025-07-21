
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, BarChart, Zap, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programCategories = [
  {
    title: "Tech Skills",
    icon: <Code className="h-6 w-6 text-fresherbot-primary" />,
    programs: [
      {
        title: "Full Stack Development",
        duration: "12 weeks",
        level: "Beginner to Intermediate",
        highlights: ["HTML/CSS/JS", "React", "Node.js", "Database Design"]
      },
      {
        title: "Data Science & Analytics",
        duration: "10 weeks",
        level: "Intermediate",
        highlights: ["Python", "SQL", "Data Visualization", "Statistical Analysis"]
      }
    ]
  },
  {
    title: "Career Boosters",
    icon: <Zap className="h-6 w-6 text-fresherbot-primary" />,
    programs: [
      {
        title: "Professional Communication",
        duration: "6 weeks",
        level: "All Levels",
        highlights: ["Business Writing", "Presentation Skills", "Negotiation", "Team Collaboration"]
      },
      {
        title: "Interview Mastery",
        duration: "4 weeks",
        level: "All Levels",
        highlights: ["Resume Building", "Technical Interviews", "HR Rounds", "Salary Negotiation"]
      }
    ]
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="py-20 bg-fresherbot-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 border border-fresherbot-primary text-fresherbot-primary text-sm font-medium rounded-full mb-4">
              Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fresherbot-primary">Featured Learning Paths</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Designed by industry experts to build market-ready skills and accelerate your career growth
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-fresherbot-darker border border-fresherbot-primary/20 rounded-xl overflow-hidden"
            >
              <div className="p-6 border-b border-fresherbot-primary/20">
                <h3 className="flex items-center text-xl font-bold text-fresherbot-primary">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                {category.programs.map((program, index) => (
                  <div key={index} className="bg-fresherbot-dark border border-fresherbot-primary/10 rounded-lg p-4 hover:border-fresherbot-primary/30 transition-all">
                    <h4 className="text-lg font-semibold text-fresherbot-primary mb-2">{program.title}</h4>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <div className="flex items-center text-sm text-foreground/70">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-foreground/70">
                        <Sparkles className="h-4 w-4 mr-1" />
                        {program.level}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-foreground/80">
                          <div className="h-1 w-1 bg-fresherbot-primary rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" className="text-fresherbot-primary hover:text-fresherbot-primary/80 hover:bg-fresherbot-primary/10 w-full justify-between mt-2" asChild>
                  <Link to={`/candidate/programs`}>
                    <span>View all {category.title.toLowerCase()}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-fresherbot-primary text-fresherbot-darker hover:bg-fresherbot-primary/90 px-6 py-6 text-lg rounded-md" asChild>
            <Link to="/candidate/programs">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
