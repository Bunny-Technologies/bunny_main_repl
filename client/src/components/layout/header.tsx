import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@shared/schema";
import { BunnyLogo } from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/government", label: "Government" },
  { href: "/security", label: "Security" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pilot", label: "Pilot" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-testid="header">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <BunnyLogo size={40} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-primary">BUNNY</span>
            <span className="text-sm font-bold text-green-600">INNOVATIONS</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" data-testid="nav-desktop" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className={location === link.href ? "bg-muted" : ""}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                aria-current={location === link.href ? "page" : undefined}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" data-testid="button-whatsapp">
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <Link href="/pilot">
            <Button size="sm" className="bg-accent text-accent-foreground" data-testid="button-start-pilot">
              Start a Pilot
            </Button>
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col gap-4 pt-8">
              <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsOpen(false)} data-testid="link-mobile-logo">
                <BunnyLogo size={40} />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-primary">BUNNY</span>
                  <span className="text-sm font-bold text-green-600">INNOVATIONS</span>
                </div>
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${location === link.href ? "bg-muted" : ""}`}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="link-mobile-whatsapp">
                  <Button variant="outline" className="w-full" data-testid="button-mobile-whatsapp">
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
                <Link href="/pilot" onClick={() => setIsOpen(false)} data-testid="link-mobile-start-pilot">
                  <Button className="w-full bg-accent text-accent-foreground" data-testid="button-mobile-start-pilot">
                    Start a Pilot
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
