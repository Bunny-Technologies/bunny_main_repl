import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Brain, Sparkles, Database, Container, Shield } from "lucide-react";
import { TECH_STACK } from "@shared/schema";

const stackSections = [
  { title: "Cloud Platforms", icon: Cloud, items: TECH_STACK.cloud, color: "bg-blue-500/10 text-blue-600" },
  { title: "Agentic/AI", icon: Brain, items: TECH_STACK.agenticAI, color: "bg-purple-500/10 text-purple-600" },
  { title: "GenAI Platforms", icon: Sparkles, items: TECH_STACK.genAIPlatforms, color: "bg-pink-500/10 text-pink-600" },
  { title: "Data Pipelines", icon: Database, items: TECH_STACK.dataPipelines, color: "bg-green-500/10 text-green-600" },
  { title: "MLOps & Vector DB", icon: Container, items: TECH_STACK.mlOps, color: "bg-orange-500/10 text-orange-600" },
  { title: "Security", icon: Shield, items: TECH_STACK.security, color: "bg-red-500/10 text-red-600" },
];

export function CloudStack() {
  return (
    <section className="py-16 md:py-24" data-testid="section-cloud-stack">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
            <Cloud className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight" data-testid="text-cloud-title">Cloud & Data Stack</h2>
            <p className="text-muted-foreground">Enterprise-grade technology foundations</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackSections.map((section) => (
            <Card key={section.title} className="hover-elevate transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${section.color.split(" ")[0]}`}>
                    <section.icon className={`h-5 w-5 ${section.color.split(" ")[1]}`} />
                  </div>
                  <CardTitle className="text-base">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {section.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
