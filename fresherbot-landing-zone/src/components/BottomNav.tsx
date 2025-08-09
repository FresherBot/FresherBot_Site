import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { FaWhatsapp, FaPhoneAlt, FaUserPlus } from "react-icons/fa";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 items-center"
          >
            {/* WhatsApp */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="text-white text-xl" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">Chat on WhatsApp</TooltipContent>
            </Tooltip>

            {/* Register */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/register"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 shadow-lg transition"
                  aria-label="Register Now"
                >
                  <FaUserPlus className="text-white text-lg" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">Register Now</TooltipContent>
            </Tooltip>

            {/* Call Us */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition"
                  aria-label="Call Us"
                >
                  <FaPhoneAlt className="text-white text-lg" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">Call Support</TooltipContent>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        className="flex items-center justify-center w-14 h-14 rounded-full bg-burgundy-600 hover:bg-burgundy-700 shadow-xl transition"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Chat Menu"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.button>
    </div>
  );
};

export default BottomNav;
