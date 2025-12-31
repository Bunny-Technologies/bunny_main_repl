import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Target, FileText, DollarSign, ArrowRight, Rocket } from "lucide-react";

const scopeItems = [
  "Define pilot objectives and success criteria",
  "Identify data sources and integration points",
  "Select pilot locations (recommended: 3 sites)",
  "Assign nodal officers and stakeholders",
  "Establish communication and reporting cadence",
];

const dataSources = [
  "CCTV feeds (if applicable)",
  "Existing sensor data",
  "Legacy system APIs",
  "Document repositories",
  "Third-party data sources",
];

const successMetrics = [
  "Turnaround time reduction",
  "Detection accuracy improvement",
  "Cost savings quantification",
  "User satisfaction scores",
  "System uptime and reliability",
];

const timeline = [
  { week: "Week 1-2", phase: "Setup", tasks: ["Environment provisioning", "Data pipeline setup", "Integration testing", "Team onboarding"] },
  { week: "Week 3-4", phase: "Development", tasks: ["Core feature development", "Model training/fine-tuning", "User interface creation", "Initial testing"] },
  { week: "Week 5-6", phase: "Pilot Complete", tasks: ["User acceptance testing", "Performance optimization", "Documentation", "Pilot evaluation"] },
];

const commercialTerms = {
  pilot: [
    "Fixed-price pilot engagement",
    "Defined scope and deliverables",
    "No hidden costs",
    "Knowledge transfer included",
  ],
  scaling: [
    "Usage-based or subscription model",
    "Volume discounts available",
    "Support and maintenance included",
    "Flexible contract terms",
  ],
};

export default function PilotPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-pilot">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Rocket className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-pilot-page-title">
            Pilot Proposal Template
          </h1>
          <p className="text-xl text-muted-foreground">
            Start small, prove value, then scale with confidence
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle>Scope Definition</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {scopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Data Sources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {dataSources.map((source) => (
                    <Badge key={source} variant="secondary" className="text-xs">
                      {source}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  <CardTitle className="text-base">Success Metrics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {successMetrics.map((metric) => (
                    <Badge key={metric} variant="outline" className="text-xs">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>Timeline</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {timeline.map((phase, i) => (
                <div key={phase.week} className="relative">
                  <Badge variant="secondary" className="mb-3">{phase.week}</Badge>
                  <h4 className="font-semibold mb-2">{phase.phase}</h4>
                  <ul className="space-y-1.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 text-muted-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Commercial Terms</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-background border">
                <h4 className="font-semibold mb-3">Pilot Model</h4>
                <ul className="space-y-2">
                  {commercialTerms.pilot.map((term) => (
                    <li key={term} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-background border">
                <h4 className="font-semibold mb-3">Scaling Model</h4>
                <ul className="space-y-2">
                  {commercialTerms.scaling.map((term) => (
                    <li key={term} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground" data-testid="button-pilot-contact">
              Start Your Pilot Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
