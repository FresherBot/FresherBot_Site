import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, BookOpen, Video, BarChart4 } from "lucide-react";

const LMS = () => {
  const lmsFeatures = [
    { text: "Customizable course content", icon: BookOpen },
    { text: "Interactive learning modules", icon: Users },
    { text: "Assessment creation and grading", icon: CheckCircle },
    { text: "Student progress tracking", icon: BarChart4 },
    { text: "Attendance management", icon: Users },
    { text: "Assignment submission and feedback", icon: BookOpen },
    { text: "Discussion forums", icon: Users },
    { text: "Video conferencing integration", icon: Video },
    { text: "Mobile-responsive design", icon: Users },
    { text: "Analytics dashboard", icon: BarChart4 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 container mx-auto px-4 py-12 mt-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "rgb(3 105 161)" }}>
            Learning Management System
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Transform your educational institution with our comprehensive Learning Management System.
            Designed specifically for colleges and universities, our LMS streamlines course delivery,
            assessment, and student engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose FresherBot LMS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lmsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <feature.icon className="h-5 w-5 text-fresherbot-green mr-2 mt-0.5" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Explore how our LMS can transform your institution's teaching and learning experience.
            </p>
            <div className="flex flex-col space-y-4">
              <Button
                size="lg"
                className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue shadow-md transition-all"
              >
                Book a Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-fresherbot-blue hover:bg-fresherbot-blue/10 transition-all"
              >
                Company-Specific Assessments
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full mb-16">
          <TabsList className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="overview"
              className="tab-button px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="company-assessments"
              className="tab-button px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Company-Specific Assessments
            </TabsTrigger>
            <TabsTrigger
              value="demo"
              className="tab-button px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Book a Demo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Complete Educational Platform</h3>
                <p className="text-gray-600 mb-4">
                  Our LMS provides a comprehensive solution for educational institutions to manage all aspects
                  of the learning process. From content delivery to assessment and analytics, we've got you covered.
                </p>
                <p className="text-gray-600">
                  The platform is highly customizable to meet the specific needs of your institution,
                  whether you're a small college or a large university with multiple departments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Enhanced Student Engagement</h3>
                <p className="text-gray-600 mb-4">
                  With interactive features like discussion forums, live sessions, and multimedia content support,
                  our LMS helps improve student engagement and participation.
                </p>
                <p className="text-gray-600">
                  Students can access course materials anytime, anywhere, and from any device,
                  making learning more flexible and accessible.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="company-assessments">
            <div>
              <h3 className="text-xl font-bold mb-4">Company-Specific Assessments</h3>
              <p className="text-gray-600 mb-6">
                Prepare your students for the job market with assessments designed in collaboration with leading
                companies across various industries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle>Technical Assessments</CardTitle>
                    <CardDescription>
                      Customized coding and technical knowledge tests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Assessments designed by tech companies to evaluate programming skills,
                      problem-solving abilities, and technical knowledge in specific domains.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue shadow-sm">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle>Aptitude Assessments</CardTitle>
                    <CardDescription>
                      Logical reasoning and quantitative ability tests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Standard aptitude assessments used by companies during their recruitment
                      process to evaluate candidates' analytical and problem-solving skills.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue shadow-sm">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle>Domain Assessments</CardTitle>
                    <CardDescription>
                      Industry-specific knowledge evaluations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Specialized assessments for finance, marketing, operations, and other
                      domains based on real industry requirements and standards.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue shadow-sm">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Book a Free Demo</h3>
              <p className="text-gray-600 mb-6">
                Experience the power of our LMS firsthand with a personalized demonstration tailored to your institution's needs.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fresherbot-blue focus:ring focus:ring-fresherbot-blue focus:ring-opacity-50 p-2 border"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fresherbot-blue focus:ring focus:ring-fresherbot-blue focus:ring-opacity-50 p-2 border"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    id="institution"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fresherbot-blue focus:ring focus:ring-fresherbot-blue focus:ring-opacity-50 p-2 border"
                    placeholder="Your College/University Name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fresherbot-blue focus:ring focus:ring-fresherbot-blue focus:ring-opacity-50 p-2 border"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-fresherbot-blue focus:ring focus:ring-fresherbot-blue focus:ring-opacity-50 p-2 border"
                    placeholder="Tell us about your specific requirements..."
                  ></textarea>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue shadow-md"
                  >
                    Request Demo
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>VIT University</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The FresherBot LMS has revolutionized how we deliver online courses. Our students love
                  the interactive features, and our faculty appreciates the ease of content management and grading."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">- Dr. Rajesh Kumar, Director of E-Learning</p>
              </CardFooter>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>SRM Institute of Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The company-specific assessments have significantly improved our placement rates. Students are
                  better prepared for interviews and technical tests conducted by companies."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">- Prof. Anita Desai, Placement Coordinator</p>
              </CardFooter>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>BITS Pilani</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "We've seen a 40% increase in student engagement since implementing the FresherBot LMS.
                  The analytics dashboard provides valuable insights for continuous improvement."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">- Dr. Suresh Menon, Dean of Academics</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LMS;