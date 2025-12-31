import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_INFO } from "@shared/schema";

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24" data-testid="page-privacy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 text-center" data-testid="text-privacy-page-title">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Last updated: January 2025
          </p>

          <Card>
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Bunny Innovations ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide when you:</p>
              <ul>
                <li>Fill out a contact form</li>
                <li>Request a pilot consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Organization name</li>
                <li>Project requirements</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, 
                including information about your web browser, IP address, time zone, and some of the cookies 
                that are installed on your device.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you relevant information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as required by law or as necessary to provide our services.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                for which it was collected and to comply with legal obligations.
              </p>

              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2>8. Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable cookies 
                through your browser settings, but this may affect some functionality.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: {CONTACT_INFO.email}</li>
                <li>Phone: {CONTACT_INFO.phone}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
