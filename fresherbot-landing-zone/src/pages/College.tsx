
import React from "react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const College = () => {
  const collegeOptions = [
    {
      title: "Learning Management System (LMS)",
      description: "Transform your educational institution with our comprehensive Learning Management System designed specifically for colleges and universities.",
      link: "/college/lms",
      icon: <BookOpen className="h-6 w-6 text-fresherbot-blue" />
    },
    {
      title: "Campus Recruitment Training (CRT)",
      description: "Prepare your students for successful campus placements with our comprehensive Campus Recruitment Training program.",
      link: "/college/crt",
      icon: <GraduationCap className="h-6 w-6 text-fresherbot-blue" />
    },
    {
      title: "Human Resource Career Center (HRCC)",
      description: "Enhance your placement cell capabilities and provide students with resources they need to secure their dream jobs.",
      link: "/college/hrcc",
      icon: <Users className="h-6 w-6 text-fresherbot-blue" />
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
          <h1 className="text-4xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>For Colleges</h1>
          
          <div className="max-w-3xl mb-8">
            <p className="text-lg mb-4">
              FresherBot partners with educational institutions to enhance student employability and
              streamline the campus recruitment process. Our solutions are designed to bridge the gap
              between academia and industry.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Trophy className="h-6 w-6 text-fresherbot-blue" />
              <span className="font-medium">Partner with excellence - Join 300+ top institutions nationwide</span>
            </div>
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
          {collegeOptions.map((option, index) => (
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
                  <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                    <Link to={option.link}>
                      Explore {option.title}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="bg-gradient-to-r from-fresherbot-blue to-fresherbot-lightBlue p-8 rounded-lg mt-12 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Join Our College Network</h2>
          <p className="mb-6">
            Partner with FresherBot to provide world-class career services to your students and improve
            your institution's placement record.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default College;
