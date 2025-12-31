import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Clock, Users } from "lucide-react";
import { CASE_STUDIES } from "@shared/schema";

const additionalCaseStudies = [
  {
    id: 5,
    client: "District Administration",
    title: "Citizen Grievance Portal",
    description: "AI-powered grievance classification and routing system with automated escalation",
    outcomes: ["60% faster resolution", "Automated categorization", "Citizen satisfaction up 40%"],
  },
  {
    id: 6,
    client: "Water Utility Board",
    title: "Smart Water Management",
    description: "IoT-based water distribution monitoring with leak detection and demand prediction",
    outcomes: ["30% reduction in water loss", "Real-time monitoring", "Predictive maintenance"],
  },
];

const allCaseStudies = [...CASE_STUDIES, ...additionalCaseStudies];

export default function CaseStudiesPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-case-studies">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-case-studies-page-title">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world implementations delivering measurable impact
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="text-center bg-gradient-to-br from-primary/10 to-transparent border-0">
            <CardContent className="p-6">
              <TrendingUp className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-accent/10 to-transparent border-0">
            <CardContent className="p-6">
              <Clock className="h-6 w-6 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold text-accent">70%</p>
              <p className="text-sm text-muted-foreground">Avg TAT Reduction</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-primary/10 to-transparent border-0">
            <CardContent className="p-6">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-primary">10M+</p>
              <p className="text-sm text-muted-foreground">Citizens Impacted</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-accent/10 to-transparent border-0">
            <CardContent className="p-6">
              <CheckCircle className="h-6 w-6 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold text-accent">95%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allCaseStudies.map((study) => (
            <Card key={study.id} className="hover-elevate transition-all" data-testid={`card-case-study-${study.id}`}>
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit mb-2">{study.client}</Badge>
                <CardTitle className="text-lg">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{study.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Key Outcomes</p>
                  <ul className="space-y-1.5">
                    {study.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
