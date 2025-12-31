import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Cloud, Eye, ArrowRight } from "lucide-react";
import { CAPABILITIES } from "@shared/schema";

const iconMap = {
  brain: Brain,
  cpu: Cpu,
  cloud: Cloud,
  eye: Eye,
};

export function Capabilities() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-capabilities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-capabilities-title">What We Do</h2>
          <p className="text-lg text-muted-foreground" data-testid="text-capabilities-subtitle">
            Comprehensive AI, IoT, and Cloud solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-testid="grid-capabilities">
          {CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.icon as keyof typeof iconMap];
            return (
              <Card key={cap.id} className="group hover-elevate transition-all" data-testid={`card-capability-${cap.id}`}>
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10" data-testid={`icon-capability-${cap.id}`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid={`text-capability-title-${cap.id}`}>{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground" data-testid={`text-capability-desc-${cap.id}`}>{cap.description}</p>
                  <div className="flex flex-wrap gap-1.5" data-testid={`list-features-${cap.id}`}>
                    {cap.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs" data-testid={`badge-feature-${feature.toLowerCase().replace(/\s+/g, "-")}`}>
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/capabilities">
            <Button variant="outline" data-testid="button-view-capabilities">
              Explore All Capabilities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
