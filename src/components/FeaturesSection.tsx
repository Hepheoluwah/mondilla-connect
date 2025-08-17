import { Zap, Shield, Users, BarChart3, MessageSquare, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Development",
    description: "Intelligent code suggestions, automated testing, and smart debugging tools that understand your project context and accelerate development."
  },
  {
    icon: Shield,
    title: "Secure Code Repository",
    description: "Enterprise-grade security with encrypted repositories, access controls, and compliance standards. Your code is always protected."
  },
  {
    icon: Users,
    title: "Developer Collaboration",
    description: "Seamlessly work with your team using advanced branching, code reviews, and integrated communication tools for developers."
  },
  {
    icon: BarChart3,
    title: "Project Analytics",
    description: "Track development progress with detailed insights, performance metrics, and code quality analytics to optimize your workflow."
  },
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    description: "Stay informed about code changes, build status, and project updates with context-aware notifications that matter."
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Create custom CI/CD pipelines, automated testing, and deployment workflows that scale with your development process."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful tools for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              modern developers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to code, collaborate, and deploy your ideas. 
            Built with cutting-edge technology for the next generation of development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl border border-border/50 bg-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="p-3 gradient-primary rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-hero">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}