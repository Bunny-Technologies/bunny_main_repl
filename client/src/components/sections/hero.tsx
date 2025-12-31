import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, Brain, Cpu, Cloud, Eye } from "lucide-react";
import { CONTACT_INFO } from "@shared/schema";
import { BunnyLogo } from "@/components/logo";
import qrCodeImage from "@assets/WhatsApp_Image_2025-12-31_at_17.15.11_(1)_1767182518083.jpeg";

const capabilities = [
  { label: "Agentic AI", icon: Brain },
  { label: "IoT & Edge", icon: Cpu },
  { label: "Cloud & Data", icon: Cloud },
  { label: "Computer Vision", icon: Eye },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 lg:py-32" data-testid="section-hero">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 backdrop-blur" data-testid="badge-hero-tagline">
              <BunnyLogo size={20} />
              <span className="text-sm font-medium">AI + IoT Solutions</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" data-testid="text-hero-title">
                <span className="text-primary">Bunny</span> Innovations
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl" data-testid="text-hero-subtitle">
                Agentic AI, Cloud, and IoT that deliver <span className="font-semibold text-foreground">measurable outcomes</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2" data-testid="list-capabilities">
              {capabilities.map((cap) => (
                <Badge key={cap.label} variant="secondary" className="gap-1.5 px-3 py-1.5" data-testid={`badge-capability-${cap.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <cap.icon className="h-3.5 w-3.5" />
                  {cap.label}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3" data-testid="hero-cta-buttons">
              <Link href="/pilot">
                <Button size="lg" className="bg-accent text-accent-foreground" data-testid="button-hero-pilot">
                  Start a Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" data-testid="button-hero-whatsapp">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative" data-testid="hero-info-card">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl"></div>
              <div className="relative rounded-2xl border bg-card p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="h-24 w-24 rounded-lg overflow-hidden bg-white p-1" data-testid="qr-code">
                      <img src={qrCodeImage} alt="Scan to visit our knowledge base" className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground" data-testid="text-qr-label">Scan to visit our</p>
                    <p className="font-semibold" data-testid="text-qr-title">Knowledge Base</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                    <div className="text-center" data-testid="stat-experience">
                      <p className="text-2xl font-bold text-primary" data-testid="text-experience-value">20+</p>
                      <p className="text-xs text-muted-foreground" data-testid="text-experience-label">Years Experience</p>
                    </div>
                    <div className="text-center" data-testid="stat-projects">
                      <p className="text-2xl font-bold text-accent" data-testid="text-projects-value">50+</p>
                      <p className="text-xs text-muted-foreground" data-testid="text-projects-label">Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
