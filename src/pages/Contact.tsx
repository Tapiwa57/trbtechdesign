import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[#0a1929] pt-20">
        <h1 className="text-5xl md:text-6xl font-light text-foreground">
          Contact Us
        </h1>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-narrow mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0a1929] mb-6 text-center">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0a1929] mb-2">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="border-[#ccc] focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0a1929] mb-2">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="border-[#ccc] focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1929] mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-[#ccc] focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1929] mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="+263 7XX XXX XXX" 
                    className="border-[#ccc] focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1929] mb-2">Subject</label>
                  <Input 
                    placeholder="How can we help?" 
                    className="border-[#ccc] focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1929] mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="border-[#ccc] focus:border-primary min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-[#0a1929] mb-6">Other Ways to Reach Us</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div>
                  <p className="text-sm text-[#666] mb-1">Email</p>
                  <a href="mailto:info@idenoloji.com" className="text-primary hover:underline">
                    info@trbtechdesign.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Phone</p>
                  <a href="tel:+26371 503 9928" className="text-primary hover:underline">
                    +263 71 503 9928
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">WhatsApp</p>
                  <a href="https://wa.me/263715039928" className="text-primary hover:underline">
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
