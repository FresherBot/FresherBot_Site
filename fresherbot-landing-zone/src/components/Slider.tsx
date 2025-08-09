import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Wrench,
  FileUp,
  ClipboardCheck,
  Award,
  TrendingUp,
} from "lucide-react";

// --- CONTENT CONFIGURATION ---

const cardContents = [
  {
    title: "Choose Job Role",
    icon: <Briefcase size={28} />,
    description:
      "Select your preferred job roles based on your interest and experience.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Assign Skills",
    icon: <Wrench size={28} />,
    description:
      "Map the skills you have or are willing to learn for the selected roles.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Track Your Growth",
    icon: <TrendingUp size={28} />,
    description:
      "Our platform provides tools to track your skill development and career progression over time.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Upload Resume",
    icon: <FileUp size={28} />,
    description:
      "Provide your latest resume to help recruiters know your qualifications.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Take Assessment",
    icon: <ClipboardCheck size={28} />,
    description:
      "Complete assessments to prove your competency and improve chances.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Get Shortlisted",
    icon: <Award size={28} />,
    description:
      "Once done, your profile will be visible for shortlisting by companies.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop&q=80",
  },
];

const colors = ["#FF6EC7", "#FFA500", "#43AA8B", "#7A5CFF", "#F94144", "#277DA1"];
const PAUSE_DURATION_MS = 4000; // Pauses for 4 seconds on each card.

// --- CARD COMPONENT ---

const Card = ({ title, icon, description, image, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
      className="w-[95%] sm:w-[500px] md:w-[650px] min-h-[320px] md:min-h-[300px]
                 rounded-2xl relative flex flex-col md:flex-row
                 bg-gradient-to-br from-[#1a1a1d] via-[#222228] to-[#1a1a1d]
                 shadow-lg border border-gray-700 overflow-hidden"
      style={{ boxShadow: `0 0 40px ${color}44` }}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-auto md:w-1/2 group">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div
          className="absolute top-4 right-4 p-3 rounded-xl flex items-center justify-center
                     bg-black bg-opacity-50 backdrop-blur-md border border-white/20"
          style={{ boxShadow: `0 0 20px ${color}77` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-left">
          {title}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// --- MAIN SLIDER COMPONENT ---

const ScrollSlider = () => {
  const componentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsComponentVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentComponent = componentRef.current;
    if (currentComponent) {
      observer.observe(currentComponent);
    }

    return () => {
      if (currentComponent) {
        observer.unobserve(currentComponent);
      }
    };
  }, []);

  useEffect(() => {
    if (!isComponentVisible) {
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardContents.length);
    }, PAUSE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [currentIndex, isComponentVisible]);

  const currentCard = cardContents[currentIndex];
  const currentColor = colors[currentIndex % colors.length];

  return (
    <div
      ref={componentRef}
      className="h-[80vh] w-full flex flex-col items-center justify-center
                 bg-gradient-to-b from-[#0e0e10] via-[#151517] to-[#1d1d20]
                 text-center text-white overflow-hidden p-4"
    >
      <div className="w-full max-w-4xl mx-auto mb-6">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ⚡ Powerful Features for Smarter Careers
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience a modern design with seamless, step-by-step guidance for
          your career path.
        </motion.p>
      </div>

      {/* Stage area */}
      <div className="flex-grow flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <Card
            key={currentIndex}
            title={currentCard.title}
            icon={currentCard.icon}
            description={currentCard.description}
            image={currentCard.image}
            color={currentColor}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollSlider;
