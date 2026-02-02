import { Button } from "@/components/ui/button";
import partnerBata from "@/assets/partner-bata.jpg";
import partnerOkZim from "@/assets/partner-ok-zim.jpg";
import partnerTvSales from "@/assets/partner-tv-sales.jpg";
import partnerZetdc from "@/assets/partner-zetdc.jpg";
import partnerMasimba from "@/assets/partner-masimba.jpg";

const partners = [
  { name: "Bata", logo: partnerBata },
  { name: "OK Zimbabwe", logo: partnerOkZim },
  { name: "TV Sales & Home", logo: partnerTvSales },
  { name: "ZETDC", logo: partnerZetdc },
  { name: "Masimba", logo: partnerMasimba },
];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <h2 className="text-primary font-semibold text-lg mb-4">Trusted Partnerships</h2>
        
        <p className="text-foreground text-base max-w-4xl mb-10">
          At Connect Global Solutions, we believe in building long-term partnerships with businesses that share our values of 
          quality, trust, and growth. We work with small and medium-sized enterprises across different industries, providing 
          them with reliable outsourcing solutions that empower them to scale.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10">
          {partners.map((partner, index) => (
            <div key={index} className="bg-card p-4 rounded-lg shadow-sm">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
