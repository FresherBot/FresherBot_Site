import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "/Images/fresherbotlogo.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaUsers,
  FaCubes,
  FaChartLine,
  FaCube,
  FaBalanceScale,
  FaDollarSign,
  FaRobot,
} from "react-icons/fa";

const navLinks = [
  {
    title: "Solutions",
    href: "/solutions",
    dropdownContent: [
      { icon: <FaLaptopCode />, title: "For Students", description: "Accelerate your career readiness.", href: "/solutions/students" },
      { icon: <FaUsers />, title: "For Colleges", description: "Boost placement outcomes.", href: "/solutions/colleges" },
      { icon: <FaCubes />, title: "Tech Tutorials", description: "Master job-ready skills.", href: "/solutions/tutorials" },
      { icon: <FaChartLine />, title: "Analytics", description: "Track success with insights.", href: "/solutions/analytics" },
    ],
  },
  {
    title: "Product",
    href: "/product",
    dropdownContent: [
      { icon: <FaCube />, title: "Resume Builder", description: "Create resumes with AI.", href: "/product/resume" },
      { icon: <FaRobot />, title: "Skill AI Lab", description: "Practice real-world challenges.", href: "/product/skill-lab" },
    ],
  },
  {
    title: "Compare",
    href: "/compare",
    dropdownContent: [
      { icon: <FaBalanceScale />, title: "Why Us?", description: "See why we lead.", href: "/compare/why-us" },
      { icon: <FaUsers />, title: "Trusted Partners", description: "200+ colleges onboard.", href: "/compare/partners" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    dropdownContent: [
      { icon: <FaDollarSign />, title: "Plans", description: "Affordable & flexible.", href: "/pricing/plans" },
      { icon: <FaChartLine />, title: "ROI", description: "Guaranteed growth.", href: "/pricing/roi" },
    ],
  },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const navbarRef = useRef(null);

  // Scroll logic to show navbar
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 60;
      setShowNavbar(shouldShow);
      if (shouldShow) {
        setIsVisible(true);
        startDisappearTimer();
      } else {
        setIsVisible(false);
        clearTimeout(timeoutRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timer to hide navbar after 5 seconds
  const startDisappearTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  // Mouse enter handler
  const handleMouseEnter = () => {
    if (showNavbar) {
      setIsVisible(true);
      startDisappearTimer();
    }
  };

  return (
    <div 
      ref={navbarRef}
      onMouseEnter={handleMouseEnter}
      className="fixed inset-x-0 top-0 z-[1000] h-20"
    >
      <AnimatePresence>
        {showNavbar && isVisible && (
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 inset-x-4 md:inset-x-10 lg:inset-x-20 bg-white shadow-md rounded-full py-3 px-4 z-50 border border-gray-200"
          >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              {/* Logo and text */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center gap-2">
                  <img src={logo} alt="FresherBot Logo" className="h-8" />
                  <span className="text-lg font-bold text-black">FresherBot</span>
                </Link>
              </div>

              {/* Nav */}
              {isMobile ? (
                <MobileNav />
              ) : (
                <DesktopNav
                  navLinks={navLinks}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNav = ({ navLinks, activeDropdown, setActiveDropdown }) => {
  return (
    <div className="flex items-center gap-10">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li
            key={link.title}
            className="relative"
            onMouseEnter={() => setActiveDropdown(link.title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to={link.href}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {link.dropdownContent?.[0]?.icon}
              {link.title}
            </Link>

            <AnimatePresence>
              {activeDropdown === link.title && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-xl p-4 border border-gray-100 z-[200]"
                >
                  {link.dropdownContent.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition"
                    >
                      <div className="text-blue-500 text-xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                        <p className="text-gray-500 text-xs">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Pill-style button */}
      <Button
        asChild
        className="rounded-full font-semibold text-sm px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <Link to="/register">Get Started</Link>
      </Button>
    </div>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-[201] text-3xl text-gray-700 ml-auto"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col justify-center items-center shadow-lg"
          >
            <ul className="text-center space-y-6 w-full max-w-md mx-auto">
              {navLinks.map((link) => (
                <li key={link.title} className="w-full">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.title ? null : link.title)
                    }
                    className="w-full flex items-center justify-between px-6 py-3 text-2xl font-medium text-gray-700 hover:text-blue-600"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl text-blue-500">
                        {link.dropdownContent?.[0]?.icon}
                      </span>
                      {link.title}
                    </span>
                    {openDropdown === link.title ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.title && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden px-10 text-left"
                      >
                        {link.dropdownContent.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-2 text-lg text-gray-600 hover:text-blue-600"
                            >
                              <span className="text-blue-500 text-lg">{item.icon}</span>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}

              <li className="pt-6">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white rounded-full text-xl px-10 py-6 shadow"
                  asChild
                >
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    Get Started Free
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;