import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { AgenticAI } from "@/components/sections/agentic-ai";
import { IoTCV } from "@/components/sections/iot-cv";
import { CloudStack } from "@/components/sections/cloud-stack";
import { Delivery } from "@/components/sections/delivery";
import { CaseStudies } from "@/components/sections/case-studies";
import { Government } from "@/components/sections/government";
import { WhyBunny } from "@/components/sections/why-bunny";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div data-testid="page-home">
      <Hero />
      <About />
      <Capabilities />
      <AgenticAI />
      <IoTCV />
      <CloudStack />
      <Delivery />
      <CaseStudies />
      <Government />
      <WhyBunny />
      <Team />
      <CTA />
    </div>
  );
}
