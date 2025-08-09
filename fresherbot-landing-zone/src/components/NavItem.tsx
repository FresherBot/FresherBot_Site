import { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface NavItemProps {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  isButton?: boolean;
}

export function NavItem({ 
  to, 
  onClick, 
  children, 
  className = "", 
  isButton = false 
}: NavItemProps) {
  const baseClasses = "text-burgundy-100 hover:text-white font-medium font-['Montserrat']";
  const buttonClasses = "bg-burgundy-500 hover:bg-burgundy-400 text-white px-5 py-2 rounded-md shadow-md font-['Montserrat']";
  const classes = isButton ? buttonClasses : `${baseClasses} ${className}`;

  const renderInner = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={isButton ? { scale: 0.95 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={classes}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{renderInner()}</Link>;
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {renderInner()}
    </div>
  );
}
