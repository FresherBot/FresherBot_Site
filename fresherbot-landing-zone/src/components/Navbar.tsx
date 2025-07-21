import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import logo from "/Images/fresherbotlogo.png";
import { motion } from "framer-motion";
import {
  FaLaptopCode, FaUsers, FaCubes, FaChartLine, FaProjectDiagram,
  FaCube, FaDraftingCompass, FaTasks, FaChartPie
} from "react-icons/fa";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const hoverTimeout = useRef(null);

  const dropdownItems = [
    {
      icon: <FaLaptopCode className="text-orange-500 text-xl" />,
      title: "Built For Students",
      description: "Streamline workflows and collaborate securely with your IT clients",
    },
    {
      icon: <FaUsers className="text-blue-500 text-xl" />,
      title: "Solving Colleges",
      description: "Deliver client projects on time and within budget",
    },
    {
      icon: <FaCubes className="text-green-500 text-xl" />,
      title: "Tech-Tutorials",
      description: "Collaborate across departments to build better products",
    },
    {
      icon: <FaChartLine className="text-purple-500 text-xl" />,
      title: "Manage Students Analytics",
      description: "Manage creative projects and client relationships smoothly",
    },
    {
      icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
      title: "Company Specific Assesments",
      description: "Gain visibility into project portfolios and team capacity",
    },
    {
      icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
      title: "Optimize your Top Notch Performers",
      description: "Gain visibility into project portfolios and team capacity",
    },{
      icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
      title: "Top Notch Practice Platform",
      description: "Gain visibility into project portfolios and team capacity",
    },{
      icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
      title: "Industry Related Training",
      description: "Gain visibility into project portfolios and team capacity",
    },{
      icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
      title: "Industry Developed Projects",
      description: "Gain visibility into project portfolios and team capacity",
    },{
      icon: <FaProjectDiagram className="text-pink-500 text-xl" />,
      title: "Trusted Partners for high pay campus placements",
      description: "Gain visibility into project portfolios and team capacity",
    },
  ];

  const productDropdownItems = [
    {
      icon: <FaCube className="text-indigo-500 text-xl" />,
      title: "Read our blog for inspiring content",
      description: "AI-powered resume screening and job matching.",
    },
    {
      icon: <FaDraftingCompass className="text-red-500 text-xl" />,
      title: "placement gateway program",
      description: "Build beautiful and professional resumes in minutes.",
    },
    {
      icon: <FaTasks className="text-yellow-500 text-xl" />,
      title: "Industry specific training",
      description: "Keep your job search and applications organized.",
    },
    {
      icon: <FaChartPie className="text-teal-500 text-xl" />,
      title: "Skill AI lab",
      description: "Track your application performance and insights.",
    },{
      icon: <FaChartPie className="text-teal-500 text-xl" />,
      title: "Company Specific LMS",
      description: "Track your application performance and insights.",
    },{
      icon: <FaChartPie className="text-teal-500 text-xl" />,
      title: "AI Assesment Tool",
      description: "Track your application performance and insights.",
    },,{
      icon: <FaChartPie className="text-teal-500 text-xl" />,
      title: "Industry development Projects",
      description: "Track your application performance and insights.",
    },{
      icon: <FaChartPie className="text-teal-500 text-xl" />,
      title: "Company Specific Programs",
      description: "Track your application performance and insights.",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleHover = (menu) => {
    clearTimeout(hoverTimeout.current);
    setHoveredMenu(menu);
  };

  const handleLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  const renderDropdown = (items, offsetClass) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full ${offsetClass} mt-2 w-[700px] bg-white text-black shadow-xl rounded-xl p-6 grid grid-cols-2 gap-5 z-50`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 items-start hover:bg-gray-100 p-3 rounded-lg transition cursor-pointer"
        >
          <div className="mt-1">{item.icon}</div>
          <div>
            <h4 className="font-semibold text-sm">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-burgundy-900/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <img src={logo} alt="FresherBot Logo" className="h-8" />
            </Link>
          </motion.div>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-100"
              >
                <Menu className="h-6 w-6" />
              </Button>

              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 right-0 left-0 shadow-md py-4 px-4 bg-burgundy-900/90 backdrop-blur-md"
                >
                  <div className="flex flex-col space-y-3">
                    <Link to="/why-fresherbot" className="px-3 py-2 hover:bg-burgundy-800/50 rounded text-beige-100 font-['Montserrat',sans-serif]">Why FresherBot</Link>
                    <Link to="/product" className="px-3 py-2 hover:bg-burgundy-800/50 rounded text-beige-100 font-['Montserrat',sans-serif]">Product</Link>
                    <Link to="/compare-us" className="px-3 py-2 hover:bg-burgundy-800/50 rounded text-beige-100 font-['Montserrat',sans-serif]">Compare Us</Link>
                    <div className="pt-2 border-t border-burgundy-700">
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-burgundy-700 hover:bg-burgundy-600 text-beige-100 font-['Montserrat',sans-serif]" asChild>
                          <Link to="/login">Login</Link>
                        </Button>
                        <Button className="flex-1 bg-burgundy-500 hover:bg-burgundy-400 text-white font-['Montserrat',sans-serif]" asChild>
                          <Link to="/register">Register</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6 relative">
              {/* Why FresherBot Dropdown */}
              <div
                onMouseEnter={() => handleHover("why")}
                onMouseLeave={handleLeave}
                className="relative"
              >
                <Link to="/why-fresherbot" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]">
                  Why FresherBot
                </Link>
                {hoveredMenu === "why" && renderDropdown(dropdownItems, "-left-[580px]")}
              </div>

              {/* Product Dropdown */}
              <div
                onMouseEnter={() => handleHover("product")}
                onMouseLeave={handleLeave}
                className="relative"
              >
                <Link to="/product" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]">
                  Product
                </Link>
                {hoveredMenu === "product" && renderDropdown(productDropdownItems, "-left-[640px]")}
              </div>

              {/* Compare Us */}
              <Link to="/compare-us" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]">
                Compare Us
              </Link>

              {/* Login */}
              <Button variant="ghost" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]" asChild>
                <Link to="/login">Login</Link>
              </Button>

              {/* Register */}
              <Button className="bg-burgundy-500 hover:bg-burgundy-400 text-white px-5 py-2 rounded-md shadow-md font-['Montserrat',sans-serif]" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
