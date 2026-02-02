import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutHistory from "@/assets/about-history.jpg";

const principles = [
  {
    title: "Innovation-Driven",
    description: "We embrace creativity and new ideas in every project."
  },
  {
    title: "Client-Centered",
    description: "Your success is our priority."
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty."
  },
  {
    title: "Quality First",
    description: "We focus on delivering solutions that work and last."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork, both with clients and within our agency."
  },
  {
    title: "Continuous Learning",
    description: "We evolve with technology to serve you better."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,25,41,0.7) 0%, rgba(10,25,41,0.9) 100%), url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl md:text-6xl font-light text-foreground">
          About TRB Techdesign
        </h1>
      </section>

      {/* About Us Content */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0a1929] mb-6">About Us</h2>
              <p className="text-[#666] leading-relaxed">
                TRB Techdesign is a creative digital agency committed to delivering modern, efficient, and scalable technology solutions. We specialize in Web Design, Web Development, Digital Marketing, Branding, and IT Support Services tailored for individuals, startups, and growing businesses. With a strong focus on innovation and user-centered design, we aim to bridge the gap between technology and business needs—helping clients build their online presence and grow in a competitive digital landscape.
              </p>
            </div>
            <div>
              <img src={aboutTeam} alt="Our Team" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Goal & Mission */}
      <section className="py-12 bg-primary">
        <div className="container-narrow mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground underline mb-4">Our Goal</h3>
            <p className="text-foreground/90 max-w-3xl mx-auto">
              To become a leading digital partner across Africa, empowering businesses and individuals through smart, accessible, and transformative technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground underline mb-4">Our Mission</h3>
            <p className="text-foreground/90 max-w-3xl mx-auto">
              To deliver high-quality, customized tech solutions that support growth, creativity, and long-term value for our clients by combining strategy, design, and digital tools.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0a1929] text-center mb-10">Our Principles</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            {principles.slice(0, 4).map((principle, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-foreground/80">{principle.description}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-lg">
            {principles.slice(4).map((principle, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-foreground/80">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-[#0a1929]">
        <div className="container-narrow mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our History</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TRB Techdesign was founded in 2025 with a simple but powerful vision to bring creative ideas to life through technology.
                </p>
                <p>
                  The name TRB Techdesign is a blend of two powerful concepts: "TRB" from founder name and "Techdesign" from Technology and design. Together, they represent our core philosophy: "Ideas in Technology."
                </p>
                <p>
                  From day one, we set out to be more than just a digital agency. We're a team of creators, developers, designers, and strategists passionate about building impactful digital solutions for individuals, startups, and growing businesses.
                </p>
                <p>
                  As the digital world evolves, so does Idenoloji is constantly pushing boundaries, turning client ideas into real-world digital experiences that work, grow, and inspire.
                </p>
              </div>
            </div>
            <div>
              <img src={aboutHistory} alt="Our History" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6 text-center">
          <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base rounded-none">
            View our Company Profile
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
