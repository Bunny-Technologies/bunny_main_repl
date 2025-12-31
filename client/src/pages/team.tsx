import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Linkedin } from "lucide-react";
import { TEAM_MEMBERS, CONTACT_INFO } from "@shared/schema";

const extendedTeamInfo = {
  1: {
    expertise: ["AI/ML Architecture", "Cloud Solutions", "Enterprise Technology", "Government IT"],
    experience: "20+ years in enterprise technology, previously led major digital transformation initiatives",
  },
  2: {
    expertise: ["AI Strategy", "Machine Learning", "Research & Development"],
    experience: "Industry expert with deep expertise in AI/ML research and commercialization",
  },
  3: {
    expertise: ["Government Procurement", "Public Policy", "Digital Governance"],
    experience: "Extensive experience in government technology programs and policy advisory",
  },
};

export default function TeamPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-team-page-title">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Experienced leaders driving innovation and delivering results
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-muted">
                  <User className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-2 bg-primary/10 text-primary border-0">Founder</Badge>
                  <h2 className="text-2xl font-bold">{CONTACT_INFO.name}</h2>
                  <p className="text-muted-foreground mb-4">{CONTACT_INFO.title}</p>
                  <p className="text-muted-foreground mb-6">
                    {extendedTeamInfo[1].experience}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    {extendedTeamInfo[1].expertise.map((skill) => (
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
          {TEAM_MEMBERS.filter(m => !m.isFounder).map((member) => {
            const info = extendedTeamInfo[member.id as keyof typeof extendedTeamInfo];
            return (
              <Card key={member.id}>
                <CardContent className="p-6 text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-muted mb-4">
                    <User className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {info?.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info?.experience}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
