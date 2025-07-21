
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EntrepreneurBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="container mx-auto px-4 py-3 mt-20 mb-6"
    >
      <div className="bg-beige-100/20 backdrop-blur-sm border border-beige-200/20 rounded-lg p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-burgundy-500 h-6 w-6 rounded-full flex items-center justify-center mr-3">
            <span className="text-beige-100 text-xs font-bold">!</span>
          </div>
          <p className="text-beige-100 font-medium text-sm">
            LATEST: <span className="text-burgundy-300 ml-1">Anyone can become an entrepreneur with FresherBot's career tools</span>
          </p>
        </div>
        <Link to="/entrepreneur-program" className="text-burgundy-300 text-sm font-medium flex items-center hover:underline">
          Learn more
          <ArrowRight className="h-3 w-3 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EntrepreneurBanner;
