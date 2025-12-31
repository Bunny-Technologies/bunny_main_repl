import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Activity, CircleDot, Droplets, FileText, Shield, UserCheck, Database, MapPin } from "lucide-react";

const useCases = [
  { title: "Smart Traffic Analytics", description: "AI-powered traffic monitoring, congestion prediction, and signal optimization", icon: Activity },
  { title: "Road Health Monitoring", description: "Computer vision for pothole detection, road condition assessment, and maintenance planning", icon: CircleDot },
  { title: "Flood Early Warning", description: "IoT sensor network with ML-based flood prediction and automated citizen alerts", icon: Droplets },
  { title: "Permit GenAI Bot", description: "Intelligent assistant for permit applications, status tracking, and citizen queries", icon: FileText },
];

const securityFeatures = [
  { title: "Audit Trails", description: "Complete logging of all actions", icon: Shield },
  { title: "RBAC", description: "Role-based access control", icon: UserCheck },
  { title: "Data Retention", description: "Configurable retention policies", icon: Database },
  { title: "Data Localization", description: "In-country data storage", icon: MapPin },
];

export function Government() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-government">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight" data-testid="text-gov-title">Government & Civic Use-Cases</h2>
            <p className="text-muted-foreground">Purpose-built solutions for public sector</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-center mb-6">Security Features for Government Clients</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-4 rounded-lg bg-background border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
