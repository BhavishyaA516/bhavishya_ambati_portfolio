import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Users, Shield, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "IEEE Xtreme 18.0 Section Co-Lead Intern",
      company: "IEEE",
      duration: "May 2024 - December 2024",
      type: "Leadership Internship",
      icon: <Users className="text-primary" size={24} />,
      responsibilities: [
        "Led recruitment and hiring for Student Branch Ambassadors, and eventually increased participation globally by 85%",
        "Facilitated knowledge-sharing sessions for all 60 Student Branches under Hyderabad region 10, IEEE",
        "Promoting and representing IEEE Xtreme on Social media to all the professional individuals to participate in the competition resulting in over 200,000+ participants"
      ],
      color: "primary"
    },
    {
      title: "Supraja Technologies Cybersecurity Intern",
      company: "Supraja Technologies",
      duration: "October 2023 - April 2024",
      type: "Technical Internship",
      icon: <Shield className="text-accent-secondary" size={24} />,
      responsibilities: [
        "Developed an optimized encryption model to secure visual data to keep the confidential data safe, improved system performance by 20%",
        "Applied security techniques, improving encryption processing time by 15%", 
        "Proactively prevented potential breaches by enhancing system security by 25%"
      ],
      color: "accent-secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through impactful internships and leadership roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover-glow transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon and Timeline */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="bg-background p-4 rounded-full border-2 border-primary/30">
                      {exp.icon}
                    </div>
                    <div className="hidden lg:block w-px h-full bg-gradient-to-b from-primary to-transparent mt-4"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Building size={16} className="text-muted-foreground" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{exp.duration}</span>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`border-${exp.color} text-${exp.color} hover:bg-${exp.color}/10`}
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-primary/5 transition-colors"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                        </div>
                      ))}
                    </div>

                    {/* Impact metrics */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      {index === 0 && (
                        <>
                          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                            <TrendingUp size={16} className="text-primary" />
                            <span className="text-sm font-semibold">85% Global Participation Increase</span>
                          </div>
                          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                            <Users size={16} className="text-primary" />
                            <span className="text-sm font-semibold">200,000+ Participants</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center gap-2 bg-accent-secondary/10 px-3 py-1 rounded-full">
                            <Shield size={16} className="text-accent-secondary" />
                            <span className="text-sm font-semibold">25% Security Enhancement</span>
                          </div>
                          <div className="flex items-center gap-2 bg-accent-secondary/10 px-3 py-1 rounded-full">
                            <TrendingUp size={16} className="text-accent-secondary" />
                            <span className="text-sm font-semibold">20% Performance Improvement</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;