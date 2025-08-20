import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, ScrollText, Star, Users, Cloud, Code, Zap } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "LinkedIn Top Volunteering Voice",
      organization: "LinkedIn",
      description: "Recognized and badged as LinkedIn's Top Volunteering Voice",
      icon: <Users className="text-primary" size={24} />,
      type: "Recognition",
      color: "primary"
    },
    {
      title: "Google Cloud Arcade Completion",
      organization: "Google Cloud",
      description: "Obtained swags from Google Cloud Arcade program by mastering cloud skills through hands-on labs",
      icon: <Cloud className="text-accent" size={24} />,
      type: "Certification",
      color: "accent"
    },
    {
      title: "IEEE Hyderabad Section Co-Lead",
      organization: "IEEE",
      description: "Certificate of appreciation for being IEEE Hyderabad Section Co-Lead and boosting participation by over 19000+ participants",
      icon: <Award className="text-accent-secondary" size={24} />,
      type: "Leadership",
      color: "accent-secondary"
    },
    {
      title: "Pragati: Path To Future Cohort-3 Mentee",
      organization: "Infosys Springboard",
      description: "Selected for Pragati: Path To Future Cohort-3 Mentee by Infosys Springboard",
      icon: <Star className="text-primary" size={24} />,
      type: "Mentorship",
      color: "primary"
    },
    {
      title: "Oracle Certified AI Foundation Associate",
      organization: "Oracle Corporation",
      description: "Earned a Oracle Certified AI Foundation Associate by Oracle Corporation",
      icon: <ScrollText className="text-accent" size={24} />,
      type: "Certification",
      color: "accent"
    },
    {
      title: "Ethical Hacking MOOC Certificate",
      organization: "NPTEL & Swayam",
      description: "Procured a MOOC certificate on Ethical Hacking by NPTEL & Swayam",
      icon: <ScrollText className="text-accent-secondary" size={24} />,
      type: "Certification",
      color: "accent-secondary"
    },
    {
      title: "SAWIT.AI Learnthon Achievement",
      organization: "Google for developers, HCL Tech, GUVI",
      description: "Awarded the certificate of achievement for SAWIT.AI learnthon partnered by Google for developers, HCL Tech and GUVI",
      icon: <Trophy className="text-primary" size={24} />,
      type: "Competition",
      color: "primary"
    },
    {
      title: "Premium Postman Recognition",
      organization: "Postman",
      description: "Achieved recognition with premium Postman swag for excelling in API design and documentation, reducing debugging time by 25% and improving software delivery timelines",
      icon: <Code className="text-accent" size={24} />,
      type: "Recognition",
      color: "accent"
    }
  ];

  const stats = [
    { number: "8+", label: "Achievements", icon: <Trophy className="text-primary" size={32} /> },
    { number: "5+", label: "Certifications", icon: <ScrollText className="text-accent" size={32} /> },
    { number: "2+", label: "Leadership Roles", icon: <Users className="text-accent-secondary" size={32} /> },
    { number: "3+", label: "Organizations", icon: <Star className="text-primary" size={32} /> }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in technology, leadership, and continuous learning
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl text-center hover-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-background p-3 rounded-full border-2 border-primary/30 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-primary leading-tight">
                        {achievement.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`border-${achievement.color} text-${achievement.color} ml-2 flex-shrink-0`}
                      >
                        {achievement.type}
                      </Badge>
                    </div>
                    <p className="text-sm font-semibold text-accent mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Highlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Impact Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <h4 className="font-bold mb-2">Global Impact</h4>
              <p className="text-muted-foreground text-sm">
                Increased global participation by 85% in IEEE Xtreme competition
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-accent" size={32} />
              </div>
              <h4 className="font-bold mb-2">Performance Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Reduced debugging time by 25% through API design expertise
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="bg-accent-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="text-accent-secondary" size={32} />
              </div>
              <h4 className="font-bold mb-2">Recognition</h4>
              <p className="text-muted-foreground text-sm">
                Top voice recognition on LinkedIn for volunteering efforts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;