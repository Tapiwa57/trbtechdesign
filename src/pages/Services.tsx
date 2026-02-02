import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/services-hero.jpg";

const webPackages = [
  {
    name: "Basic",
    price: "$60-100+",
    features: [
      "Pre-made template, lightly customizable",
      "Up to 5 pages",
      "Contact form & social media links",
      "Mobile responsive",
      "2 rounds of revisions"
    ]
  },
  {
    name: "Standard",
    price: "$150-250+",
    features: [
      "Everything in Basic",
      "Custom homepage design",
      "Up to 10 pages",
      "Blog & social media integration",
      "Basic hosting setup",
      "Email marketing setup",
      "3 rounds of revisions"
    ]
  },
  {
    name: "Premium",
    price: "$300-500+",
    features: [
      "Everything in Standard",
      "Fully custom design & branding",
      "20+ pages",
      "Advanced animations & interactive elements",
      "Content creation (text, images, videos)",
      "CMS integration",
      "Ongoing maintenance & support",
      "Unlimited revisions"
    ]
  }
];

const ecommercePackage = {
  name: "E-Commerce",
  price: "$600-1000+",
  features: [
    "Product catalog & shopping cart",
    "Payment integration & shipping",
    "Customer accounts & order tracking",
    "Inventory management system",
    "Basic SEO & marketing tools",
    "3 rounds of revisions"
  ]
};

const graphicPackages = [
  {
    name: "Business Card",
    price: "$5",
    features: ["1 Concept", "3 Revisions", "Source Files"]
  },
  {
    name: "Logo Design",
    price: "$10",
    features: ["1 Concept", "Unlimited Revisions", "Source Files"]
  },
  {
    name: "Company Profile",
    price: "$30",
    features: ["Up to 10 Pages", "PDF Format", "Custom Design"]
  },
  {
    name: "Flyer / Poster / Banner",
    price: "$10-25",
    features: ["Custom Design", "Print Ready"]
  }
];

const digitalPackages = [
  {
    name: "Social media marketing",
    price: "$30",
    features: ["Up to 10 posts", "Posts per month", "Custom Design"]
  },
  {
    name: "Social media marketing",
    price: "$30",
    features: ["Up to 10 posts", "10x5 per Format", "Custom Design"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,25,41,0.95) 0%, rgba(10,25,41,0.7) 100%), url(${servicesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl md:text-6xl font-light text-foreground">
          TRB Services
        </h1>
      </section>

      {/* Website Design & Development */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a1929] mb-2 underline">Website Design & Development</h2>
            <p className="text-[#666]">
              We craft visually compelling and user-friendly website interfaces tailored to your brand. and We build fast, secure, and scalable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {webPackages.map((pkg, index) => (
              <div key={index} className="border border-[#ccc] rounded-xl p-6 bg-white">
                <h3 className="text-xl font-bold text-[#0a1929] mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-[#0a1929] mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Order Now
                </Button>
              </div>
            ))}
          </div>

          {/* E-Commerce */}
          <div className="max-w-md">
            <div className="border border-[#ccc] rounded-xl p-6 bg-white">
              <h3 className="text-xl font-bold text-[#0a1929] mb-2">{ecommercePackage.name}</h3>
              <p className="text-2xl font-bold text-[#0a1929] mb-4">{ecommercePackage.price}</p>
              <ul className="space-y-2 mb-6">
                {ecommercePackage.features.map((feature, i) => (
                  <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Branding & Graphic Design */}
      <section className="py-16 bg-[#0a1929]">
        <div className="container-narrow mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-2 underline">Branding & Graphic design</h2>
            <p className="text-muted-foreground">
              We create impactful graphic assets for both digital and print
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {graphicPackages.map((pkg, index) => (
              <div key={index} className="border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-xl font-bold text-foreground mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Order Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a1929] mb-2 underline">Digital Marketing</h2>
            <p className="text-[#666]">
              We help brands grow online through targeted digital strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {digitalPackages.map((pkg, index) => (
              <div key={index} className="border border-[#ccc] rounded-xl p-6 bg-white">
                <h3 className="text-lg font-bold text-[#0a1929] mb-2">{pkg.name}</h3>
                <p className="text-xl font-bold text-[#0a1929] mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Order Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
