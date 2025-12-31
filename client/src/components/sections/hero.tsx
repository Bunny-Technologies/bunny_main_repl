import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Cpu, Cloud, Eye, Box } from "lucide-react";
import { BunnyLogo } from "@/components/logo";

const capabilities = [
  { label: "Agentic AI", icon: Brain, href: "/capabilities#agentic-ai" },
  { label: "IoT & Edge", icon: Cpu, href: "/capabilities#iot-edge" },
  { label: "Cloud & Data", icon: Cloud, href: "/capabilities#cloud-data" },
  { label: "Computer Vision", icon: Eye, href: "/use-cases#computer-vision" },
  { label: "Digital Twins", icon: Box, href: "/use-cases#digital-twins" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 lg:py-32" data-testid="section-hero">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 backdrop-blur mx-auto" data-testid="badge-hero-tagline">
              <BunnyLogo size={20} />
              <span className="text-sm font-medium">AI + IoT Solutions</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" data-testid="text-hero-title">
                <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Bunny</span>{" "}
                <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Innovations</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl" data-testid="text-hero-subtitle">
                Agentic AI, Cloud, and IoT that deliver <span className="font-semibold text-foreground">measurable outcomes</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center" data-testid="list-capabilities">
              {capabilities.map((cap) => (
                <Link key={cap.label} href={cap.href}>
                  <Badge variant="outline" className="gap-1.5 px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors" data-testid={`badge-capability-${cap.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <cap.icon className="h-3.5 w-3.5" />
                    {cap.label}
                  </Badge>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center" data-testid="hero-cta-buttons">
              <Link href="/pilot">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" data-testid="button-hero-pilot">
                  Start Your Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" data-testid="button-hero-case-studies">
                  View Case Studies
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground" data-testid="text-hero-stats">
              Reduce turnaround time by 60%, improve detection accuracy by 40%, and cut manual effort by 75% with our proven AI + IoT solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
