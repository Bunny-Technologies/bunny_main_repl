import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Activity, CircleDot, Droplets, FileText, Shield, UserCheck, Database, MapPin, Lock, Eye, FileCheck } from "lucide-react";

const useCases = [
  { title: "Smart Traffic Analytics", description: "AI-powered traffic monitoring, congestion prediction, and signal optimization", icon: Activity },
  { title: "Road Health Monitoring", description: "Computer vision for pothole detection, road condition assessment, and maintenance planning", icon: CircleDot },
  { title: "Flood Early Warning", description: "IoT sensor network with ML-based flood prediction and automated citizen alerts", icon: Droplets },
  { title: "Permit GenAI Bot", description: "Intelligent assistant for permit applications, status tracking, and citizen queries", icon: FileText },
];

const securityFeatures = [
  { title: "Audit Trails", description: "Complete logging of all actions with immutable records", icon: Shield },
  { title: "RBAC", description: "Role-based access control with granular permissions", icon: UserCheck },
  { title: "Data Retention", description: "Configurable retention policies compliant with regulations", icon: Database },
  { title: "Data Localization", description: "In-country data storage meeting sovereignty requirements", icon: MapPin },
  { title: "Encryption", description: "End-to-end encryption at rest and in transit", icon: Lock },
  { title: "Access Monitoring", description: "Real-time monitoring of all data access", icon: Eye },
];

const complianceStandards = [
  "IT Act 2000 Compliance",
  "MEITY Guidelines",
  "State Data Protection Policies",
  "NIC Security Standards",
  "CERT-In Requirements",
  "GIGW Compliance",
];

export default function GovernmentPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-government">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-government-page-title">
            Government & Civic Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            Purpose-built solutions for public sector digital transformation
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Key Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Security Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Compliance Standards</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {complianceStandards.map((standard) => (
                <Badge key={standard} variant="secondary" className="px-4 py-2">
                  {standard}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
