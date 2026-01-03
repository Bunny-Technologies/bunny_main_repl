import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, Cloud, Database, Code, Eye, Cpu, Shield, LineChart, User, Mail, Phone } from "lucide-react";
import { CONTACT_INFO } from "@shared/schema";

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

const advisors = [
  {
    name: "AI Strategy Advisor",
    role: "AI/ML Strategy Lead",
    expertise: ["AI Strategy", "Machine Learning", "Research & Development"],
    experience: "Industry expert with deep expertise in AI/ML research and commercialization",
  },
  {
    name: "Government Technology Advisor",
    role: "Public Sector Lead",
    expertise: ["Government Procurement", "Public Policy", "Digital Governance"],
    experience: "Extensive experience in government technology programs and policy advisory",
  },
];

export default function TeamPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Expertise</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-team-page-title">
            Our Team
          </h1>
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

        <div className="grid gap-6 md:grid-cols-3 mb-12">
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

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Leadership</h2>
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-muted">
                  <User className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-2 bg-primary/10 text-primary border-0">Founder</Badge>
                  <h3 className="text-2xl font-bold">{CONTACT_INFO.name}</h3>
                  <p className="text-muted-foreground mb-4">{CONTACT_INFO.title}</p>
                  <p className="text-muted-foreground mb-6">
                    20+ years in enterprise technology, previously led major digital transformation initiatives
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    {["AI/ML Architecture", "Cloud Solutions", "Enterprise Technology", "Government IT"].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                      <Mail className="h-4 w-4" />
                      {CONTACT_INFO.email}
                    </a>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                      <Phone className="h-4 w-4" />
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Advisory Board</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {advisors.map((advisor, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-muted mb-4">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{advisor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{advisor.role}</p>
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {advisor.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{advisor.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
