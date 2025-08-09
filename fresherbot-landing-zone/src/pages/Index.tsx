import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import TrustedBy from "@/components/TrustedBy";
import Competitors from "@/components/Competitors";
import HowWeDoIt from "@/components/HowWeDoIt";
import { Testimonials } from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";
import Howtodo from "@/components/Howtodo";
import HrccScreen from "@/components/HrccScreen";
import Navbar from "@/components/Navbar";
import ScrollSlider from "@/components/Slider";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#121339";

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.padding = "";
      document.body.style.margin = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Animation variants for other sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Full screen Hero Section */}
      <Hero />

     

      {/* The rest of the page with beige background */}
      <div className="bg-beige-50">
        {/* Trusted By Companies and Colleges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <TrustedBy />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
        <ScrollSlider />
</motion.div>

        {/* How We Do It (HrccScreen and Howtodo) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
        <HrccScreen /></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Howtodo />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Testimonials />
        </motion.div>

        {/* Competitors Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Competitors />
        </motion.div> */}

        {/* CTA Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <CTASection />
        </motion.div> */}
      </div>

      <Footer />

      {/* Persistent Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;