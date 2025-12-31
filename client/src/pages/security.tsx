import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Database, Eye, Server, Cloud, GitBranch, Key, FileCheck, AlertTriangle } from "lucide-react";

const securityAreas = [
  {
    title: "Data Security",
    icon: Lock,
    items: [
      "End-to-end encryption (AES-256)",
      "Encryption at rest and in transit",
      "Secure key management",
      "Data masking and tokenization",
    ],
  },
  {
    title: "Privacy & Compliance",
    icon: Shield,
    items: [
      "GDPR / IT Act 2000 compliance",
      "Data minimization principles",
      "Consent management",
      "Right to erasure support",
    ],
  },
  {
    title: "Infrastructure Security",
    icon: Server,
    items: [
      "VPC isolation",
      "Web Application Firewall (WAF)",
      "DDoS protection",
      "Intrusion detection systems",
    ],
  },
  {
    title: "Access Control",
    icon: Key,
    items: [
      "Role-based access control (RBAC)",
      "Multi-factor authentication",
      "Single sign-on (SSO)",
      "API key management",
    ],
  },
  {
    title: "Monitoring & Audit",
    icon: Eye,
    items: [
      "Real-time security monitoring",
      "Complete audit trails",
      "Anomaly detection",
      "Incident response automation",
    ],
  },
  {
    title: "Compliance Reporting",
    icon: FileCheck,
    items: [
      "Automated compliance checks",
      "Regular security assessments",
      "Vulnerability scanning",
      "Penetration testing",
    ],
  },
];

const deploymentOptions = [
  { title: "On-Premises", description: "Full control within your data center with air-gapped deployment options", icon: Server },
  { title: "Government VPC / Cloud", description: "Secure government cloud deployment meeting all compliance requirements", icon: Cloud },
  { title: "Hybrid", description: "Flexible deployment combining on-prem and cloud based on data sensitivity", icon: GitBranch },
];

export default function SecurityPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-security">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-security-page-title">
            Security & Compliance
          </h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security built into every solution
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {securityAreas.map((area) => (
            <Card key={area.title}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Deployment Options</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {deploymentOptions.map((option) => (
                <div key={option.title} className="flex items-start gap-4 p-4 rounded-lg bg-background border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{option.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
