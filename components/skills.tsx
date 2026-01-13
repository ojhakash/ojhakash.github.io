const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["ReactJS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Django", "FastAPI"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "Nginx"],
  },
  {
    title: "Architecture",
    skills: ["Microservices", "Kafka", "SSO", "CI/CD"],
  },
  {
    title: "AI/ML",
    skills: ["LangChain", "LangGraph"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">04.</span>
          Skills & Technologies
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
