import { motion } from 'framer-motion';

interface ProgressDotsProps {
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
}

const ProgressDots = ({ count, activeIndex, onClick }: ProgressDotsProps) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {Array.from({ length: count }).map((_, index) => (
        <motion.button
          key={index}
          className="w-3 h-3 rounded-full bg-white outline-none focus:outline-none"
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0.3,
            scale: activeIndex === index ? 1.3 : 1,
          }}
          whileHover={{ scale: 1.2, opacity: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => onClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
