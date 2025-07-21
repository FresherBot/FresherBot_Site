import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Clock, MessageCircle } from "lucide-react";

const cardContents = [
  {
    title: "Choose Job Role",
    icon: <Clock size={28} />,
    description: "Select your preferred job roles based on your interest and experience."
  },
  {
    title: "Assign Skills",
    icon: <MessageCircle size={28} />,
    description: "Map the skills you have or are willing to learn for the selected roles."
  },
  {
    title: "Upload Resume",
    icon: <Clock size={28} />,
    description: "Provide your latest resume to help recruiters know your qualifications."
  },
  {
    title: "Take Assessment",
    icon: <MessageCircle size={28} />,
    description: "Complete assessments to prove your competency and improve chances."
  },
  {
    title: "Get Shortlisted",
    icon: <Clock size={28} />,
    description: "Once done, your profile will be visible for shortlisting by companies."
  }
];

const colors = ["#f8a4cc", "#ff9d76", "#a587ff", "#f075ba", "#8F76FF"];

const Card = ({ title, icon, description, index, color }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
          });
        } else {
          controls.start({ opacity: 0, y: 100, scale: 0.95 });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={controls}
      className="sticky top-0 h-screen flex justify-center items-start pt-16 pb-16"
      style={{ zIndex: 10 + index }} // Add a higher z-index
    >
      <div
        className="w-[1000px] h-[500px] rounded-xl shadow-2xl p-8 flex items-start space-x-4 bg-white"
        style={{
          borderLeft: `6px solid ${color}`,
          boxShadow: `0 10px 25px -5px ${color}40`
        }}
      >
        <div className="text-2xl" style={{ color }}>
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ScrollSlider = () => {
  const containerRef = useRef(null);

  return (
    <div
      id="scroll-slider"
      ref={containerRef}
      className="h-screen w-full bg-gradient-to-b from-[#2e1d25] via-[#3d2c33] to-[#5f1b30] overflow-y-scroll"
    >
      <div className="text-center mb-8 mt-16" style={{ zIndex: 5 }}> {/* Optional: Add a z-index to the heading if needed */}
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#8F76FF]/10 to-[#8F76FF]/20 text-[#8F76FF]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Fresherbot Features
        </motion.span>
        <motion.h2
          className="text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Top-Tier Features built to{' '}
          <span className="text-blue-500">Lead</span>, not Follow
        </motion.h2>

        <motion.p
          className="text-gray-100 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hear from our users about how FresherBot has helped them achieve their goals.
        </motion.p>
      </div>

      {cardContents.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
          index={index}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default ScrollSlider;