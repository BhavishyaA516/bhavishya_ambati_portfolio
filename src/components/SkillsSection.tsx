import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, User, Brain } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 }
      ],
      color: "primary"
    },
    {
      title: "Web Technologies",
      icon: <Database className="text-accent-secondary" size={24} />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Bootstrap", level: 80 }
      ],
      color: "accent-secondary"
    },
    {
      title: "Developer Tools",
      icon: <Settings className="text-accent" size={24} />,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "PyCharm", level: 85 },
        { name: "Eclipse", level: 80 },
        { name: "Jupyter Notebook", level: 85 }
      ],
      color: "accent"
    },
    {
      title: "Soft Skills",
      icon: <User className="text-success" size={24} />,
      skills: [
        { name: "Team Player", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 88 },
        { name: "Leadership", level: 85 },
        { name: "Work Ethic", level: 95 }
      ],
      color: "success"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="glass-card border-primary/20 hover-glow transition-all duration-500"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-background p-3 rounded-full border-2 border-primary/30">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`border-${category.color} text-${category.color}`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "SAP MM", "Canva", "Microsoft Teams", "Zoom", "Agile Methodology",
              "Git", "Linux", "Data Structures", "Algorithms", "Machine Learning",
              "Cybersecurity", "API Design", "Database Design", "System Security"
            ].map((tech, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center glass-card p-6 rounded-xl">
            <Brain className="text-primary mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Problem Solver</h4>
            <p className="text-muted-foreground">
              Analytical mindset with a passion for breaking down complex challenges
            </p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl">
            <Code className="text-accent mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Clean Coder</h4>
            <p className="text-muted-foreground">
              Committed to writing maintainable, efficient, and well-documented code
            </p>
          </div>
          <div className="text-center glass-card p-6 rounded-xl">
            <User className="text-accent-secondary mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Team Player</h4>
            <p className="text-muted-foreground">
              Collaborative approach with strong communication and leadership skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;