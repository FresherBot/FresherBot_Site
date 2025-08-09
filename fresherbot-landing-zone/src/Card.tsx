import { motion } from "framer-motion";

const Card = ({ title, description, icon, isVisible, zIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
      style={{ zIndex }}
    >
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
