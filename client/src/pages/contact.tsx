import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, Globe, QrCode, MessageSquare, Loader2 } from "lucide-react";
import { CONTACT_INFO, contactFormSchema, type ContactForm } from "@shared/schema";

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data);
  };

  return (
    <div className="py-16 md:py-24" data-testid="page-contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4" data-testid="text-contact-page-title">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">
            Let's discuss how we can help transform your operations
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card data-testid="card-contact-form">
            <CardHeader>
              <CardTitle data-testid="text-form-title">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-contact">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your organization"
                              {...field}
                              data-testid="input-organization"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 XXXXX XXXXX"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirements..."
                            className="min-h-32"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground" 
                    disabled={mutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card data-testid="card-contact-info">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4" data-testid="text-contact-info-title">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-3 hover-elevate p-2 rounded-lg -m-2" data-testid="link-phone">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <span className="text-sm text-muted-foreground">
                        {CONTACT_INFO.phone}
                      </span>
                    </div>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 hover-elevate p-2 rounded-lg -m-2" data-testid="link-email">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <span className="text-sm text-muted-foreground">
                        {CONTACT_INFO.email}
                      </span>
                    </div>
                  </a>
                  <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover-elevate p-2 rounded-lg -m-2" data-testid="link-website">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Website</p>
                      <span className="text-sm text-muted-foreground">
                        bunnyinnovations.net
                      </span>
                    </div>
                  </a>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover-elevate p-2 rounded-lg -m-2" data-testid="link-whatsapp">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <MessageSquare className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <span className="text-sm text-muted-foreground">
                        Chat with us on WhatsApp
                      </span>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-point-of-contact">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4" data-testid="text-poc-title">Point of Contact</h3>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted" data-testid="avatar-poc">
                    <span className="text-xl font-bold text-muted-foreground">VT</span>
                  </div>
                  <div>
                    <p className="font-semibold" data-testid="text-poc-name">{CONTACT_INFO.name}</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-poc-title-role">{CONTACT_INFO.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0" data-testid="card-qr-code">
              <CardContent className="p-6 text-center">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/50 mb-4" data-testid="qr-placeholder">
                  <QrCode className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="font-medium" data-testid="text-qr-title">Scan to visit our Knowledge Base</p>
                <p className="text-sm text-muted-foreground" data-testid="text-qr-description">Quick access to resources and documentation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
