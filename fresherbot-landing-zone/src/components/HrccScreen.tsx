import { useEffect, useRef, useState } from "react";
import { ArrowRight, Waves } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    id: 1,
    category: "LARGE ENTERPRISE",
    quote:
      "By leveraging Jira and Confluence for automated reporting, we're saving over 800 hours and $500k per year in management consulting costs.",
    name: "Wais Mojaddidi",
    title: "Director of Agile Delivery, Global E-commerce, Royal Caribbean",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "AUTOMOTIVE EXCELLENCE",
    quote:
      "The implementation of our digital transformation strategy has resulted in a 45% increase in customer satisfaction scores across all dealerships.",
    name: "Elena Schmidt",
    title: "Head of Digital Innovation, Mercedes-Benz Global",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=faces&fit=crop&w=600&h=600&q=80&auto=format",
  },
  {
    id: 3,
    category: "GAMING & METAVERSE",
    quote:
      "Our partnership has enabled us to scale our virtual experiences platform, reaching over 50 million daily active users worldwide.",
    name: "David Chen",
    title: "VP of Platform Engineering, Roblox",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=faces&fit=crop&w=600&h=600&q=80&auto=format",
  },
];

const PAUSE_DURATION_MS = 4000;

function HrccScreen() {
  const componentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (componentRef.current) observer.observe(componentRef.current);
    return () => {
      if (componentRef.current) observer.unobserve(componentRef.current);
    };
  }, []);

  // Autoplay testimonials
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, PAUSE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [currentIndex, isVisible]);

  return (
    <div
      ref={componentRef}
      className="w-full flex flex-col items-center justify-start bg-white text-black overflow-hidden py-16 px-6"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#8F76FF]/10 to-[#8F76FF]/20 text-[#8F76FF] mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          HRCC Network
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-[#F472B6] to-[#8F76FF] bg-clip-text text-transparent">
            What People Say
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hear from our users about how FresherBot has helped them achieve their
          goals.
        </motion.p>
      </div>

      {/* Animated Testimonial Card */}
      <div className="flex items-center justify-center w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-200 flex flex-col lg:flex-row items-center gap-8"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <motion.div
              className="relative w-full lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-[320px] object-cover object-top rounded-xl shadow-md"
              />
              <div className="absolute bottom-4 right-4 text-gray-400 opacity-30">
                <Waves size={40} className="rotate-12" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-1/2 space-y-4 text-left"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="uppercase text-sm font-semibold text-[#8F76FF]">
                {testimonials[currentIndex].category}
              </div>
              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-gray-700">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="space-y-1">
                <div className="text-lg font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].title}
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-[#8F76FF] hover:text-[#F472B6] transition-colors"
              >
                <span>Read the full case study</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HrccScreen;
