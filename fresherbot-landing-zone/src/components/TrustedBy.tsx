import React, { useEffect } from "react";

const companies = [
  { name: "LG", logo: "https://www.citypng.com/public/uploads/preview/lg-logo-transparent-background-701751694773059rkih6poepm.png" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png" },
  { name: "Cipla", logo: "https://www.webshakers.in/wp-content/themes/dp/img/clients/2.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const colleges = [
  { name: "Harvard", logo: "https://seeklogo.com/images/H/harvard-university-logo-63E7093ACF-seeklogo.com.png" },
  { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" },
  { name: "Stanford", logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/stanford-university-stacked.png" },
  { name: "IIT Delhi", logo: "https://images.seeklogo.com/logo-png/48/2/indian-institute-of-technology-delhi-logo-png_seeklogo-483677.png" },
  { name: "IIT Bombay", logo: "https://www.biospectrumindia.com/uploads/articles/iit_bombay_website-9373.jpg"},
];

const preloadImages = (logos) => {
  logos.forEach(({ logo }) => {
    const img = new Image();
    img.src = logo;
  });
};

export default function TrustedBy() {
  useEffect(() => {
    preloadImages([...companies, ...colleges]);
  }, []);

  const scrollAnimation = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <section className="py-16 bg-gray-50 text-center overflow-hidden">
      <style>{scrollAnimation}</style>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Trusted by the Best</h2>
        <p className="text-lg text-gray-600 mb-12">
          Leading companies and institutions using FresherBot
        </p>

        {/* Companies */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Companies</h3>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-12 animate-scroll"
            style={{
              width: "200%",
              animation: "scroll 30s linear infinite",
            }}
          >
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`company-${idx}`}
                className="flex flex-col items-center min-w-[100px] hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain"
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100?text=Logo")}
                />
                <span className="mt-2 text-sm text-gray-700">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colleges */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-12">Institutions</h3>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-12 animate-scroll-reverse"
            style={{
              width: "200%",
              animation: "scroll 35s linear infinite reverse",
            }}
          >
            {[...colleges, ...colleges].map((college, idx) => (
              <div
                key={`college-${idx}`}
                className="flex flex-col items-center min-w-[100px] hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={college.logo}
                  alt={college.name}
                  className="h-16 w-auto object-contain"
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100?text=Logo")}
                />
                <span className="mt-2 text-sm text-gray-700">{college.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for scrolling */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
