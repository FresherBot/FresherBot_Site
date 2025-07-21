
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BottomNav = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-burgundy-900 shadow-lg z-50 py-3 px-4 border-t border-burgundy-700"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="bg-green-500 rounded-full p-2 mb-1">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-medium text-beige-100">WhatsApp</span>
          </a>
          
          <Button 
            className="bg-burgundy-500 hover:bg-burgundy-400 text-white rounded-md px-6"
            asChild
          >
            <Link to="/register">
              Register Now
            </Link>
          </Button>
          
          <a 
            href="tel:+919876543210" 
            className="flex flex-col items-center"
          >
            <div className="bg-burgundy-500 rounded-full p-2 mb-1">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-medium text-beige-100">Call Us</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BottomNav;
