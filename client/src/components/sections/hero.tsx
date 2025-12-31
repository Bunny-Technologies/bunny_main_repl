import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, Brain, Cpu, Cloud, Eye } from "lucide-react";
import { CONTACT_INFO } from "@shared/schema";
import { BunnyLogo } from "@/components/logo";
import qrCodeImage from "@assets/WhatsApp_Image_2025-12-31_at_17.15.11_(1)_1767182518083.jpeg";
import innovationImage from "@assets/generated_images/futuristic_ai_iot_network_sphere.png";

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
                <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Bunny</span>{" "}
                <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Innovations</span>
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

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="relative" data-testid="hero-innovation-image">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-500/30 via-primary/20 to-accent/30 blur-3xl"></div>
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-green-500/30 shadow-2xl">
                <img src={innovationImage} alt="AI and IoT Innovation" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="relative" data-testid="hero-info-card">
              <div className="relative rounded-2xl border bg-card/90 backdrop-blur p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0" data-testid="qr-code">
                    <img src={qrCodeImage} alt="Scan to visit our knowledge base" className="h-full w-full object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-muted-foreground" data-testid="text-qr-label">Scan to visit our</p>
                    <p className="font-semibold" data-testid="text-qr-title">Knowledge Base</p>
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
