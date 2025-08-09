import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Briefcase,
  Globe,
  Award,
  HeadphonesIcon,
  ArrowRight
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Feature data array
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

// Component: Features
const Features = () => {
  return (
    <section className="bg-beige-50 dark:bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-900 dark:text-white mb-4">
            Top-Tier Features Built to <span className="text-burgundy-500">Lead</span>, Not Follow
          </h2>
          <p className="text-lg text-burgundy-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Discover how our cutting-edge features empower your learning journey and set us apart from traditional educational platforms.
          </p>
        </motion.div>

        {/* Mobile: Carousel View */}
        <div className="block md:hidden mb-12">
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {featureSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-beige-200/50 dark:border-zinc-700 p-6 h-full"
                  >
                    <div className="mb-4">{slide.icon}</div>
                    <h3 className="text-xl font-bold text-burgundy-800 dark:text-white mb-3">{slide.title}</h3>
                    <p className="text-burgundy-700 dark:text-zinc-300 mb-4">{slide.description}</p>
                    <div className="border-t border-beige-200 dark:border-zinc-600 pt-4 mt-4">
                      <h4 className="font-semibold text-burgundy-600 dark:text-burgundy-300 mb-2">{slide.rightTitle}</h4>
                      <p className="text-burgundy-700 dark:text-zinc-300">{slide.rightDescription}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 translate-x-1/2" />
          </Carousel>
        </div>

        {/* Desktop: Side-by-Side Layout */}
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

// Subcomponent: FeatureSection
const FeatureSection = ({
  icon,
  title,
  description,
  rightTitle,
  rightDescription,
  isEven
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
      aria-labelledby={`feature-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-16`}>
        {/* Left Block */}
        <motion.div
          variants={isEven ? leftVariants : rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2"
        >
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg border border-beige-200/30 dark:border-zinc-700">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              {icon}
            </motion.div>
            <h3
              className="text-2xl lg:text-3xl font-bold text-burgundy-800 dark:text-white mb-4"
              id={`feature-${title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {title}
            </h3>
            <p className="text-lg text-burgundy-700 dark:text-zinc-300">{description}</p>
          </div>
        </motion.div>

        {/* Right Block */}
        <motion.div
          variants={isEven ? rightVariants : leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2"
        >
          <div className="bg-gradient-to-r from-burgundy-50 to-beige-100 dark:from-zinc-800 dark:to-zinc-700 p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl lg:text-3xl font-bold text-burgundy-700 dark:text-white mb-4">{rightTitle}</h4>
            <p className="text-lg text-burgundy-700 dark:text-zinc-300 mb-6">{rightDescription}</p>
            <div className="flex justify-end">
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 200 }}>
                <ArrowRight className="text-burgundy-500 dark:text-burgundy-300 h-6 w-6" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
