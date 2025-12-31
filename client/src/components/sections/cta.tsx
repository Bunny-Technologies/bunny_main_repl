import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserCheck, MapPin, Calendar, TrendingUp } from "lucide-react";
import qrCodeImage from "@assets/WhatsApp_Image_2025-12-31_at_17.15.11_(1)_1767182518083.jpeg";

const steps = [
  { step: 1, title: "Nominate Nodal Officer", description: "Identify your project champion", icon: UserCheck },
  { step: 2, title: "Select Pilot Locations", description: "Choose 3 initial sites", icon: MapPin },
  { step: 3, title: "Schedule Kickoff", description: "Plan our first meeting", icon: Calendar },
  { step: 4, title: "Evaluate & Scale", description: "Measure results and expand", icon: TrendingUp },
];

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10" data-testid="section-cta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-cta-title">
            Let's Start Your Pilot Journey
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-cta-subtitle">
            Four simple steps to transform your operations
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12" data-testid="grid-steps">
          {steps.map((item) => (
            <Card key={item.step} className="relative overflow-visible" data-testid={`card-step-${item.step}`}>
              <CardContent className="p-6 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold" data-testid={`badge-step-${item.step}`}>
                  {item.step}
                </div>
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-primary/10 mb-4 mt-2">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1" data-testid={`text-step-title-${item.step}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-step-desc-${item.step}`}>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/pilot">
            <Button size="lg" className="bg-accent text-accent-foreground" data-testid="button-cta-pilot">
              Start a Pilot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" data-testid="button-cta-contact">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="max-w-xl mx-auto" data-testid="cta-info-card">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
                The only AI + IoT platform that guarantees measurable outcomes through our proven Pilot-to-Scale methodology.
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div className="h-16 w-16 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0" data-testid="qr-code">
                  <img src={qrCodeImage} alt="Scan to visit our knowledge base" className="h-full w-full object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-muted-foreground" data-testid="text-qr-label">Scan to visit our</p>
                  <p className="font-semibold" data-testid="text-qr-title">Knowledge Base</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
