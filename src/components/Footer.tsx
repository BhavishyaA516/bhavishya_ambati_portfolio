import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Bhavishya Ambati</h3>
            <p className="text-muted-foreground">
              Passionate developer crafting innovative solutions with clean, efficient code.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/BhavishyaA516"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavishya-ambati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:bhavishyaambati1@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
                Achievements
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 bhavishyaambati1@gmail.com</p>
              <p>📱 +91 9553200849</p>
              <p>📍 Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Bhavishya Ambati. Made with 
              <Heart size={16} className="text-primary" />
              and lots of coffee.
            </p>
            <p className="text-muted-foreground text-sm">
              Architecting Tomorrow's Code, Today.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;