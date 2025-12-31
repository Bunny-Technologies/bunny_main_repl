import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Target, Puzzle, MessageSquare, Trophy } from "lucide-react";
import { WHY_BUNNY } from "@shared/schema";

const icons = [MapPin, Target, Puzzle, MessageSquare, Trophy];

export function WhyBunny() {
  return (
    <section className="py-16 md:py-24" data-testid="section-why-bunny">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4" data-testid="text-why-title">Why Bunny Innovations?</h2>
          <p className="text-lg text-muted-foreground">
            What sets us apart from the rest
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_BUNNY.map((item, i) => {
            const Icon = icons[i];
            return (
              <Card key={item.title} className="text-center hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
