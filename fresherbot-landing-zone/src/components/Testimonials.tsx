import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "FresherBot helped me land my first job in tech within just 2 months of completing their program.",
    author: "NTR",
    position: "Software Developer",
    company: "TechCorp",
    stars: 5,
    avatarColor: "bg-amber-100 text-amber-600",
  },
  {
    quote: "The training programs are comprehensive and aligned perfectly with industry requirements.",
    author: "Rahul Kumar",
    position: "Data Analyst",
    company: "Analytics Inc.",
    stars: 5,
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    quote: "As an employer, finding qualified freshers has never been easier. The platform provides great talent.",
    author: "RAM CHARAN",
    position: "HR Manager",
    company: "InnovateTech",
    stars: 5,
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    quote: "Our college's placement rates improved by 40% after partnering with FresherBot.",
    author: "Dr. SANDEEP REDDY VANGA",
    position: "Placement Director",
    company: "Engineering College",
    stars: 5,
    avatarColor: "bg-green-100 text-green-600",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading - made more compact */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
              What People Say
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hear directly from our users about their success stories with FresherBot.
          </motion.p>
        </div>

        {/* Carousel - made more compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-1 py-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="h-full px-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-full bg-white rounded-lg shadow-md border border-gray-100 p-5 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="flex-grow">
                        {/* Stars */}
                        <div className="flex mb-3" aria-hidden="true">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <div className="relative mb-4">
                          <Quote className="absolute -top-1 -left-1 w-6 h-6 text-rose-200/80" />
                          <p className="text-gray-700 text-base italic pl-5">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>
                      
                      {/* Author Info */}
                      <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${testimonial.avatarColor}`}
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3 text-left">
                          <p className="font-medium text-gray-900 text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.position} @ {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <div className="hidden md:flex justify-center gap-3 mt-6">
              <CarouselPrevious className="relative top-0 left-0 transform-none w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 text-gray-700">
                <ChevronLeft className="w-4 h-4" />
              </CarouselPrevious>
              <CarouselNext className="relative top-0 left-0 transform-none w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 text-gray-700">
                <ChevronRight className="w-4 h-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-rose-100/30 blur-3xl -z-10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl -z-10"></div>
      </div>
    </section>
  );
}