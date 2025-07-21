
import { X, Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const DownloadBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-burgundy-600 text-beige-100 py-2 relative z-[60]"
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-medium font-['Montserrat',sans-serif]">
                If you need download our mobile app for a better experience
              </span>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-burgundy-500/50 text-beige-100 border-beige-200/30 hover:bg-burgundy-500/80 px-3 py-1 h-auto"
              >
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-beige-100/80 hover:text-beige-100 transition-colors p-1"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadBanner;
