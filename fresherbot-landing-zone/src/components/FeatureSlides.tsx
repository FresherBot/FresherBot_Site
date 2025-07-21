
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FeatureSlides = () => {
  const slidesRef = useRef<HTMLDivElement>(null);
  
  // Feature slides data
  const slides = [
    {
      id: 1,
      title: "Personalized Career Roadmaps",
      description: "Custom learning paths tailored to your skills, goals and industry preferences that evolve with your progress.",
      color: "#8F76FF", // Purple color
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      stats: [
        { value: "93%", label: "of users achieve their career goals faster with personalized roadmaps" }
      ]
    },
    {
      id: 2,
      title: "AI-Powered Skill Assessment",
      description: "Our advanced AI analyzes your skills and provides targeted recommendations to close performance gaps.",
      color: "#FF6EB5", // Pink color
      backgroundImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
      stats: [
        { value: "85%", label: "increase in interview success rates with our assessment preparation" }
      ]
    },
    {
      id: 3,
      title: "Real-time Industry Insights",
      description: "Stay ahead with trending skills and opportunities specific to your target industries and roles.",
      color: "#FF9D76", // Orange color
      backgroundImage: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80",
      stats: [
        { value: "12K+", label: "jobs analyzed monthly to provide the most current market insights" }
      ]
    },
    {
      id: 4,
      title: "Practical Projects & Challenges",
      description: "Build your portfolio with industry-relevant projects designed by top professionals.",
      color: "#A587FF", // Light purple color
      backgroundImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      stats: [
        { value: "74%", label: "of employers say our project portfolios stand out from typical candidates" }
      ]
    },
    {
      id: 5,
      title: "Direct Employer Connections",
      description: "Get matched with companies looking for your exact skill profile and career aspirations.",
      color: "#75D1EC", // Blue color
      backgroundImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      stats: [
        { value: "9.5K+", label: "successful placements made through our direct connection platform" }
      ]
    }
  ];

  useEffect(() => {
    // Initialize scroll snap behavior
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add active class to slides that are in view
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the slide is visible
    );

    // Observe all slides
    if (slidesRef.current) {
      const slides = slidesRef.current.querySelectorAll(".feature-slide");
      slides.forEach((slide) => observer.observe(slide));
    }

    return () => {
      if (slidesRef.current) {
        const slides = slidesRef.current.querySelectorAll(".feature-slide");
        slides.forEach((slide) => observer.unobserve(slide));
      }
    };
  }, []);

  return (
    <div className="relative w-full" ref={slidesRef}>
      {/* Intro Section */}
      <div className="h-screen w-full flex items-center justify-center snap-start snap-always bg-burgundy-900 text-white p-4">
        <div className="max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Discover FresherBot's <span className="text-[#8F76FF]">Game-Changing Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-12"
          >
            Scroll down to explore how our innovative tools transform your career journey
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-10 h-10 mx-auto text-[#8F76FF]" />
          </motion.div>
        </div>
      </div>

      {/* Feature Slides */}
      {slides.map((slide) => (
        <div 
          key={slide.id}
          className="feature-slide h-screen w-full flex items-center snap-start snap-always"
          style={{
            background: `linear-gradient(rgba(18, 19, 57, 0.85), rgba(18, 19, 57, 0.85)), url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: slide.color }}>
                  {slide.title}
                </h3>
                <p className="text-xl text-white/80 mb-8">
                  {slide.description}
                </p>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  {slide.stats.map((stat, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <span className="text-3xl font-bold" style={{ color: slide.color }}>{stat.value}</span>
                      <p className="text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center"
              >
                {/* Visual element - placeholder for feature illustration */}
                <div 
                  className="w-[350px] h-[350px] rounded-full flex items-center justify-center"
                  style={{ background: `radial-gradient(circle, ${slide.color}50, ${slide.color}10)` }}
                >
                  <div className="w-[250px] h-[250px] rounded-full border-2 flex items-center justify-center" style={{ borderColor: slide.color }}>
                    <div className="text-center">
                      <span className="text-5xl font-bold" style={{ color: slide.color }}>0{slide.id}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSlides;
