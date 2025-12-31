import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, CircleDot, Droplets, FileText, AlertTriangle, BarChart3, Shield, Users } from "lucide-react";

const useCases = [
  {
    title: "Smart Traffic Analytics",
    category: "Transportation",
    description: "AI-powered traffic monitoring, congestion prediction, and signal optimization for smarter urban mobility",
    icon: Activity,
    outcomes: ["40% congestion reduction", "Real-time monitoring", "Predictive routing"],
  },
  {
    title: "Road Health Monitoring",
    category: "Infrastructure",
    description: "Computer vision for pothole detection, road condition assessment, and automated maintenance prioritization",
    icon: CircleDot,
    outcomes: ["3x faster detection", "Automated prioritization", "25% cost savings"],
  },
  {
    title: "Flood Early Warning",
    category: "Disaster Management",
    description: "IoT sensor network with ML-based flood prediction and automated citizen alerts",
    icon: Droplets,
    outcomes: ["6-hour advance warnings", "95% prediction accuracy", "Zero casualties"],
  },
  {
    title: "Permit GenAI Bot",
    category: "Citizen Services",
    description: "Intelligent assistant for permit applications, status tracking, and citizen queries",
    icon: FileText,
    outcomes: ["80% TAT reduction", "24/7 availability", "90% resolution rate"],
  },
  {
    title: "Encroachment Detection",
    category: "Urban Planning",
    description: "Automated boundary violation detection using satellite imagery and computer vision",
    icon: AlertTriangle,
    outcomes: ["Real-time alerts", "Historical tracking", "Legal evidence"],
  },
  {
    title: "Revenue Analytics",
    category: "Finance",
    description: "AI-powered fraud detection and revenue optimization for government departments",
    icon: BarChart3,
    outcomes: ["30% fraud reduction", "Revenue leakage prevention", "Audit trails"],
  },
  {
    title: "Cyber Security Monitoring",
    category: "Security",
    description: "Continuous security monitoring with AI-based threat detection and response",
    icon: Shield,
    outcomes: ["Real-time threat detection", "Automated response", "Compliance reporting"],
  },
  {
    title: "Citizen Feedback Analysis",
    category: "Governance",
    description: "NLP-based sentiment analysis of citizen feedback across multiple channels",
    icon: Users,
    outcomes: ["Sentiment tracking", "Issue categorization", "Priority identification"],
  },
];

export default function UseCasesPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-use-cases">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-use-cases-page-title">
            Use Cases
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world applications delivering measurable impact
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-semibold">{useCase.title}</h3>
                      <Badge variant="outline" className="text-xs">{useCase.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {useCase.outcomes.map((outcome) => (
                        <Badge key={outcome} variant="secondary" className="text-xs">
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
