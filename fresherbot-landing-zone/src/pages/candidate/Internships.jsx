import React, { useState, useEffect } from "react";
// import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, MapPin, Banknote, CheckCircle2, BookmarkCheck, Clock } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Internships = () => {
  const [activeTab, setActiveTab] = useState("long-term");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    document.title = "Internships - FresherBot";
  }, []);


  //  FROM CREEKSFORGREEKS
  const longTermInternships = [
    {
      id: 1,
      title: "Software Development Engineer",
      company: "TechCorp Inc.",
      location: "Hyderabad",
      duration: "6 months",
      stipend: "₹25,000/month",
      apsce: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Analytics Hub",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹20,000/month",
      apsce: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
      tags: ["Python", "SQL", "Tableau"]
    },
    {
      id: 3,
      title: "DevOps Engineer Intern",
      company: "CloudSys Technologies",
      location: "Chennai",
      duration: "6 months",
      stipend: "₹22,000/month",
      apsce: false,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80",
      tags: ["AWS", "Docker", "Jenkins"]
    }
  ];
    //  FROM CREEKSFORGREEKS
  const shortTermInternships = [
    {
      id: 1,
      title: "UI/UX Design Intern",
      company: "DesignX Studios",
      location: "Remote",
      duration: "2 months",
      stipend: "₹15,000/month",
      apsce: false,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=300&q=80",
      tags: ["Figma", "Adobe XD", "User Research"]
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "GrowthGen",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹12,000/month",
      apsce: true,
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=300&q=80",
      tags: ["SEO", "Social Media", "Analytics"]
    },
    {
      id: 3,
      title: "Content Writing Intern",
      company: "ContentFirst",
      location: "Remote",
      duration: "2 months",
      stipend: "₹10,000/month",
      apsce: false,
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=300&q=80",
      tags: ["Blogging", "Copywriting", "SEO Writing"]
    }
  ];
    //  FROM CREEKSFORGREEKS
    // all can be written in one list and can be filterd but took different lists without filtering
  const apsceInternships = [
    {
      id: 1,
      title: "ML Engineer Intern",
      company: "AI Solutions",
      location: "Hyderabad",
      duration: "6 months",
      stipend: "₹25,000/month",
      apsce: true,
      image: "https://images.unsplash.com/photo-1596986874896-31524c952f16?auto=format&fit=crop&w=300&q=80",
      tags: ["Python", "TensorFlow", "Computer Vision"]
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Analytics Hub",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹20,000/month",
      apsce: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
      tags: ["Python", "SQL", "Tableau"]
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      company: "GrowthGen",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹12,000/month",
      apsce: true,
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=300&q=80",
      tags: ["SEO", "Social Media", "Analytics"]
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const renderInternships = (internships) => {
    return (
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {internships.map((internship) => (
          <motion.div key={internship.id} variants={fadeIn}>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
              <div className="h-40 overflow-hidden">
                <img 
                  src={internship.image} 
                  alt={`${internship.title} at ${internship.company}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{internship.title}</CardTitle>
                    <CardDescription className="mt-2">{internship.company}</CardDescription>
                  </div>
                  {internship.apsce && (
                    <Badge className="bg-fresherbot-green">
                      <BookmarkCheck className="h-3 w-3 mr-1" /> APSCHE
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <p className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-gray-500" /> {internship.location}</p>
                  <p className="flex items-center"><CalendarClock className="h-4 w-4 mr-2 text-gray-500" /> {internship.duration}</p>
                  <p className="flex items-center"><Banknote className="h-4 w-4 mr-2 text-gray-500" /> {internship.stipend}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {internship.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12 mt-12">
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl mb-10 shadow-sm">
          <h1 className="text-4xl font-bold mb-4" style={{color: 'rgb(3 105 161)'}}>Internship Opportunities</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Find the perfect internship opportunity to kickstart your career. We offer a wide range
            of internships across various domains and durations.
          </p>

          {mounted && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-fresherbot-blue mb-1">
                  <CountUp end={250} duration={2.5} />+
                </p>
                <p className="text-gray-600 text-sm">Active Internships</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-fresherbot-blue mb-1">
                  <CountUp end={120} duration={2.5} />+
                </p>
                <p className="text-gray-600 text-sm">Partner Companies</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-fresherbot-blue mb-1">
                  <CountUp end={45} duration={2.5} />+
                </p>
                <p className="text-gray-600 text-sm">APSCHE Approved</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-fresherbot-blue mb-1">
                  <CountUp end={5000} duration={2.5} />+
                </p>
                <p className="text-gray-600 text-sm">Students Placed</p>
              </div>
            </div>
          )}
        </div>
        
        <Tabs defaultValue="long-term" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-blue-50 p-1 rounded-lg">
            <TabsTrigger 
              value="long-term" 
              className="flex items-center data-[state=active]:bg-fresherbot-blue data-[state=active]:text-white rounded-md"
            >
              <CalendarClock className="h-4 w-4 mr-2" /> Long-term
            </TabsTrigger>
            <TabsTrigger 
              value="short-term"
              className="flex items-center data-[state=active]:bg-fresherbot-blue data-[state=active]:text-white rounded-md"
            >
              <Clock className="h-4 w-4 mr-2" /> Short-term
            </TabsTrigger>
            <TabsTrigger 
              value="apsche"
              className="flex items-center data-[state=active]:bg-fresherbot-blue data-[state=active]:text-white rounded-md"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" /> APSCHE Approved
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="long-term">
            {renderInternships(longTermInternships)}
          </TabsContent>
          
          <TabsContent value="short-term">
            {renderInternships(shortTermInternships)}
          </TabsContent>
          
          <TabsContent value="apsche">
            <div className="mb-6 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-fresherbot-green" />
                APSCHE Approved Internships
              </h2>
              <p className="text-gray-600">
                These internships are officially approved by the Andhra Pradesh State Council of Higher Education (APSCHE)
                and can be counted towards your academic credits.
              </p>
            </div>
            {renderInternships(apsceInternships)}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Internships;
