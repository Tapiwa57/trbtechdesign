import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Briefcase } from "lucide-react";
import serviceCallCenter from "@/assets/service-call-center.jpg";
import serviceChat from "@/assets/service-chat.jpg";
import serviceSupport from "@/assets/service-support.jpg";

const services = [
  {
    image: serviceCallCenter,
    icon: Phone,
    title: "Virtual Call Center Services",
    features: [
      "Inbound & outbound call handling",
      "24/7 customer support",
      "Professional agents trained to represent your brand",
    ],
  },
  {
    image: serviceChat,
    icon: MessageCircle,
    title: "Customer Support Solutions",
    features: [
      "Multichannel support (phone, email, live chat)",
      "Complaint handling & customer care",
      "Boosting customer satisfaction and loyalty",
    ],
  },
  {
    image: serviceSupport,
    icon: Briefcase,
    title: "Back-Office Support",
    features: [
      "Data entry & document management",
      "IT helpdesk and administrative tasks",
      "Streamlined processes to reduce workload",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <h2 className="text-primary font-semibold text-lg mb-4">Our Services</h2>
        
        <p className="text-foreground text-base max-w-3xl mb-12">
          We provide cost-effective outsourcing solutions designed to help businesses in Zimbabwe and 
          beyond grow faster, serve customers better, and stay competitive.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                </div>
                
                <ol className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground font-medium">{idx + 1}.</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
