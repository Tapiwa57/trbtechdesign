import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Customer Service?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss how we can help you deliver exceptional customer experiences. Our team is ready to create a custom solution for your business.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", value: "hello@clientsync.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Visit Us", value: "123 Business Ave, Suite 100" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground font-medium">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border card-shadow">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
