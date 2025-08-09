
import React from "react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Candidate = () => {
  const candidateOptions = [
    {
      title: "Blog",
      description: "Read our latest articles and updates on career development, interview tips, and industry trends.",
      link: "/candidate/blog",
      external: true,
      icon: <BookOpen className="h-6 w-6 text-fresherbot-blue" />
    },
    {
      title: "Programs",
      description: "Explore our training programs designed to equip you with in-demand skills for today's job market.",
      link: "/candidate/programs",
      external: false,
      icon: <GraduationCap className="h-6 w-6 text-fresherbot-blue" />
    },
    {
      title: "Internships",
      description: "Find internship opportunities across various domains and durations to kickstart your career.",
      link: "/candidate/internships",
      external: false,
      icon: <Briefcase className="h-6 w-6 text-fresherbot-blue" />
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl mb-12 shadow-sm">
          <h1 className="text-4xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>For Candidates</h1>
          
          <div className="max-w-3xl mb-8">
            <p className="text-lg mb-4">
              FresherBot is designed to help you launch your career successfully. Whether you're 
              looking for training programs, internship opportunities, or valuable career insights, 
              we have resources to support your professional journey.
            </p>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {candidateOptions.map((option, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="bg-blue-50 inline-flex p-3 rounded-lg mb-4">
                    {option.icon}
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{option.description}</p>
                </CardContent>
                <CardFooter>
                  {option.external ? (
                    <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        Explore {option.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                      <Link to={option.link}>
                        Explore {option.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="bg-gradient-to-r from-fresherbot-blue to-fresherbot-lightBlue p-8 rounded-lg mt-12 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="mb-6">
            Create an account to access personalized recommendations and updates about
            opportunities that match your profile.
          </p>
          <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100" asChild>
            <Link to="/register">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Candidate;
