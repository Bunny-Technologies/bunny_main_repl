import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Workflow, Database, MessageSquare, TrendingUp, Shield, Clock, Users } from "lucide-react";

const orchestration = [
  { name: "LangChain", description: "Framework for LLM applications" },
  { name: "CrewAI", description: "Multi-agent orchestration" },
  { name: "LlamaIndex", description: "Data framework for LLMs" },
];

const features = [
  { title: "Tool-use", description: "Agents that can use APIs, databases, and external tools", icon: Workflow },
  { title: "Memory Systems", description: "Persistent context across conversations and sessions", icon: Database },
  { title: "RAG", description: "Retrieval-augmented generation for accurate responses", icon: MessageSquare },
];

const applications = [
  { title: "Fraud & Risk Checks", description: "Automated risk assessment and anomaly detection" },
  { title: "Permit Bots", description: "Intelligent assistants for permit applications" },
  { title: "Incident Triage", description: "Automated incident classification and routing" },
  { title: "Citizen Service Assistants", description: "24/7 AI-powered citizen support" },
];

const outcomes = [
  { metric: "70%", label: "TAT Reduction", icon: Clock },
  { metric: "3x", label: "Detection Improvement", icon: Shield },
  { metric: "50%", label: "Operational Effort Reduction", icon: TrendingUp },
  { metric: "24/7", label: "Availability", icon: Users },
];

export function AgenticAI() {
  return (
    <section className="py-16 md:py-24" data-testid="section-agentic-ai">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight" data-testid="text-agentic-title">Agentic AI Deep-Dive</h2>
            <p className="text-muted-foreground">Intelligent agents that transform operations</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Agent Orchestration</h3>
                <div className="space-y-3">
                  {orchestration.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Core Features</h3>
                <div className="space-y-4">
                  {features.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Real-World Applications</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {applications.map((app) => (
                    <div key={app.title} className="p-4 rounded-lg border bg-card">
                      <h4 className="font-medium text-sm">{app.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{app.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Measurable Outcomes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {outcomes.map((item) => (
                    <div key={item.label} className="text-center p-4 rounded-lg bg-background/80">
                      <item.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-primary">{item.metric}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
