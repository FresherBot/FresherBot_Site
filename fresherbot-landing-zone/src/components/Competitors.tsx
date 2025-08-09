import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const features = [
  {
    title: "Best In-class Proctoring",
    description:
      "Enhanced anti-cheating like Auxiliary Device, Session Recording, Tab-Switch, Noise Recording",
    image: "https://cdn-icons-png.flaticon.com/512/2621/2621303.png",
    alt: "Proctoring illustration",
    bg: "bg-blue-100",
    delay: 0.1,
    tooltip: "Real-time monitoring to ensure fairness"
  },
  {
    title: "Single Platform for all Roles",
    description:
      "Developers, Designers, Operations, Sales, Accountants. Pre-loaded questions across roles and seniority",
    image: "/lovable-uploads/e3184abd-23ec-495b-948c-7f917f1a5f0f.png",
    alt: "Roles illustration",
    bg: "bg-cyan-100",
    delay: 0.2,
    tooltip: "Unified testing for every job category"
  },
  {
    title: "No Subscriptions or Minimum Payments",
    description:
      "₹85 per Candidate. No monthly or annual payments. Pay only for what you use. Credits don't expire",
    image: "/lovable-uploads/6eb614b3-eee1-4dfe-aea4-c4ff92808ab2.png",
    alt: "Payment illustration",
    bg: "bg-pink-100",
    delay: 0.3,
    tooltip: "Flexible pricing that scales with you"
  }
];

const Competitors = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6 dark:bg-emerald-900 dark:border-emerald-700 dark:text-emerald-200">
            • FRESHERBOT VS COMPETITORS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
            Considering our Competitors?
            <br />
            Don&apos;t be daft!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, description, image, alt, bg, delay, tooltip }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay }}
              className={`${bg} dark:bg-opacity-10 rounded-3xl p-8 h-full shadow-md hover:shadow-xl transition-shadow duration-300`}
              aria-label={`Feature card: ${title}`}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 cursor-help">
                    {title}
                  </h3>
                </TooltipTrigger>
                <TooltipContent className="text-sm max-w-xs">{tooltip}</TooltipContent>
              </Tooltip>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>

              <div className="mt-6 flex justify-center">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="w-4/5 h-auto object-contain rounded-xl shadow-sm dark:brightness-90"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitors;
