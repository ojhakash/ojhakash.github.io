export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">01.</span>
          About Me
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-[3fr,2fr] gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software engineer who enjoys building products that
              make a difference. My journey in tech started with a curiosity
              about how things work, and that curiosity still drives me today.
            </p>
            <p>
              Over the past 8 years, I&apos;ve had the privilege of working
              across diverse industries&mdash;from logistics platforms handling
              50,000+ daily transactions to construction management software
              serving 500+ active users. I&apos;ve seen firsthand how
              well-architected systems can transform business operations.
            </p>
            <p>
              Currently at Verizon, I work on software-defined networking
              solutions that power large-scale telecommunications
              infrastructure. I focus on building systems that are not just
              functional, but maintainable and scalable.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or mentoring fellow
              developers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold mb-1">8+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold mb-1">6</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold mb-1">18+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
