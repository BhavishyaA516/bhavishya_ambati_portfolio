import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { ChevronDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
const HeroSection = () => {
  const { toast } = useToast();
  const [text, setText] = useState("");
  const fullText = "Architecting Tomorrow's Code, Today.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bhavishya_Ambati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest!"
    });
  };

  return (
    <section className="min-h-screen particles-bg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-primary rounded-full opacity-70 animate-pulse" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name with glow effect */}
          <h1 className="text-6xl mb-6 text-glow animate-fadeInUp md:text-7xl text-gray-700 text-center font-extrabold">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent text-7xl">Bhavishya</span>
            <br />
            <span className="text-foreground">Ambati</span>
          </h1>

          {/* Animated tagline */}
          <div className="text-2xl md:text-3xl mb-8 h-10">
            <span className="text-primary font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A curious and driven IT graduate with a strong foundation in programming and problem-solving, 
            seeking an entry-level position to apply my skills, tackle real-world challenges, and grow within 
            a dynamic team. I'm on a mission to snag an entry-level role where I can turn ideas into code that 
            solves real problems.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <a href="tel:+919553200849" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={16} />
              +91 9553200849
            </a>
            <a href="mailto:bhavishyaambati1@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={16} />
              bhavishyaambati1@gmail.com
            </a>
            <a href="https://github.com/BhavishyaA516" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhavishya-ambati" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={scrollToProjects} className="btn-neon text-primary-foreground font-semibold px-8 py-3 text-lg">
              View My Projects
            </Button>
            <Button onClick={scrollToContact} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg hover-glow">
              Get In Touch
            
              
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
