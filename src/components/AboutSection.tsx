import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning innovative ideas into elegant code solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-semibold">Bhavishya Ambati</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-semibold">+91 9553200849</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-semibold">bhavishyaambati1@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-semibold">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                I thrive in fast-paced teams, enjoy solving coding challenges, and am eager to tackle 
                bold challenges while collaborating with high-energy teams to build game-changing software 
                that makes a real impact.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <Card className="glass-card border-primary/20 hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Bachelor of Technology
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Computer Science and Engineering
                    </p>
                    <p className="font-semibold mb-2">N.B.K.R Institute of Science and Technology</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>October 2021 - May 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span className="text-primary font-semibold">CGPA: 9.0/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Strengths */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Problem Solving",
                  "Team Collaboration", 
                  "Fast Learning",
                  "Code Quality",
                  "Innovation",
                  "Leadership"
                ].map((strength, index) => (
                  <div 
                    key={strength}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;