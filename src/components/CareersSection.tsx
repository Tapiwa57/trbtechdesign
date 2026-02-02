import { Button } from "@/components/ui/button";
import careersImage from "@/assets/careers-image.jpg";

const CareersSection = () => {
  return (
    <section id="careers" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 className="text-primary font-semibold text-lg mb-8">Careers at Connect Global Solutions</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={careersImage} 
              alt="Careers at Connect Global Solutions" 
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-foreground text-base leading-relaxed mb-6">
              Join a growing team that is passionate about delivering world-
              class outsourcing solutions. At Connect Global Solutions, we 
              value talent, dedication, and innovation. Whether you're starting 
              your career or looking to grow your skills, we provide 
              opportunities to learn, connect, and thrive.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
