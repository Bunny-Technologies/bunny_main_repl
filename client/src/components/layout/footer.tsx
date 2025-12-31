import { Link } from "wouter";
import { Rabbit, Phone, Mail, Globe } from "lucide-react";
import { CONTACT_INFO } from "@shared/schema";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/government", label: "Government" },
  { href: "/security", label: "Security" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pilot", label: "Pilot" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card" data-testid="footer">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Rabbit className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Bunny Innovations</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Agentic AI, Cloud, and IoT solutions that deliver measurable outcomes.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-foreground">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  bunnyinnovations.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bunny Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
