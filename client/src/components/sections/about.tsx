import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Zap, CheckCircle } from "lucide-react";

const identity = [
  "A technology-first company focused on AI, IoT, and Cloud solutions",
  "Deep expertise in government and enterprise digital transformation",
  "Committed to delivering measurable business outcomes",
];

const engagementModel = [
  { title: "Pilot-to-Scale", description: "Start small, prove value, then expand", icon: Target },
  { title: "Flexible Deployment", description: "On-prem, cloud, or hybrid - your choice", icon: Lightbulb },
  { title: "Rapid Iterations", description: "Agile delivery with continuous improvement", icon: Zap },
];

export function About() {
  return (
    <section className="py-16 md:py-24" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-about-title">About Us</h2>
          <p className="text-lg text-muted-foreground" data-testid="text-about-subtitle">
            Building the future of intelligent systems for government and enterprise
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-transparent" data-testid="card-identity">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6" data-testid="text-identity-title">Our Identity</h3>
              <ul className="space-y-4" data-testid="list-identity">
                {identity.map((item, i) => (
                  <li key={i} className="flex gap-3" data-testid={`list-item-identity-${i}`}>
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t" data-testid="section-mission">
                <h4 className="font-semibold mb-2" data-testid="text-mission-title">Our Mission</h4>
                <p className="text-muted-foreground" data-testid="text-mission-description">
                  To empower organizations with intelligent automation that transforms operations, 
                  enhances citizen services, and delivers tangible ROI through cutting-edge AI and IoT solutions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-accent/5 to-transparent" data-testid="card-engagement">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6" data-testid="text-engagement-title">Engagement Model</h3>
              <div className="space-y-6" data-testid="list-engagement">
                {engagementModel.map((item, i) => (
                  <div key={item.title} className="flex gap-4" data-testid={`item-engagement-${i}`}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold" data-testid={`text-engagement-title-${i}`}>{item.title}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-engagement-desc-${i}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
