const partners = [
  { name: "CODILAR", subtitle: "Technology Solutions", color: "text-green-600" },
  { name: "MINDTECK", subtitle: "IT Services", color: "text-blue-600" },
  { name: "LITTRULY", subtitle: "Digital Innovation", color: "text-purple-600" },
  { name: "Government Partners", subtitle: "Public Sector", color: "text-orange-500" },
];

export function TrustedBy() {
  return (
    <section className="bg-muted/30 py-16" data-testid="section-trusted-by">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl font-bold md:text-3xl" data-testid="text-trusted-title">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-trusted-subtitle">
            We partner with forward-thinking companies and government organizations to deliver measurable AI and IoT outcomes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" data-testid="list-partners">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-card rounded-xl p-6 text-center shadow-sm border"
              data-testid={`card-partner-${index}`}
            >
              <h3 className={`text-lg md:text-xl font-bold ${partner.color}`}>
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{partner.subtitle}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10" data-testid="text-trusted-footer">
          Join 50+ organizations that trust Bunny Innovations for their AI and IoT transformation
        </p>
      </div>
    </section>
  );
}
