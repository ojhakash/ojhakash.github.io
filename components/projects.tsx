import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Merchant Portal API",
    description:
      "High-performance Django REST API handling 50,000+ daily transactions with real-time parcel tracking and role-based access control.",
    tech: ["Django", "PostgreSQL", "Redis", "REST API"],
    github: null,
    live: null,
  },
  {
    title: "Healthcare Platform",
    description:
      "Telemedicine platform supporting 10,000+ patients and doctors with prescription tracking, IoT device integration, and real-time health monitoring.",
    tech: ["Node.js", "React", "MongoDB", "AWS"],
    github: null,
    live: null,
  },
  {
    title: "Task Management App",
    description:
      "Full-stack task management application with web and mobile clients, scaled to 10,000+ concurrent users with auto-scaling infrastructure.",
    tech: ["React", "React Native", "Node.js", "MongoDB"],
    github: null,
    live: null,
  },
  {
    title: "Digital Lending Platform",
    description:
      "Microservices-based lending operations platform with event-driven architecture, reducing API response times by 40%.",
    tech: ["Python", "Flask", "AWS Lambda", "PostgreSQL"],
    github: null,
    live: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">03.</span>
          Projects
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-muted-foreground/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
