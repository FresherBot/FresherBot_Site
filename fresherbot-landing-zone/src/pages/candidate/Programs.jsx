import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, BarChart2, Cloud, Palette } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Learn modern web development technologies including React, Node.js, and MongoDB.",
      duration: "12 weeks",
      level: "Intermediate",
      icon: <Code className="h-10 w-10 text-fresherbot-blue mb-2" />
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master Python, data analysis, statistics and machine learning fundamentals.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      icon: <BarChart2 className="h-10 w-10 text-fresherbot-blue mb-2" />
    },
    {
      id: 3,
      title: "Cloud Architecture",
      description: "Learn AWS, Azure, and Google Cloud Platform fundamentals and architecture patterns.",
      duration: "8 weeks",
      level: "Advanced",
      icon: <Cloud className="h-10 w-10 text-fresherbot-blue mb-2" />
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Learn design principles, user research, wireframing, and prototyping skills.",
      duration: "6 weeks",
      level: "Beginner",
      icon: <Palette className="h-10 w-10 text-fresherbot-blue mb-2" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 container mx-auto px-4 py-12 mt-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold  mb-4" style={{color: 'rgb(3 105 161)'}}>Our Programs</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our industry-focused training programs designed to equip you with
            in-demand skills for today's competitive job market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex flex-col">
                {/* Single Column Layout */}
                <div className="flex flex-col items-center p-4">
                  {program.icon}
                  <CardTitle className="text-center">{program.title}</CardTitle>
                  <CardDescription className="mt-2 text-center">
                    Duration: {program.duration} | Level: {program.level}
                  </CardDescription>
                  <CardContent className="mt-4">
                    <p>{program.description}</p>
                  </CardContent>
                  <CardFooter className="mt-4">
                    <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue shadow-md transition-all">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Not sure which program is right for you?</h2>
            <p className="mb-6">Our career counselors can help you choose the perfect program based on your goals.</p>
            <Button className="bg-fresherbot-green hover:bg-fresherbot-green/90 shadow-md transition-all">Schedule a Consultation</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;