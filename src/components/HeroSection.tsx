import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 lg:pt-16 bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 gradient-primary rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-8 lg:py-0">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm"
              >
                🚀 Now in beta - Join early adopters
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Coding your ideas
                </span>{" "}
                into reality
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Mondilla revolutionizes development with AI-powered workflows,
                real-time collaboration, and intuitive project management.
                Transform your ideas into powerful solutions.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-hero group flex items-center justify-center gap-x-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* <button className="btn-ghost group flex items-center justify-center gap-x-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </button> */}

              <button className="px-6 py-3 rounded-xl border border-primary text-primary font-medium flex items-center justify-center gap-x-2 hover:bg-primary hover:text-white transition">
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>No credit card required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-last lg:order-last"
          >
            <div className="relative">
              <img
                src="/image-uploads/3e827352-558b-4bb2-86c9-aff06debeac1.png"
                alt="Mondilla Platform"
                className="w-full h-auto max-w-md mx-auto lg:max-w-none rounded-2xl shadow-card-hover animate-float object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary/10 backdrop-blur-[1px]"></div>
            </div>

            {/* Floating stats - Hidden on mobile for better layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-8 -left-8 glass rounded-xl p-4 shadow-card hidden lg:block"
            >
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass rounded-xl p-4 shadow-card hidden lg:block"
            >
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Developers</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
