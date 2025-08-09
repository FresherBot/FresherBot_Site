
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Hackathon = () => {
  const benefits = [
    {
      id: 1,
      title: "Brand Visibility",
      description: "Showcase your company culture and tech capabilities to promising tech talent."
    },
    {
      id: 2,
      title: "Talent Pipeline",
      description: "Build relationships with highly skilled candidates and potential future employees."
    },
    {
      id: 3,
      title: "Real Problem Solving",
      description: "Get innovative solutions to actual business challenges your company faces."
    },
    {
      id: 4,
      title: "Cost-Effective Recruiting",
      description: "Evaluate candidates' skills in action, reducing hiring costs and improving quality."
    }
  ];
  
  const upcomingHackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge",
      date: "June 15-17, 2023",
      status: "Registrations Open",
      participants: "250+",
      theme: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "FinTech Disruption",
      date: "July 8-10, 2023",
      status: "Coming Soon",
      participants: "200+",
      theme: "Financial Technology"
    }
  ];
  
  const pastHackathons = [
    {
      id: 1,
      title: "Sustainable Tech Solutions",
      date: "March 10-12, 2023",
      participants: "328",
      theme: "Sustainability"
    },
    {
      id: 2,
      title: "Healthcare Innovation",
      date: "January 20-22, 2023",
      participants: "256",
      theme: "Healthcare Technology"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12 mt-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4"style={{color: 'rgb(3 105 161)'}} >Hackathons for Recruitment</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Host or participate in hackathons designed to identify exceptional tech talent.
            Our platform helps companies discover highly skilled developers while solving real business challenges.
          </p>
          <div className="mt-6">
            <Button size="lg" className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue mr-4">
              Host a Hackathon
            </Button>
            <Button size="lg" variant="outline">
              Explore Events
            </Button>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Host a Hackathon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Separator className="my-12" />
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingHackathons.map((hackathon) => (
              <Card key={hackathon.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{hackathon.title}</CardTitle>
                    <Badge className={hackathon.status === "Registrations Open" ? "bg-green-500" : "bg-yellow-500"}>
                      {hackathon.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="font-medium">Date:</span> {hackathon.date}</p>
                    <p><span className="font-medium">Expected Participants:</span> {hackathon.participants}</p>
                    <p><span className="font-medium">Theme:</span> {hackathon.theme}</p>
                    <div className="mt-4">
                      <Button className={hackathon.status === "Registrations Open" ? "bg-fresherbot-blue hover:bg-fresherbot-lightBlue" : "bg-gray-400"}>
                        {hackathon.status === "Registrations Open" ? "Register Now" : "Get Notified"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Past Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastHackathons.map((hackathon) => (
              <Card key={hackathon.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{hackathon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="font-medium">Date:</span> {hackathon.date}</p>
                    <p><span className="font-medium">Participants:</span> {hackathon.participants}</p>
                    <p><span className="font-medium">Theme:</span> {hackathon.theme}</p>
                    <div className="mt-4">
                      <Button variant="outline">
                        View Results
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathon;
