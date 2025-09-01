import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 9,
    description: "Perfect for individual developers and small projects",
    features: [
      "Up to 3 private repositories",
      "5GB storage",
      "Basic CI/CD pipelines",
      "Community support",
      "Code editor access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: 29,
    description: "Everything you need for professional development",
    features: [
      "Unlimited private repositories",
      "100GB storage",
      "Advanced CI/CD pipelines",
      "Priority support",
      "Team collaboration tools",
      "Code analytics",
      "API access",
      "Advanced security features",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "Advanced features for large development organizations",
    features: [
      "Unlimited everything",
      "1TB storage per organization",
      "Custom integrations",
      "24/7 dedicated support",
      "Enterprise security",
      "Custom deployment pipelines",
      "Advanced analytics & reporting",
      "Full API access",
      "Single sign-on (SSO)",
      "Custom branding",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Simple,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Choose the perfect plan for your team. All plans include a 14-day free trial 
            with no credit card required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "border-primary/50 bg-card shadow-glow scale-105"
                  : "border-border/50 bg-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-3 sm:px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
                  <span className="text-sm sm:text-base text-muted-foreground">/month</span>
                </div>

                <button
                  className={
                    plan.popular
                      ? "btn-hero w-full"
                      : "btn-ghost w-full"
                  }
                >
                  {plan.cta}
                </button>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-sm sm:text-base">What's included:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 space-y-3 sm:space-y-4"
        >
          <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
            All plans include unlimited projects, 99.9% uptime SLA, and world-class support.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}