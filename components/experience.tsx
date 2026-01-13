const experiences = [
  {
    title: "Senior Software Consultant",
    company: "Verizon",
    location: "Hyderabad",
    period: "September 2025 - December 2025",
    description:
      "Global telecommunications leader delivering wireless, broadband, and digital services to consumers and enterprises worldwide.",
    achievements: [
      "Contributed to SDN control-plane services, supporting network automation, configuration workflows, and system reliability improvements",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "LivSYT",
    location: "Hyderabad",
    period: "December 2024 - September 2025",
    description:
      "AI-driven construction management software enhancing on-site productivity.",
    achievements: [
      "Designed audit tables with pgBench benchmarking, achieving 2x improvement in query execution speed",
      "Developed 50+ complex SQL queries, improving execution time by 60% for datasets exceeding 10M records",
      "Optimized dashboard analytics, reducing response latency by 83% (60s to 10s) for 500+ active users",
      "Implemented unit test architecture covering 100% of critical business logic, reducing bugs by 30%",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Omnifi",
    location: "Kolkata",
    period: "June 2023 - October 2024",
    description:
      "Lending SaaS company helping financial institutions serve digital-native customers.",
    achievements: [
      "Optimized codebase, improving application performance by 20% through strategic refactoring",
      "Enhanced system scalability by 30% implementing microservices and cloud technologies",
      "Implemented Redis caching, reducing database query times by 40%",
      "Adopted event-driven architecture (Kafka) for real-time data processing",
    ],
  },
  {
    title: "Software Engineer",
    company: "Janio Asia",
    location: "Remote",
    period: "January 2021 - May 2023",
    description:
      "Singapore-based logistics solutions provider specializing in cross-border e-commerce.",
    achievements: [
      "Engineered high-performance Django REST API for merchant portal with real-time parcel tracking",
      "Architected PostgreSQL schemas for logistics operations and large-scale transaction handling",
      "Optimized API to handle 50,000+ daily transactions, reducing query load by 25%",
      "Achieved 99.9% system uptime through proactive issue mitigation",
    ],
  },
  {
    title: "Software Engineer",
    company: "Emproto Technologies",
    location: "Bangalore",
    period: "May 2019 - December 2020",
    description: "Healthcare and fintech solutions development.",
    achievements: [
      "Developed Phable healthcare platform (Node.js/React) supporting 10,000+ patients and doctors",
      "Built secure RESTful APIs integrating IoT medical devices for 5,000+ medical records",
      "Designed API microservices for FundsCorner India using Python (Flask) and AWS Lambda",
      "Achieved 40% reduction in API response times through PostgreSQL and Redis optimization",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Prackr",
    location: "Bangalore",
    period: "July 2017 - April 2019",
    description: "Task management application development.",
    achievements: [
      "Developed full-stack Task Management app (Node.js, Express, MongoDB, React, Redux)",
      "Built React Native mobile version, increasing user engagement by 40%",
      "Scaled to 10,000+ concurrent users using Nginx and AWS Auto Scaling Groups",
      "Designed RESTful APIs improving response times by 30% with 99.9% uptime",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">02.</span>
          Where I&apos;ve Worked
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-foreground -translate-x-1/2" />

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.title}{" "}
                      <span className="text-muted-foreground">@</span>{" "}
                      <span className="text-foreground">{exp.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {exp.period} &middot; {exp.location}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-foreground mt-1.5 flex-shrink-0">
                          &rsaquo;
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
