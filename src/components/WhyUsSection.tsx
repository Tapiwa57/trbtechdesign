import { CheckCircle2, Clock, DollarSign, Globe } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Get your customer support team up and running within 48 hours with our streamlined onboarding process.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Reduce operational costs by up to 40% compared to in-house teams while maintaining premium quality.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Serve customers globally with support in 20+ languages from native-speaking professionals.",
  },
];

const features = [
  "Dedicated account manager",
  "Custom training for your brand",
  "Real-time reporting dashboard",
  "Seamless CRM integration",
  "Scalable team sizing",
  "Industry-specific expertise",
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-card/30">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Your Customers Deserve <span className="text-gradient">The Best</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just handle calls – we become an extension of your brand. Our trained professionals understand your business and deliver exceptional experiences every time.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
