import { Button } from "@/components/ui/button";
import { Phone, Globe, Briefcase, Handshake, Network } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Phone, text: "Virtual Call Center Services" },
    { icon: Globe, text: "Key Highlights (displayed as icons or bullets)" },
    { icon: Briefcase, text: "Back-Office & Administrative Support" },
    { icon: Handshake, text: "Affordable Solutions for SMEs" },
    { icon: Network, text: "Global-Standard Customer Care" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 className="text-primary font-semibold text-lg mb-6">About Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-foreground text-base leading-relaxed mb-4">
              At Connect Global Solutions, we specialize in providing 
              Business Process Outsourcing (BPO) services that help 
              small and medium enterprises (SMEs) grow with 
              confidence.
            </p>
            
            <p className="text-foreground text-base leading-relaxed mb-6">
              From virtual call center support to back-office services, 
              we are committed to delivering reliable, cost-effective, 
              and scalable solutions tailored to the needs of 
              businesses in Zimbabwe and beyond.
            </p>
            
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              Read more..
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Connect Global Solutions Team" 
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
