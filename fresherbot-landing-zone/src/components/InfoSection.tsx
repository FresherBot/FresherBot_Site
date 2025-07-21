
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building, GraduationCap, Laptop, Award, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const InfoSection = () => {
  const userGroups = [
    {
      title: "For Candidates",
      description: "Find your dream job, build your professional profile, and connect with employers looking for fresh talent.",
      icon: <Users className="w-10 h-10 text-fresherbot-primary" />,
      link: "/candidate",
      class: "from-fresherbot-primary/5 to-fresherbot-primary/10 border-fresherbot-primary/20",
    },
    {
      title: "For Employers",
      description: "Discover talented freshers, streamline your hiring process, and build your company's future workforce.",
      icon: <Building className="w-10 h-10 text-fresherbot-secondary" />,
      link: "/employer",
      class: "from-fresherbot-secondary/5 to-fresherbot-secondary/10 border-fresherbot-secondary/20",
    },
    {
      title: "For Colleges",
      description: "Help your students find opportunities and track their placement success through our dedicated portal.",
      icon: <GraduationCap className="w-10 h-10 text-fresherbot-accent" />,
      link: "/college",
      class: "from-fresherbot-accent/5 to-fresherbot-accent/10 border-fresherbot-accent/20",
    },
  ];

  const features = [
    {
      title: "Latest Technology",
      description: "Built with cutting-edge technologies to provide a seamless experience.",
      icon: <Laptop className="w-8 h-8 text-fresherbot-secondary" />,
    },
    {
      title: "Quality Programs",
      description: "Well-structured programs designed by industry experts.",
      icon: <Award className="w-8 h-8 text-fresherbot-primary" />,
    },
    {
      title: "Global Reach",
      description: "Connect with opportunities from companies worldwide.",
      icon: <Globe className="w-8 h-8 text-fresherbot-accent" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-fresherbot-primary/10 to-fresherbot-secondary/10 text-fresherbot-primary mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="heading-gradient">Who We Serve</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Empowering careers, businesses and educational institutions through our specialized services.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {userGroups.map((group, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`rounded-2xl p-8 bg-gradient-to-br ${group.class} border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-6">{group.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{group.title}</h3>
                <p className="text-gray-600 mb-6">{group.description}</p>
                <Button variant="ghost" className="group flex items-center font-medium text-fresherbot-primary hover:text-fresherbot-secondary" asChild>
                  <Link to={group.link} className="flex items-center">
                    Learn More 
                    <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-fresherbot-primary/10 rounded-full z-0"></div>
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-fresherbot-accent/10 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Student Success" 
                className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover"
              />
              
              <div className="absolute -right-6 top-1/3 bg-white rounded-xl p-4 shadow-lg border border-gray-100 z-20">
                <div className="flex items-center space-x-2">
                  <div className="bg-fresherbot-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-fresherbot-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">97% Success Rate</p>
                    <p className="text-xs text-gray-500">Placement Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-fresherbot-accent/10 to-fresherbot-accent/20 text-fresherbot-accent mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold mb-6">
                <span className="heading-gradient">Empowering Your Career Journey</span>
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="icon-feature mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button className="mt-8 btn-primary px-6 rounded-full" size="lg" asChild>
                <Link to="/register">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
