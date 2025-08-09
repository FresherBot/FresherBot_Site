import { X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

// Optional: persist dismiss across sessions
const DownloadBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("hideDownloadBanner") !== "true"
      : true;
  });

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hideDownloadBanner", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="region"
          aria-label="Download mobile app banner"
          className="w-full bg-burgundy-600 text-beige-100 py-2 relative z-[60]"
        >
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium font-['Montserrat',sans-serif]">
                For the best experience, download our mobile app.
              </span>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-burgundy-500/50 text-beige-100 border-beige-200/30 hover:bg-burgundy-500/80 transition-all px-3 py-1 h-auto flex items-center"
                    aria-label="Download mobile app"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Download</span>
                    </motion.div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Get the mobile app now</TooltipContent>
              </Tooltip>
            </div>

            <button
              onClick={handleClose}
              className="text-beige-100/80 hover:text-beige-100 transition-colors p-1"
              aria-label="Close download banner"
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
