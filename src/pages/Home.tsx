import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Busting Office Environment.png";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Website Designs",
    description: "We craft visually compelling and user-friendly website interfaces tailored to your brand. Our design approach focuses on user experience (UX), mobile responsiveness, and aesthetic appeal — ensuring your site captures attention and drives engagement."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Website Development",
    description: "We build fast, secure, and scalable websites using modern technologies. From static business sites to dynamic platforms with backend systems, we ensure every line of code supports performance, SEO, and long-term reliability."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Graphic design",
    description: "We create impactful graphic assets for both digital and print. Whether it's marketing materials, social media content, business cards, flyers, or brochures — we design with clarity, creativity, and consistency to amplify your message."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Branding",
    description: "We help you define a strong brand identity that communicates your values and stands out in the market. Our services include logo design, brand guidelines, color palettes, typography, and visual storytelling that resonate with your target audience."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "We help brands grow online through targeted digital strategies. Our services include social media marketing, search engine optimization (SEO), email campaigns, Google Ads, and content marketing — all tailored to increase visibility, drive traffic, and convert leads into loyal customers."
  }
];

const testimonials = [
  {
    text: "yuchjhsyusuifhnciuruhtghuyy,hyuhwhtynyumhry frmctuymtuireuicnuihrecdkjncuiercnuybchabwb cjhxafbgvaxyhc dhsa fgyaanyrmcycegmyuafyumauifmuiamciu uc",
    name: "Haile MAshiri",
    role: "Management",
    rating: 5
  },
  {
    text: "yuchjhsyusuifhnciuruhtghuyy,hyuhwhtynyumhry frmctuymtuireuicnuihrecdkjncuiercnuybchabwb cjhxafbgvaxyhc dhsa fgyaanyrmcycegmyuafyumauifmuiamciu uc",
    name: "Haile MAshiri",
    role: "Management",
    rating: 5
  },
  {
    text: "yuchjhsyusuifhnciuruhtghuyy,hyuhwhtynyumhry frmctuymtuireuicnuihrecdkjncuiercnuybchabwb cjhxafbgvaxyhc dhsa fgyaanyrmcycegmyuafyumauifmuiamciu uc",
    name: "Haile MAshiri",
    role: "Management",
    rating: 3
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,25,41,0.7) 0%, rgba(10,25,41,0.9) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8">
            Digital Agency
          </h1>
          <a href="https://wa.me/263715039928">
          <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base rounded-none">
            Get started
          </Button>
          </a>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1929] mb-4">What we Offer</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              At TRB techdesign, we craft digital experiences that grow your brand — from stunning websites to smart marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="border border-[#ddd] rounded-lg p-6 bg-white">
                <div className="text-[#0a1929] mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#0a1929] mb-3">{service.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div key={index} className="border border-[#ddd] rounded-lg p-6 bg-white">
                <div className="text-[#0a1929] mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#0a1929] mb-3">{service.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 sm:py-16 bg-primary" aria-label="Call To Action">
        <div className="container-narrow mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
            Looking to grow your online presence?
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 mb-8 max-w-2xl mx-auto">
            TRB Techdesign empowers individuals and businesses with smart, creative, and scalable digital solutions.
          </p>
          
            <Link
            to="/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-foreground text-foreground  hover:text-primary rounded-none px-6 sm:px-8 py-3 sm:py-4"
             >
            Uncover What Sets Us Apart – <Button className="bg-foreground text-background hover:text-primary hover:bg-foreground/90 px-8 py-6 text-base rounded-none">Download Our Company Profile</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0a1929]">
        <div className="container-narrow mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-10">Testimonial</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-500"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;