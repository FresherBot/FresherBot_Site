import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "AI-Driven Learning",
    description: "Leverage machine intelligence to get personalized learning journeys tailored just for you.",
    stats: [
      { value: "95%", label: "User Satisfaction" },
      { value: "3x", label: "Faster Skill Gain" },
    ],
    color: "#8F76FF",
    backgroundImage: "/images/slide1.jpg",
  },
  {
    id: 2,
    title: "Real Industry Projects",
    description: "Get hands-on with real startup-grade challenges guided by top mentors.",
    stats: [
      { value: "100+", label: "Live Projects" },
      { value: "50+", label: "Top Mentors" },
    ],
    color: "#FF6F91",
    backgroundImage: "/images/slide2.jpg",
  },
  {
    id: 3,
    title: "Global Career Launchpad",
    description: "Join a global network of learners and recruiters in tech, AI, and startups.",
    stats: [
      { value: "30+", label: "Hiring Countries" },
      { value: "10K+", label: "FresherBot Alumni" },
    ],
    color: "#00C2FF",
    backgroundImage: "/images/slide3.jpg",
  },
];

const FeatureSlides = () => {
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );
    const slideElements = slidesRef.current?.querySelectorAll(".feature-slide");
    slideElements?.forEach((slide) => observer.observe(slide));
    return () => {
      slideElements?.forEach((slide) => observer.unobserve(slide));
    };
  }, []);

  return (
    <div className="relative w-full snap-y snap-mandatory overflow-y-scroll h-screen" ref={slidesRef}>
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#140E36] via-[#1F1147] to-[#281C6F] text-white snap-start p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Discover <span className="text-[#8F76FF]">FresherBot</span>'s Game-Changing Features
          </h1>
          <p className="text-xl text-white/70 mb-10">
            Scroll to unlock a futuristic career path powered by innovation, AI, and expert mentorship.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-10 h-10 mx-auto text-[#8F76FF]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Slides */}
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="feature-slide h-screen w-full flex items-center justify-center snap-start bg-cover bg-center relative transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(10,10,30,0.8), rgba(10,10,40,0.8)), url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ color: slide.color }}>
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
                  {slide.description}
                </p>
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                  {slide.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold" style={{ color: slide.color }}>
                        {stat.value}
                      </span>
                      <span className="text-white/80 text-lg">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-[300px] h-[300px] rounded-full bg-white/10 backdrop-blur-2xl border-2 border-white/20 shadow-inner shadow-zinc-700 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div
                    className="w-[200px] h-[200px] rounded-full border-4"
                    style={{
                      borderColor: slide.color,
                      boxShadow: `0 0 25px ${slide.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="text-5xl font-extrabold" style={{ color: slide.color }}>
                      0{slide.id}
                    </span>
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
