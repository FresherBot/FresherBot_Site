import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const stats = [
  { num: "16K+", label: "Businesses", sub: "Boosting productivity" },
  { num: "1.4M+", label: "Relationships", sub: "Built with trust" },
  { num: "22+", label: "Colleges", sub: "Strategic collaborations" },
  { num: "70+", label: "Companies", sub: "Hiring actively" },
  { num: "300+", label: "Internships", sub: "Offered every month" },
  { num: "10K+", label: "Career Paths", sub: "Curated & guided" },
  { num: "40M+", label: "Billable Hours", sub: "Tracked efficiently" },
];

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 45, 0, -45, 0],
      transition: {
        repeat: Infinity,
        duration: 20, // Longer duration for smoother transition
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background Image + Dark Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Images/hero_wallpaper.avif"
          alt="Background"
          className="w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f] via-[#222]/80 to-transparent" />
      </div>

      <div className="min-h-screen container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="md:w-1/2 text-left space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Empowering Futures —{" "}
            <span className="text-[#BFAF87]">Together</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            We partner with colleges & companies to provide career paths,
            internships, and guidance tailored for freshers and growing teams.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-4 rounded-full shadow-md"
              asChild
            >
              <Link to="/get-started">Get Started For Free →</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-gray-300 text-white hover:bg-white/10 px-6 py-4 rounded-full"
              asChild
            >
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>
          <p className="text-xs text-gray-400 pt-2">
            30 DAY TRIAL • NO CREDIT CARD REQUIRED
          </p>
        </div>

        {/* Robot and Orbiting Bubbles */}
        <div className="relative md:w-1/2 mt-16 md:mt-0 flex items-center justify-end h-[500px] perspective-[1200px]">
          {/* Rotating Orbit */}
          <motion.div
            className="absolute right-[2.5rem] top-1/2 transform -translate-y-1/2 origin-center"
            animate={controls}
            style={{ transformStyle: "preserve-3d" }}
          >
            {stats.map((stat, i) => {
              const angle = (i * 360) / stats.length;
              const radius = 160;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              return (
                <motion.div
                  key={i}
                  className="absolute w-28 h-28 rounded-full flex flex-col items-center justify-center text-center text-xs font-medium p-3 hover:scale-105 transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "2px solid #BFAF87", // Gold outline
                    color: "white",
                    boxShadow: "0 0 15px rgba(191, 175, 135, 0.5)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span className="text-lg font-bold">{stat.num}</span>
                  <span className="font-semibold">{stat.label}</span>
                  <span className="text-[10px]">{stat.sub}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Robot - Pure White Center */}
          <motion.div
            className="w-28 h-28 rounded-full bg-white shadow-xl border-[2px] border-[#BFAF87] z-20 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              transform: "translateX(1.5cm) translateY(1.5cm)",
              boxShadow: "0 0 20px rgba(191, 175, 135, 0.5), inset 0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQEwJZ20O2Kf2g/company-logo_200_200/company-logo_200_200/0/1670160992897?e=2147483647&v=beta&t=M-Vax2xu7-DT422NEllMN9CDjHesuF58cuAAa_TZnPM"
              alt="Robot"
              className="w-20 h-20 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;