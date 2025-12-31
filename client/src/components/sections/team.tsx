import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User } from "lucide-react";
import { TEAM_MEMBERS } from "@shared/schema";

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-team-title">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Experienced leaders driving innovation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.id} className={member.isFounder ? "md:col-span-1 border-primary/20" : ""}>
              <CardContent className="p-6 text-center">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-muted mb-4">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                {member.isFounder && (
                  <Badge className="mb-2 bg-primary/10 text-primary border-0">Founder</Badge>
                )}
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/team">
            <Button variant="outline" data-testid="button-view-team">
              Meet the Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
