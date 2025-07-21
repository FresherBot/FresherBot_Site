
import { motion } from "framer-motion";

const Competitors = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            • FRESHERBOT VS COMPETITORS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Considering our Competitors?<br />Don't be daft!
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-blue-100 rounded-3xl p-8 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Best In-class Proctoring</h3>
            <p className="text-gray-700 mb-6">
              Enhanced anti-cheating like Auxiliary Device, Session Recording, Tab-Switch, Noise Recording
            </p>
            <div className="mt-6">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2621/2621303.png" 
                alt="Proctoring illustration" 
                className="w-full h-auto max-h-52 object-contain"
              />
            </div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cyan-100 rounded-3xl p-8 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Single Platform for all Roles</h3>
            <p className="text-gray-700 mb-6">
              Developers, Designers, Operations, Sales, Accountants. Pre-loaded questions across roles and seniority
            </p>
            <div className="mt-6 flex justify-center">
              <img 
                src="/lovable-uploads/e3184abd-23ec-495b-948c-7f917f1a5f0f.png" 
                alt="Roles illustration" 
                className="w-4/5 h-auto object-contain"
              />
            </div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-pink-100 rounded-3xl p-8 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Subscriptions or Minimum Payments</h3>
            <p className="text-gray-700 mb-6">
              ₹85 per Candidate. No monthly or annual payments. Pay only for what you use. Credits don't expire
            </p>
            <div className="mt-6 flex justify-center">
              <img 
                src="/lovable-uploads/6eb614b3-eee1-4dfe-aea4-c4ff92808ab2.png" 
                alt="Payment illustration" 
                className="w-4/5 h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Competitors;
