
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  GraduationCap, Code, Brain, Globe, Award, BookOpen, 
  ArrowRight, Monitor, HeadphonesIcon, Briefcase 
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Features = () => {
  const featureSlides = [
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-burgundy-500" />,
      title: "Industry Trainers",
      description: "Our Trainers are experienced developers and industry professionals who bring real-world expertise to every session.",
      rightTitle: "Choose Any Technology",
      rightDescription: "Our trainers will be ready in 24 hours with customized programs that match your learning goals."
    },
    {
      icon: <Brain className="w-12 h-12 text-burgundy-500" />,
      title: "AI-Driven Learning Management",
      description: "Our platform uses artificial intelligence to personalize your learning experience and optimize your progress.",
      rightTitle: "Personalized Learning Paths",
      rightDescription: "Our AI system adapts to your pace and learning style, ensuring you master every concept effectively."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-burgundy-500" />,
      title: "Career Acceleration",
      description: "We provide the tools and mentorship needed to fast-track your professional development journey.",
      rightTitle: "Job-Ready Portfolio",
      rightDescription: "Build impressive projects that showcase your skills to potential employers and stand out in interviews."
    },
    {
      icon: <Globe className="w-12 h-12 text-burgundy-500" />,
      title: "Global Networking",
      description: "Connect with peers and professionals from around the world to expand your opportunities.",
      rightTitle: "Industry Connections",
      rightDescription: "Gain access to our partner network of companies actively looking to hire fresh talent."
    },
    {
      icon: <Award className="w-12 h-12 text-burgundy-500" />,
      title: "Recognized Certifications",
      description: "Earn credentials that are valued by employers and demonstrate your expertise.",
      rightTitle: "Skill Validation",
      rightDescription: "Our assessment system ensures your certifications truly reflect your capabilities."
    }
  ];

  return (
    <section className="bg-beige-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-900 mb-4">
            Top-Tier Features Built to <span className="text-burgundy-500">Lead</span>, Not Follow
          </h2>
          <p className="text-lg text-burgundy-700 max-w-2xl mx-auto">
            Discover how our cutting-edge features empower your learning journey and set us apart from traditional educational platforms.
          </p>
        </motion.div>

        {/* Carousel for smaller screens */}
        <div className="block md:hidden mb-12">
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {featureSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-beige-200/50 h-full"
                  >
                    <div className="p-6">
                      <div className="mb-4">{slide.icon}</div>
                      <h3 className="text-xl font-bold text-burgundy-800 mb-3">{slide.title}</h3>
                      <p className="text-burgundy-700 mb-4">{slide.description}</p>
                      <div className="border-t border-beige-200 pt-4 mt-4">
                        <h4 className="font-semibold text-burgundy-600 mb-2">{slide.rightTitle}</h4>
                        <p className="text-burgundy-700">{slide.rightDescription}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 translate-x-1/2" />
          </Carousel>
        </div>

        {/* Full-height scrolling sections for medium+ screens */}
        <div className="hidden md:block">
          {featureSlides.map((slide, index) => (
            <FeatureSection 
              key={index}
              icon={slide.icon}
              title={slide.title}
              description={slide.description}
              rightTitle={slide.rightTitle}
              rightDescription={slide.rightDescription}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ 
  icon, title, description, rightTitle, rightDescription, isEven 
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-[80vh] flex items-center mb-24 snap-start"
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-16`}>
        <motion.div
          variants={isEven ? leftVariants : rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-beige-200/30">
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl lg:text-3xl font-bold text-burgundy-800 mb-4">{title}</h3>
            <p className="text-lg text-burgundy-700">{description}</p>
          </div>
        </motion.div>
        
        <motion.div
          variants={isEven ? rightVariants : leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2"
        >
          <div className="bg-gradient-to-r from-burgundy-50 to-beige-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-burgundy-700 mb-4">{rightTitle}</h3>
            <p className="text-lg text-burgundy-700 mb-6">{rightDescription}</p>
            <div className="flex justify-end">
              <ArrowRight className="text-burgundy-500 h-6 w-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
