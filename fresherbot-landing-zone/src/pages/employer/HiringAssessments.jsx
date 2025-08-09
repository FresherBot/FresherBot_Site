
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HiringAssessments = () => {
  const assessmentTypes = [
    {
      id: 1,
      title: "Technical Skills Assessment",
      description: "Evaluate candidates' programming skills, problem-solving abilities, and technical knowledge.",
      features: [
        "Customizable coding challenges",
        "Multiple choice technical questions",
        "Automated evaluation",
        "Plagiarism detection",
        "Detailed performance analytics"
      ]
    },
    {
      id: 2,
      title: "Aptitude Assessment",
      description: "Assess candidates' logical reasoning, numerical ability, and general aptitude.",
      features: [
        "Standardized question bank",
        "Adjustable difficulty levels",
        "Timed assessments",
        "Percentile scoring",
        "Comparative analytics"
      ]
    },
    {
      id: 3,
      title: "Domain-Specific Assessment",
      description: "Evaluate candidates' knowledge in specific domains like data science, web development, cloud computing, etc.",
      features: [
        "Industry-aligned questions",
        "Real-world problem scenarios",
        "Project-based evaluations",
        "Expert-designed challenges",
        "Skill-gap analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 mt-8 container mx-auto px-4 py-12 ">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: 'rgb(3 105 161)'}}>Hiring Assessments</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our comprehensive assessment platform helps you identify the best talent efficiently.
            Create customized assessments that evaluate candidates on skills that matter for your roles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assessmentTypes.map((assessment) => (
            <Card key={assessment.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{assessment.title}</CardTitle>
                <CardDescription className="mt-2">{assessment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {assessment.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-fresherbot-green mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your hiring process?</h2>
            <p className="mb-6 text-gray-600">
              Our team will work with you to create tailored assessments that meet your specific hiring needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HiringAssessments;
