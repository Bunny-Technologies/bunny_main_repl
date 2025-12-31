import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Camera, Radio, Navigation, Plane, Eye, CircleDot, AlertTriangle, Droplets, Activity } from "lucide-react";

const dataSources = [
  { name: "CCTV", icon: Camera, description: "Video feeds and surveillance systems" },
  { name: "Sensors", icon: Radio, description: "Environmental and industrial sensors" },
  { name: "GPS", icon: Navigation, description: "Location and tracking data" },
  { name: "Drones", icon: Plane, description: "Aerial imaging and inspection" },
];

const applications = [
  { title: "Pothole Detection", description: "AI-powered road surface analysis", icon: CircleDot },
  { title: "Encroachment Alerts", description: "Automated boundary violation detection", icon: AlertTriangle },
  { title: "Water-logging Risk", description: "Predictive flood zone mapping", icon: Droplets },
  { title: "Traffic Heatmaps", description: "Real-time congestion visualization", icon: Activity },
];

const benefits = [
  "Edge + Cloud processing for real-time insights",
  "Custom solutions tailored to your infrastructure",
  "Works with existing cameras and sensors",
  "Scalable from pilot to city-wide deployment",
];

export function IoTCV() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-iot-cv">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
            <Cpu className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight" data-testid="text-iot-title">IoT/Edge + CV Analytics</h2>
            <p className="text-muted-foreground">Intelligent insights from physical world data</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Data Sources</h3>
              <div className="space-y-3">
                {dataSources.map((source) => (
                  <div key={source.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                      <source.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{source.name}</p>
                      <p className="text-xs text-muted-foreground">{source.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Applications</h3>
              <div className="space-y-3">
                {applications.map((app) => (
                  <div key={app.title} className="flex items-center gap-3 p-3 rounded-lg border">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <app.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{app.title}</p>
                      <p className="text-xs text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-medium">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
