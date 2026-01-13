import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[1fr,300px] gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Akash Ojha
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              I build things for the web.
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Senior Software Engineer with 8+ years of experience building
              scalable applications and optimizing performance across
              telecommunications, construction, logistics, and finance domains.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#experience">View my work</Link>
              </Button>
            </div>

            <div className="flex items-center gap-5">
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
              <Link
                href="mailto:akashojha35@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 -z-10 blur-2xl opacity-50" />
              <Image
                src="/akash.jpg"
                alt="Akash Ojha"
                fill
                className="rounded-full object-cover border-2 border-border"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
