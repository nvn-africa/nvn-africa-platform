import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Globe, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90">
              Join the movement or get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Join NVN */}
            <Card className="mb-12 border-2 bg-gradient-accent text-accent-foreground">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">Ready to Join NVN Africa?</h2>
                <p className="text-xl mb-6 text-accent-foreground/90">
                  Become part of Africa's largest digital volunteer network and start making a difference in your community today.
                </p>
                <p className="text-accent-foreground/90 mb-6">
                  Registration and onboarding details will be available once the NVN Africa platform launches in your country. 
                  Stay tuned for updates on rollout phases and registration opening dates.
                </p>
                <Button size="lg" variant="secondary" className="font-semibold">
                  Coming Soon - Join Waitlist
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Address */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-2">
                    <strong>Address:</strong>
                  </p>
                  <p className="text-muted-foreground">
                    Kwame Nkrumah House<br />
                    Abuja, Nigeria
                  </p>
                </CardContent>
              </Card>

              {/* Program Oversight */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-accent-foreground" />
                    </div>
                    Program Oversight
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-2">
                    <strong>Managed By:</strong>
                  </p>
                  <p className="text-muted-foreground">
                    NAMYO Volunteer Network (NVN)<br />
                    Under NAMYO Africa Regional Office
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Online Resources */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent-foreground" />
                  </div>
                  Online Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-4 bg-background rounded-lg border">
                    <div>
                      <h4 className="font-bold mb-1">NVN Africa Website</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Official website for the NAMYO Volunteer Network Africa
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.nvnafrica.com" target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-4 bg-background rounded-lg border">
                    <div>
                      <h4 className="font-bold mb-1">NAMYO Global</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Learn about our parent organization and global initiatives
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.namyouth.org" target="_blank" rel="noopener noreferrer">
                          Visit NAMYO
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* General Inquiries */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">General Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-4">
                  For questions about volunteer opportunities, partnerships, media inquiries, or general information about NVN Africa:
                </p>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>📧 <strong>Email:</strong> info@nvnafrica.com</p>
                  <p>📞 <strong>Phone:</strong> Contact details coming soon</p>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-primary-foreground/90">
                    <strong>Note:</strong> As NVN Africa rolls out across the continent in phases, response times and 
                    available contact methods may vary by region. We appreciate your patience as we expand our operations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Inquiries */}
            <Card className="mt-8 bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Partnership Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Interested in partnering with NVN Africa? We welcome collaborations with:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Government agencies and ministries</li>
                  <li>• NGOs and civil society organizations</li>
                  <li>• Corporate partners for CSR initiatives</li>
                  <li>• Educational institutions</li>
                  <li>• International development organizations</li>
                  <li>• Technology and fintech companies</li>
                </ul>
                <Button variant="default">
                  Partnership Inquiries
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
