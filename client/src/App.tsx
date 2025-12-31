import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import CapabilitiesPage from "@/pages/capabilities";
import UseCasesPage from "@/pages/use-cases";
import GovernmentPage from "@/pages/government";
import SecurityPage from "@/pages/security";
import CaseStudiesPage from "@/pages/case-studies";
import PilotPage from "@/pages/pilot";
import TeamPage from "@/pages/team";
import ContactPage from "@/pages/contact";
import PrivacyPage from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/capabilities" component={CapabilitiesPage} />
      <Route path="/use-cases" component={UseCasesPage} />
      <Route path="/government" component={GovernmentPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/pilot" component={PilotPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
