import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.3) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      
      <div className="container-narrow mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            <span className="italic">Focus on Growth,</span><br />
            <span className="italic">We Handle the Rest</span>
          </h1>
          
          <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
            We provide professional call center, customer support, and back-office 
            outsourcing designed to help businesses in Zimbabwe and beyond grow faster 
            while reducing costs.
          </p>
          
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            With our virtual support solutions, you can scale operations, improve customer 
            satisfaction, and focus on what matters most—your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
              Discover Our Services
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
