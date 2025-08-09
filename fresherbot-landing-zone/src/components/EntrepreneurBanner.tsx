import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const EntrepreneurBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="container mx-auto px-4 py-4 mt-20 mb-6"
      role="region"
      aria-label="Entrepreneur Program Announcement"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-beige-100/20 dark:bg-white/5 backdrop-blur-sm border border-beige-200/20 dark:border-white/10 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md"
      >
        {/* Left Section */}
        <div className="flex items-start sm:items-center gap-3 mb-2 sm:mb-0 text-sm">
          <div className="bg-burgundy-500 h-6 w-6 rounded-full flex items-center justify-center shrink-0">
            <AlertCircle className="text-beige-100 h-4 w-4" aria-hidden="true" />
          </div>
          <p className="text-beige-100 font-medium leading-snug">
            <span className="sr-only">Important Update:</span>
            <strong className="text-xs uppercase text-beige-200 tracking-wide mr-1">Latest</strong>
            <span>
              Anyone can become an entrepreneur with{" "}
              <span className="text-burgundy-300 font-semibold">FresherBot's career tools</span>
            </span>
          </p>
        </div>

        {/* Right Section - CTA */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/entrepreneur-program"
              className="text-burgundy-300 text-sm font-medium flex items-center hover:underline hover:opacity-90 transition-opacity"
              aria-label="Learn more about the entrepreneur program"
            >
              Learn more
              <motion.span
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="ml-1"
              >
                <ArrowRight className="h-3 w-3" />
              </motion.span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>Explore our Entrepreneur Program</TooltipContent>
        </Tooltip>
      </motion.div>
    </motion.div>
  );
};

export default EntrepreneurBanner;
