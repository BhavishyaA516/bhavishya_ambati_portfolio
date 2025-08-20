import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_co5s1jd', 'template_0c2c8yq', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Bhavishya Ambati'
      }, 'wALWUkD-wBZnNC3sB');
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: <Mail className="text-primary" size={24} />,
    label: "Email",
    value: "bhavishyaambati1@gmail.com",
    href: "mailto:bhavishyaambati1@gmail.com"
  }, {
    icon: <Phone className="text-accent" size={24} />,
    label: "Phone",
    value: "+91 9553200849",
    href: "tel:+919553200849"
  }, {
    icon: <MapPin className="text-accent-secondary" size={24} />,
    label: "Location",
    value: "Hyderabad, India",
    href: "#"
  }];
  const socialLinks = [{
    icon: <Github className="text-foreground" size={24} />,
    label: "GitHub",
    href: "https://github.com/BhavishyaA516",
    color: "hover:text-primary"
  }, {
    icon: <Linkedin className="text-foreground" size={24} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhavishya-ambati",
    color: "hover:text-accent"
  }];
  return <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or simply 
                connect with fellow developers. Whether you have a project in mind, want to 
                collaborate, or just want to say hello, I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/5 transition-all duration-300 hover-glow">
                    <div className="bg-background p-3 rounded-full border-2 border-primary/30">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-semibold text-foreground">{info.value}</div>
                    </div>
                  </a>)}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full bg-background border-2 border-primary/30 transition-all duration-300 hover:border-primary hover:scale-110 ${social.color}`} title={social.label}>
                    {social.icon}
                  </a>)}
              </div>
            </div>

            {/* Interactive Chatbot CTA */}
            
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-card border-primary/20 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name
                    </Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required className="bg-background border-border hover-glow focus:border-primary" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="bg-background border-border hover-glow focus:border-primary" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project, collaboration ideas, or just say hello!" rows={6} required className="bg-background border-border hover-glow focus:border-primary resize-none" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full btn-neon text-primary-foreground font-semibold py-3">
                    {isSubmitting ? <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </> : <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>}
                  </Button>
                </form>

                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;