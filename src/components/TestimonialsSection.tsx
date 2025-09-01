import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sophia Müller",
    role: "Software Engineer",
    company: "Berlin Tech Labs",
    content:
      "Mondilla completely streamlined our dev process. Deployments are now effortless and collaboration feels natural.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Daniel Kim",
    role: "CTO",
    company: "Seoul Startups",
    content:
      "The automation tools are brilliant. It’s like having an extra engineer working 24/7. We scaled faster than we imagined.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Isabella Rossi",
    role: "Product Designer",
    company: "Milan Creative Studio",
    content:
      "A platform that truly bridges design and engineering. Our workflow is smoother, and ideas move from sketch to code instantly.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              teams worldwide
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Hear what developers, designers, and founders from around the globe
            are saying about their experience with{" "}
            <span className="font-semibold">Mondilla Connect</span>.
          </p>
        </motion.div>

        {/* Desktop Testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 sm:p-8 rounded-2xl border border-white/40 dark:border-gray-700 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="space-y-4 sm:space-y-6">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Profile */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-gray-700 shadow"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/40 dark:border-gray-700 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-md"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-pink-500 to-purple-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/40 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400">
              10k+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400">
              99.9%
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400">
              1M+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Lines of Code</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400">
              4.9/5
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
