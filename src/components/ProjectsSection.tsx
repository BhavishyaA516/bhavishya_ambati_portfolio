import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Link, FileText, TrendingUp, Users, Target, Clock } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Aura Lint",
      category: "Artificial Intelligence, SQL, Software Development",
      year: "2025",
      description: "An AI-driven code review and optimization tool that revolutionizes software development workflows.",
      achievements: [
        "Maintained 100% compliance with coding standards, ensuring ethical AI outputs and a user-friendly interface",
        "Developed an AI-driven code review and optimization tool, integrating error correction and performance enhancements, with 95% accuracy in bug detection and 40% faster review times",
        "Boosted productivity for 80% of beta testers, delivering maximum effective optimization suggestions"
      ],
      metrics: [
        { icon: <Target size={16} />, label: "95% Accuracy", value: "Bug Detection" },
        { icon: <Clock size={16} />, label: "40% Faster", value: "Review Times" },
        { icon: <Users size={16} />, label: "80% Users", value: "Productivity Boost" }
      ],
      technologies: ["AI/ML", "Python", "JavaScript", "React", "Node.js"],
      color: "primary"
    },
    {
      title: "Pocket URL Shortener",
      category: "URL, CSS, JavaScript",
      year: "2024",
      description: "A scalable URL shortening service with advanced analytics and user-friendly interface.",
      achievements: [
        "Developed a scalable URL Shortener service that reduced URL length by 85%, improving shareability and user experience",
        "Integrated analytics tracking to provide real-time insights into URL usage and click-through rates, increasing engagement by 30%",
        "Designed and implemented a user-friendly frontend, boosting conversion rates by 25%"
      ],
      metrics: [
        { icon: <TrendingUp size={16} />, label: "85% Shorter", value: "URL Length" },
        { icon: <Users size={16} />, label: "30% Increase", value: "Engagement" },
        { icon: <Target size={16} />, label: "25% Boost", value: "Conversion" }
      ],
      technologies: ["JavaScript", "CSS", "HTML", "Node.js", "MongoDB"],
      color: "accent-secondary"
    },
    {
      title: "Mind Mesh",
      category: "Web Technologies, Operations • Create, Edit, Pin and Delete",
      year: "2023",
      description: "A lightweight note-taking application designed to enhance productivity and learning efficiency.",
      achievements: [
        "Enabling a lightweight solution that improves task management efficiency by up to 30% through quick access to notes",
        "Delivered a functional note-taking app that enhances personal productivity by up to 19%, validated through user feedback",
        "Supports students and researchers in compiling study notes, references, and summaries in an easily accessible format, enhancing learning efficiency by around 37%"
      ],
      metrics: [
        { icon: <TrendingUp size={16} />, label: "30% Improvement", value: "Task Management" },
        { icon: <Users size={16} />, label: "19% Enhancement", value: "Productivity" },
        { icon: <FileText size={16} />, label: "37% Boost", value: "Learning Efficiency" }
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage", "PWA"],
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and problem-solving skills
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-primary/20 hover-glow transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
                        <Badge 
                          variant="outline" 
                          className={`border-${project.color} text-${project.color}`}
                        >
                          {project.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                      <p className="text-lg text-foreground leading-relaxed">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline" 
                            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Key Achievements:</h4>
                      <div className="space-y-3">
                        {project.achievements.map((achievement, achIndex) => (
                          <div 
                            key={achIndex}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-primary/5 transition-colors"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-glow"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Metrics Sidebar */}
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-xl">
                      <h4 className="font-semibold mb-4 text-primary">Impact Metrics</h4>
                      <div className="space-y-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div 
                            key={metricIndex}
                            className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                          >
                            <div className="text-primary">
                              {metric.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{metric.label}</div>
                              <div className="text-xs text-muted-foreground">{metric.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="glass-card p-6 rounded-xl">
                      <h4 className="font-semibold mb-4 text-primary">Project Stats</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status</span>
                          <Badge variant="outline" className="border-success text-success">
                            Completed
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category</span>
                          <span className="text-foreground font-medium">
                            {index === 0 ? "AI/ML" : index === 1 ? "Web App" : "Productivity"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Impact</span>
                          <span className="text-primary font-medium">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new innovative projects. Check back for updates or follow my GitHub for the latest developments.
            </p>
            <Button 
              onClick={() => window.open('https://github.com/BhavishyaA516', '_blank')}
              className="btn-neon text-primary-foreground font-semibold px-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Follow Bhavishya Ambati on GitHub to see more projects and contributions"
              role="button"
              tabIndex={0}
            >
              <Github size={20} className="mr-2" aria-hidden="true" />
              Follow on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;