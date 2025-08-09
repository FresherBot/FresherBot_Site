
import React from "react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Briefcase, Code, Building, ChartBar, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Employer = () => {
  const employerOptions = [
    {
      title: "Hiring Assessments",
      description: "Create customized assessments to evaluate candidates efficiently on skills that matter for your roles.",
      link: "/employer/hiring-assessments",
      icon: <ChartBar className="h-8 w-8 text-fresherbot-primary" />,
      color: "from-fresherbot-primary/10 to-fresherbot-primary/5",
      border: "border-fresherbot-primary/20"
    },
    {
      title: "Hackathon",
      description: "Organize or participate in hackathons designed to identify exceptional tech talent.",
      link: "/employer/hackathon",
      icon: <Code className="h-8 w-8 text-fresherbot-secondary" />,
      color: "from-fresherbot-secondary/10 to-fresherbot-secondary/5",
      border: "border-fresherbot-secondary/20"
    },
    {
      title: "Campus Hiring",
      description: "Connect with top talent from colleges across India through our streamlined campus recruitment platform.",
      link: "/employer/campus-hiring",
      icon: <Building className="h-8 w-8 text-fresherbot-accent" />,
      color: "from-fresherbot-accent/10 to-fresherbot-accent/5",
      border: "border-fresherbot-accent/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="section-container">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-fresherbot-primary/10 to-fresherbot-primary/20 text-fresherbot-primary mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                For Organizations
              </motion.span>
              <motion.h1 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="heading-gradient">Discover Top Talent For Your Organization</span>
              </motion.h1>
              
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-lg text-gray-600 mb-6">
                  FresherBot helps companies streamline their recruitment process and find the best talent.
                  Our solutions are designed to make hiring efficient, cost-effective, and result-oriented.
                </p>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <Briefcase className="h-6 w-6 text-fresherbot-primary" />
                  <span className="font-medium">Trusted by 500+ companies for their talent acquisition needs</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="section-container">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {employerOptions.map((option, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`rounded-2xl bg-gradient-to-br ${option.color} ${option.border} border shadow-sm overflow-hidden h-full card-hover`}
                >
                  <Card className="h-full bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="bg-white inline-flex p-4 rounded-xl shadow-sm mb-4">
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-semibold">{option.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{option.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full btn-primary group" asChild>
                        <Link to={option.link} className="flex items-center justify-center">
                          Explore {option.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-20 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary p-10 text-white">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
                  <p className="mb-8 text-white/90 text-lg">
                    Join hundreds of companies that trust FresherBot for their recruitment needs.
                    Let us help you build a strong talent pipeline.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-fresherbot-primary hover:bg-white/90 shadow-lg rounded-full px-8 py-6">
                      <CheckCircle className="mr-2 h-5 w-5" /> Schedule a Demo
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8 py-6">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Employer;
