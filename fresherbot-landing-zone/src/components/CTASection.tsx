
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-fresherbot-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-fresherbot-dark to-transparent opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fresherbot-primary">
                Ready to Transform Your Career Journey?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Join thousands of successful professionals who have accelerated their careers with FresherBot's proven programs and placement assistance.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Access to premium job opportunities",
                  "Industry-recognized certification",
                  "Personal career counseling", 
                  "Lifetime learning resources"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-fresherbot-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-fresherbot-primary text-fresherbot-darker hover:bg-fresherbot-primary/90 rounded-md px-6 py-6 text-lg"
                  asChild
                >
                  <Link to="/register">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-fresherbot-primary text-fresherbot-primary hover:bg-fresherbot-primary/10 rounded-md px-6 py-6 text-lg"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 relative"
            >
              <div className="bg-fresherbot-darker border border-fresherbot-primary/30 rounded-xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-fresherbot-primary/20">
                  <h3 className="text-xl font-bold text-fresherbot-primary">Quick Registration</h3>
                </div>
                <div className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-fresherbot-dark border border-fresherbot-primary/20 rounded-md p-2 text-foreground focus:border-fresherbot-primary focus:outline-none focus:ring-1 focus:ring-fresherbot-primary"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-fresherbot-dark border border-fresherbot-primary/20 rounded-md p-2 text-foreground focus:border-fresherbot-primary focus:outline-none focus:ring-1 focus:ring-fresherbot-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full bg-fresherbot-dark border border-fresherbot-primary/20 rounded-md p-2 text-foreground focus:border-fresherbot-primary focus:outline-none focus:ring-1 focus:ring-fresherbot-primary"
                        placeholder="Your phone number"
                      />
                    </div>
                    <Button className="w-full bg-fresherbot-primary text-fresherbot-darker hover:bg-fresherbot-primary/90">
                      Register Now
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
