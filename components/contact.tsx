import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">05.</span>
          Get In Touch
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi, feel free to reach out.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={18} />
              <Link
                href="mailto:akashojha35@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                akashojha35@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} />
              <span>Hyderabad, India</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/ojhakash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </Link>
            <Link
              href="https://linkedin.com/in/akash-ojha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
