import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Rocket, BarChart3, Scale, Server, Cloud, GitBranch } from "lucide-react";
import { DELIVERY_TIMELINE } from "@shared/schema";

const phaseIcons = [Search, Rocket, BarChart3, Scale];

const deploymentOptions = [
  { title: "On-Premises", description: "Full control within your data center", icon: Server },
  { title: "Gov-VPC / Cloud", description: "Secure government cloud deployment", icon: Cloud },
  { title: "Hybrid", description: "Best of both worlds approach", icon: GitBranch },
];

export function Delivery() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-delivery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-delivery-title">How We Deliver</h2>
          <p className="text-lg text-muted-foreground">
            Our proven Pilot-to-Scale methodology ensures successful outcomes
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {DELIVERY_TIMELINE.map((phase, i) => {
            const Icon = phaseIcons[i];
            return (
              <Card key={phase.phase} className="relative overflow-visible">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">{phase.week}</Badge>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
                {i < DELIVERY_TIMELINE.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
                )}
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-center mb-6">Deployment Options</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {deploymentOptions.map((option) => (
                <div key={option.title} className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{option.title}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
