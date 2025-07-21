import React, { useState } from 'react';
import { ArrowRight, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '/Images/tech.webp';

// Testimonial data
const testimonials = [
  {
    id: 1,
    category: "LARGE ENTERPRISE",
    quote:
      "By leveraging Jira and Confluence for automated reporting, we're saving over 800 hours and $500k per year in management consulting costs.",
    name: "Wais Mojaddidi",
    title: "Director of Agile Delivery, Global E-commerce, Royal Caribbean",
    image: logo,
    company: "Hrcc1"
  },
  {
    id: 2,
    category: "AUTOMOTIVE EXCELLENCE",
    quote:
      "The implementation of our digital transformation strategy has resulted in a 45% increase in customer satisfaction scores across all dealerships.",
    name: "Elena Schmidt",
    title: "Head of Digital Innovation, Mercedes-Benz Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    company: "Hrcc2"
  },
  {
    id: 3,
    category: "GAMING & METAVERSE",
    quote:
      "Our partnership has enabled us to scale our virtual experiences platform, reaching over 50 million daily active users worldwide.",
    name: "David Chen",
    title: "VP of Platform Engineering, Roblox",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    company: "Hrcc3"
  }
];

// Company logos
const Hrccs = [
  {
    name: " Hrcc1",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
  },
  {
    name: "Hrcc2",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png"
  },
  {
    name: "Hrcc3",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Royal_Caribbean_International_Logo.svg/2560px-Royal_Caribbean_International_Logo.svg.png"
  },
  { name: "Hrcc4", logo: "" },
  { name: "Hrcc5", logo: "" },
  { name: "Hrcc6", logo: "" },
  { name: "Hrcc7", logo: "" }
];

function HrccScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const selectCompanyTestimonial = (companyName) => {
    const index = testimonials.findIndex((t) => t.company === companyName);
    if (index !== -1) {
      goToSlide(index);
    }
  };

  return (
    <div>
      {/* Section Heading */}
      <div className="text-center mb-16 mt-16">
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#8F76FF]/10 to-[#8F76FF]/20 text-[#8F76FF] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          HRCC Network
        </motion.span>

        <motion.h2
          className="text-4xl font-bold mb-4 text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="heading-gradient">What People Say</span>
        </motion.h2>

        <motion.p
          className="text-gray/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hear from our users about how FresherBot has helped them achieve their goals.
        </motion.p>
      </div>

      {/* Top White Skewed Overlay */}
      <div className="relative">

        <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-6 origin-top z-10" />

        {/* Testimonial Block */}
        <div className="bg-gradient-to-b from-[#2e1d25] via-[#3d2c33] to-[#5f1b30] text-white relative overflow-hidden z-0 pt-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#8F76FF] rounded-full transform -translate-y-4"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#f075ba] transform translate-x-1/4 translate-y-1/4 z-0"></div>

                  <img
                    src={testimonials[currentIndex].image}
                    alt="Executive Portrait"
                    className="relative z-10 w-full h-[400px] object-cover rounded-t-full transition-opacity duration-500"
                  />

                  <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/2 z-20 text-white">
                    <Waves size={64} className="transform rotate-12" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="w-full lg:w-1/2 space-y-10">
                <div className="uppercase text-sm font-semibold text-[#f8a4cc]">
                  {testimonials[currentIndex].category}
                </div>

                <blockquote className="text-2xl lg:text-xl pt-10 font-medium leading-snug text-[#f8a4cc]">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="space-y-2">
                  <div className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/70">
                    {testimonials[currentIndex].title}
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#8F76FF] hover:text-white transition-colors"
                >
                  <span>Read the full case study</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Logos */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
                {Hrccs.map((company, index) => (
                  <button
                    key={index}
                    onClick={() => selectCompanyTestimonial(company.name)}
                    className={`h-12 flex items-center justify-center transition-opacity duration-300 ${
                      testimonials.some((t) => t.company === company.name)
                        ? 'opacity-100 hover:opacity-75 cursor-pointer'
                        : 'opacity-40 cursor-not-allowed'
                    }`}
                  >
                    {company.name && (
                    
                      <div className="h-8 bg-pink-200 text-[#8F76FF] rounded w-full">{company.name}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-[#8F76FF]'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrccScreen;
