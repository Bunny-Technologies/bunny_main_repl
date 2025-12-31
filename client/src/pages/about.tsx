import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Lightbulb, Zap, Users, Award, Globe } from "lucide-react";

const identity = [
  "A technology-first company focused on AI, IoT, and Cloud solutions",
  "Deep expertise in government and enterprise digital transformation",
  "Committed to delivering measurable business outcomes",
  "20+ years of combined experience in enterprise technology",
  "Track record of successful implementations across sectors",
];

const engagementModel = [
  { title: "Pilot-to-Scale", description: "Start small, prove value, then expand systematically", icon: Target },
  { title: "Flexible Deployment", description: "On-prem, cloud, or hybrid - your infrastructure, your choice", icon: Lightbulb },
  { title: "Rapid Iterations", description: "Agile delivery with continuous improvement and feedback", icon: Zap },
];

const values = [
  { title: "Customer-Centric", description: "Your success is our success", icon: Users },
  { title: "Excellence", description: "Quality in everything we deliver", icon: Award },
  { title: "Innovation", description: "Pushing boundaries with cutting-edge tech", icon: Globe },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-about-page-title">
            About Bunny Innovations
          </h1>
          <p className="text-xl text-muted-foreground">
            Building the future of intelligent systems for government and enterprise
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Identity</h2>
            <ul className="space-y-4">
              {identity.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations with intelligent automation that transforms operations, 
                enhances citizen services, and delivers tangible ROI through cutting-edge AI and IoT solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We believe technology should solve real problems and create measurable impact. 
                Every solution we build is designed with outcomes in mind, not just outputs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Engagement Model</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModel.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <Card key={item.title} className="bg-gradient-to-br from-accent/5 to-transparent border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
