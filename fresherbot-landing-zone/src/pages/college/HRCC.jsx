
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const HRCC = () => {
  const [activeTab, setActiveTab] = useState("hrcc1");
  
  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=600",
      alt: "College career fair"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=600",
      alt: "Student using computer in lab"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=600",
      alt: "Programming session"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=600",
      alt: "Student using laptop"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=600",
      alt: "Coding session"
    }
  ];

  const hrccTabs = [
    {
      id: "hrcc1",
      title: "HRCC 1",
      content: {
        title: "Career Development",
        description: "Comprehensive career development services for students including career counseling, resume building, and interview preparation.",
        features: [
          "One-on-one career guidance",
          "Resume and cover letter workshops",
          "Mock interviews with industry experts",
          "Career assessment tools",
          "Job search strategies"
        ]
      }
    },
    {
      id: "hrcc2",
      title: "HRCC 2",
      content: {
        title: "Industry Connections",
        description: "Building bridges between academia and industry through partnerships, events, and networking opportunities.",
        features: [
          "Industry partnership programs",
          "Networking events with professionals",
          "Guest lectures and workshops",
          "Company visits and tours",
          "Industry mentorship programs"
        ]
      }
    },
    {
      id: "hrcc3",
      title: "HRCC 3",
      content: {
        title: "Placement Support",
        description: "End-to-end placement assistance to help students secure their dream jobs and start their careers on the right note.",
        features: [
          "Campus recruitment drives",
          "Pre-placement training",
          "Company-specific preparation",
          "Group discussion practice",
          "Placement analytics and insights"
        ]
      }
    },
    {
      id: "hrcc4",
      title: "HRCC 4",
      content: {
        title: "Skill Development",
        description: "Targeted skill enhancement programs to bridge the gap between academic learning and industry requirements.",
        features: [
          "Technical skills workshops",
          "Soft skills training",
          "Industry-specific certifications",
          "Project-based learning",
          "Leadership development"
        ]
      }
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  useEffect(() => {
    document.title = "HRCC - FresherBot";
  }, []);

  const hrccServices = [
    {
      title: "Career Counseling",
      description: "One-on-one career guidance sessions for students to help them identify their strengths and choose the right career path."
    },
    {
      title: "Resume Building",
      description: "Professional resume creation and optimization services to help students stand out in the job market."
    },
    {
      title: "Mock Interviews",
      description: "Practice interview sessions with industry experts to prepare students for real job interviews."
    },
    {
      title: "Placement Drives",
      description: "Organizing on-campus and off-campus placement drives with partner companies."
    },
    {
      title: "Skill Development",
      description: "Workshops and training programs to develop industry-relevant skills and competencies."
    },
    {
      title: "Industry Connect",
      description: "Networking events and industry interactions to build connections and understand industry expectations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="w-full">
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-0 w-full">
              {carouselImages.map((image) => (
                <CarouselItem key={image.id} className="w-full pl-0">
                  <div className="relative w-full h-[60vh]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Human Resource Career Center
                      </h1>
                      <p className="text-xl md:text-2xl max-w-2xl text-center">
                        Connecting students with opportunities and building future-ready professionals
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="container mx-auto px-4 py-12 bg-white">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'rgb(3 105 161)'}}>About HRCC</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  The Human Resource Career Center (HRCC) at FresherBot serves as a bridge between academia and industry,
                  helping educational institutions prepare their students for successful careers.
                </p>
                <p className="text-lg mb-4">
                  We work closely with college placement cells to enhance their capabilities and provide
                  students with the resources they need to secure their dream jobs.
                </p>
                <p className="text-lg">
                  Our comprehensive approach covers everything from career counseling and skill development
                  to placement assistance and industry connections.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-fresherbot-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <p>Partnerships with 200+ companies across various sectors</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-fresherbot-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <p>Comprehensive placement support services</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-fresherbot-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <p>Customized training programs for different branches and specializations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-fresherbot-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      4
                    </div>
                    <p>Industry-aligned curriculum development support</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-fresherbot-blue text-white flex items-center justify-center mr-3 mt-0.5">
                      5
                    </div>
                    <p>Regular industry interaction sessions and expert talks</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HRCC Tabs Section - Similar to the image example */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: 'rgb(3 105 161)'}}>HRCC Services</h2>
            
            <Tabs 
              defaultValue="hrcc1" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-beige-50">
                  {hrccTabs.map(tab => (
                    <TabsTrigger 
                      key={tab.id}
                      value={tab.id}
                      className="data-[state=active]:bg-burgundy-500 data-[state=active]:text-white"
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {hrccTabs.map(tab => (
                <TabsContent 
                  key={tab.id} 
                  value={tab.id}
                  className="mt-0"
                >
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={fadeIn}
                    className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-burgundy-700">{tab.content.title}</h3>
                    <p className="text-lg mb-6 text-gray-700">{tab.content.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tab.content.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start p-4 bg-beige-50 rounded-lg"
                        >
                          <div className="h-6 w-6 rounded-full bg-burgundy-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </div>
                          <p className="text-burgundy-800">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      <Button 
                        className="bg-burgundy-500 hover:bg-burgundy-600 text-white"
                      >
                        Learn More About {tab.content.title}
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hrccServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>How We Work</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <ol className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-fresherbot-blue h-8 w-8 rounded-full text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Assessment</h3>
                      <p className="text-gray-600">
                        We begin by understanding your institution's specific needs and challenges related to
                        student placements and career development.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-fresherbot-blue h-8 w-8 rounded-full text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Customized Planning</h3>
                      <p className="text-gray-600">
                        Based on the assessment, we develop a customized action plan that aligns with your
                        institution's goals and student demographics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-fresherbot-blue h-8 w-8 rounded-full text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Implementation</h3>
                      <p className="text-gray-600">
                        Our team works closely with your placement cell to implement the planned initiatives
                        and activities throughout the academic year.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-fresherbot-blue h-8 w-8 rounded-full text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Continuous Support</h3>
                      <p className="text-gray-600">
                        We provide ongoing support and adjustments to ensure optimal results and address
                        any challenges that may arise.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=600"
                  alt="Team planning"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>Success Stories</h2>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-6">
                        <blockquote className="text-gray-600 italic mb-4">
                          "FresherBot's HRCC has transformed our placement process. Our placement rates increased by 40% within one year of partnering with them."
                        </blockquote>
                        <div className="font-medium">
                          - Dr. Meena Sharma, Placement Director, VIT Vellore
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-6">
                        <blockquote className="text-gray-600 italic mb-4">
                          "The career counseling services provided by HRCC have been instrumental in helping our students make informed career choices."
                        </blockquote>
                        <div className="font-medium">
                          - Prof. Rajan Mishra, Dean of Students, SRM University
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-6">
                        <blockquote className="text-gray-600 italic mb-4">
                          "The industry connections that HRCC brings to the table have opened new opportunities for our students that we couldn't access before."
                        </blockquote>
                        <div className="font-medium">
                          - Dr. Priya Nair, Principal, Chennai Institute of Technology
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="bg-fresherbot-blue text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your institution's placement ecosystem?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Partner with FresherBot's HRCC to provide world-class career services to your students.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-fresherbot-blue hover:bg-gray-100">
                Schedule a Consultation
              </Button>
              <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HRCC;
