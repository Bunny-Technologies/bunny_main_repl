import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Cloud, Eye, Workflow, Database, MessageSquare, Camera, Radio, Navigation, Sparkles, Container, Shield } from "lucide-react";

const capabilities = [
  {
    id: "agentic-ai",
    title: "Agentic AI & Automation",
    icon: Brain,
    description: "Intelligent agents that orchestrate complex workflows with advanced AI frameworks",
    features: ["Agent Orchestration", "Tool-use & Memory", "RAG Systems", "Autonomous Decision Making"],
    details: [
      { title: "LangChain", description: "Framework for building LLM applications" },
      { title: "CrewAI", description: "Multi-agent orchestration platform" },
      { title: "LlamaIndex", description: "Data framework for LLMs" },
    ],
  },
  {
    id: "iot-edge",
    title: "IoT & Edge Systems",
    icon: Cpu,
    description: "End-to-end IoT solutions from sensors to cloud with real-time edge processing",
    features: ["Sensor Integration", "Edge Computing", "Real-time Analytics", "Device Management"],
    details: [
      { title: "CCTV & Video", description: "Video feeds and surveillance systems" },
      { title: "Sensors", description: "Environmental and industrial sensors" },
      { title: "GPS & Location", description: "Tracking and geolocation services" },
    ],
  },
  {
    id: "cloud-data",
    title: "Cloud & Data Engineering",
    icon: Cloud,
    description: "Scalable cloud infrastructure and modern data pipelines on AWS, GCP, and Azure",
    features: ["Cloud Architecture", "Data Pipelines", "MLOps", "Infrastructure as Code"],
    details: [
      { title: "Multi-Cloud", description: "AWS, GCP, Azure expertise" },
      { title: "Data Platforms", description: "Databricks, DBT, Kafka, Airflow" },
      { title: "MLOps", description: "MLflow, Docker, Kubernetes" },
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Digital Twins",
    icon: Eye,
    description: "Advanced CV analytics and digital twin solutions for physical world insights",
    features: ["Object Detection", "Video Analytics", "3D Modeling", "Real-time Monitoring"],
    details: [
      { title: "Detection", description: "Object and anomaly detection" },
      { title: "Analytics", description: "Video stream processing" },
      { title: "Digital Twins", description: "Physical-digital mapping" },
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-capabilities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-capabilities-page-title">
            Our Capabilities
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI, IoT, and Cloud solutions tailored to your needs
          </p>
        </div>

        <div className="space-y-12">
          {capabilities.map((cap, index) => (
            <Card key={cap.id} className={index % 2 === 0 ? "bg-gradient-to-r from-primary/5 to-transparent border-0" : "bg-gradient-to-r from-accent/5 to-transparent border-0"}>
              <CardContent className="p-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <cap.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">{cap.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{cap.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.features.map((feature) => (
                        <Badge key={feature} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {cap.details.map((detail) => (
                      <div key={detail.title} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                        <div>
                          <h4 className="font-semibold">{detail.title}</h4>
                          <p className="text-sm text-muted-foreground">{detail.description}</p>
                        </div>
                      </div>
                    ))}
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
