
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Calendar, Users, Building, Briefcase } from "lucide-react";

const CampusHiring = () => {
  const campusHiringSteps = [
    {
      id: 1,
      title: "Campus Selection",
      description: "Choose from our network of 500+ partner colleges across India.",
      icon: Building
    },
    {
      id: 2,
      title: "Campaign Planning",
      description: "Plan your recruitment drive schedule and requirements.",
      icon: Calendar
    },
    {
      id: 3,
      title: "Candidate Filtering",
      description: "Use our pre-assessment tools to filter candidates.",
      icon: Users
    },
    {
      id: 4,
      title: "Campus Drives",
      description: "Conduct on-campus or virtual recruitment drives.",
      icon: Briefcase
    }
  ];
  
  const successMetrics = {
    colleges: "500+",
    students: "100,000+",
    placements: "25,000+",
    companies: "250+"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12 mt-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4"style={{color: 'rgb(3 105 161)'}}>Campus Hiring Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Connect with top talent from colleges across India through our streamlined campus
            recruitment platform. Simplify your hiring process and find the perfect candidates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Campus Hiring?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-fresherbot-green mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Extensive College Network</h3>
                  <p className="text-gray-600">Access to 500+ engineering and management colleges across India</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-fresherbot-green mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Pre-assessed Talent Pool</h3>
                  <p className="text-gray-600">All students undergo basic aptitude and technical assessments</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-fresherbot-green mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">End-to-End Management</h3>
                  <p className="text-gray-600">Complete handling of drive logistics from scheduling to offer management</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-fresherbot-green mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Virtual Drives</h3>
                  <p className="text-gray-600">Option for remote assessment and interview processes</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-fresherbot-green mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Analytics Dashboard</h3>
                  <p className="text-gray-600">Comprehensive insights into your hiring process and candidate performance</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Success Numbers</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-fresherbot-blue">{successMetrics.colleges}</p>
                <p className="text-gray-600">Partner Colleges</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-fresherbot-blue">{successMetrics.students}</p>
                <p className="text-gray-600">Registered Students</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-fresherbot-blue">{successMetrics.placements}</p>
                <p className="text-gray-600">Successful Placements</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-fresherbot-blue">{successMetrics.companies}</p>
                <p className="text-gray-600">Partner Companies</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusHiringSteps.map((step) => (
              <Card key={step.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-full mb-4">
                    <step.icon className="h-8 w-8 text-fresherbot-blue" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="engineering" className="w-full mb-16">
          <h2 className="text-2xl font-bold mb-6">College Categories</h2>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="engineering">Engineering Colleges</TabsTrigger>
            <TabsTrigger value="management">Management Institutes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="engineering">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Top Engineering Colleges in Our Network</h3>
              <p className="text-gray-600 mb-4">
                We have partnerships with premier engineering institutions across India,
                giving you access to the brightest technical talent.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="bg-gray-50 p-3 rounded">IIT Madras</li>
                <li className="bg-gray-50 p-3 rounded">NIT Warangal</li>
                <li className="bg-gray-50 p-3 rounded">BITS Pilani</li>
                <li className="bg-gray-50 p-3 rounded">VIT Vellore</li>
                <li className="bg-gray-50 p-3 rounded">IIIT Hyderabad</li>
                <li className="bg-gray-50 p-3 rounded">College of Engineering, Pune</li>
                <li className="bg-gray-50 p-3 rounded">Delhi Technological University</li>
                <li className="bg-gray-50 p-3 rounded">SRM University</li>
                <li className="bg-gray-50 p-3 rounded">PES University</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="management">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Top Management Institutes in Our Network</h3>
              <p className="text-gray-600 mb-4">
                Access management graduates from prestigious business schools with skills
                in marketing, finance, HR, and operations.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="bg-gray-50 p-3 rounded">IIM Ahmedabad</li>
                <li className="bg-gray-50 p-3 rounded">IIM Bangalore</li>
                <li className="bg-gray-50 p-3 rounded">XLRI Jamshedpur</li>
                <li className="bg-gray-50 p-3 rounded">FMS Delhi</li>
                <li className="bg-gray-50 p-3 rounded">SPJIMR Mumbai</li>
                <li className="bg-gray-50 p-3 rounded">MDI Gurgaon</li>
                <li className="bg-gray-50 p-3 rounded">IIM Kozhikode</li>
                <li className="bg-gray-50 p-3 rounded">NMIMS Mumbai</li>
                <li className="bg-gray-50 p-3 rounded">IMT Ghaziabad</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-fresherbot-blue text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Campus Hiring?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let us help you find the perfect fresh talent for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-fresherbot-blue">
              Schedule a Consultation
            </Button>
            <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100">
              Download Brochure
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampusHiring;
