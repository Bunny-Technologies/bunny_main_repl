import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CASE_STUDIES } from "@shared/schema";

export function CaseStudies() {
  return (
    <section className="py-16 md:py-24" data-testid="section-case-studies">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-cases-title">Proven Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            Real-world implementations delivering measurable impact
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <Card key={study.id} className="hover-elevate transition-all" data-testid={`card-case-study-${study.id}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <Badge variant="secondary">{study.client}</Badge>
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{study.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Outcomes:</p>
                  <ul className="space-y-1.5">
                    {study.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button variant="outline" data-testid="button-view-cases">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
