import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Brain, Cloud, Database, Code, Eye, Cpu, Shield, LineChart } from "lucide-react";

const teamRoles = [
  { title: "Data Scientists", icon: Brain, count: "5+" },
  { title: "Data Engineers", icon: Database, count: "4+" },
  { title: "Cloud Architects", icon: Cloud, count: "3+" },
  { title: "ML Engineers", icon: LineChart, count: "4+" },
  { title: "Full Stack Developers", icon: Code, count: "6+" },
  { title: "Computer Vision Specialists", icon: Eye, count: "3+" },
  { title: "IoT Engineers", icon: Cpu, count: "4+" },
  { title: "Security Experts", icon: Shield, count: "2+" },
];

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Expertise</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-team-title">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            A dedicated team of seasoned professionals with deep expertise in AI, Cloud, and IoT technologies
          </p>
        </div>

        <Card className="mb-10">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Experienced Technology Professionals</h3>
                <p className="text-muted-foreground">Building innovative solutions across industries</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Our team brings together world-class expertise from leading technology companies and research institutions. 
              With decades of combined experience in enterprise AI, cloud infrastructure, and IoT deployments, 
              we deliver solutions that create real business impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamRoles.map((role, index) => (
                <div 
                  key={role.title} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  data-testid={`team-role-${index}`}
                >
                  <role.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{role.title}</p>
                    <p className="text-xs text-muted-foreground">{role.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Technical Experts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/team">
            <Button variant="outline" data-testid="button-view-team">
              Meet Our Leadership
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
