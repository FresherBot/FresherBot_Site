
import { motion } from "framer-motion";

const TrustedBy = () => {
  const companies = [
    { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" },
    { name: "Cipla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cipla_Logo.svg/1200px-Cipla_Logo.svg.png" },
    { name: "Practo", logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/Practo_new_logo.png" },
    { name: "Treebo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Treebo_Hotels_Logo.svg/2560px-Treebo_Hotels_Logo.svg.png" },
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  ];
  
  const colleges = [
    { name: "Harvard", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png" },
    { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" },
    { name: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1280px-Stanford_Cardinal_logo.svg.png" },
    { name: "IIT Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Delhi_Logo.svg/1200px-IIT_Delhi_Logo.svg.png" },
    { name: "IIT Bombay", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/IIT_Bombay_color_logo.png/220px-IIT_Bombay_color_logo.png" },
    { name: "Oxford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1024px-Oxford-University-Circlet.svg.png" },
    { name: "Cambridge", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/University_of_Cambridge_coat_of_arms_official.svg/1200px-University_of_Cambridge_coat_of_arms_official.svg.png" },
  ];

  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-burgundy-900 mb-2">Our Partners</h2>
          <p className="text-lg text-gray-600">Loved by these companies and colleges</p>
        </motion.div>
        
        {/* Companies scrolling from left to right */}
        <div className="mb-16 overflow-hidden">
          <h3 className="text-xl font-semibold text-burgundy-800 mb-6 text-center">Top Companies</h3>
          <motion.div
            initial={{ x: "-10%" }}
            animate={{ x: "-110%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
            className="flex gap-16 w-fit"
          >
            {/* First set of logos */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={`company1-${index}`} 
                className="flex flex-col items-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={company.logo} alt={company.name} className="h-12 object-contain" />
                <span className="mt-2 text-sm text-burgundy-700">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Colleges scrolling from right to left */}
        <div className="overflow-hidden">
          <h3 className="text-xl font-semibold text-burgundy-800 mb-6 text-center">Partner Colleges</h3>
          <motion.div
            initial={{ x: "-110%" }}
            animate={{ x: "-10%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
            className="flex gap-16 w-fit"
          >
            {/* First set of logos */}
            {[...colleges, ...colleges].map((college, index) => (
              <div 
                key={`college1-${index}`} 
                className="flex flex-col items-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={college.logo} alt={college.name} className="h-16 object-contain" />
                <span className="mt-2 text-sm text-burgundy-700">{college.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
