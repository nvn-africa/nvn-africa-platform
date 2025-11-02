import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Wrench, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-primary-foreground/90">
              Supporting volunteers with funding, technical expertise, and secure payment solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Funding Sources */}
            <Card className="mb-8 border-2 hover:shadow-medium transition-all">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Funding Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  NVN Africa provides multiple funding channels to support volunteer projects and initiatives across the continent.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">NAMYO Volunteer Support Fund (NVSF)</h4>
                    <p className="text-muted-foreground">
                      Dedicated fund established by NAMYO to provide grants and financial support for verified NVN Africa projects. 
                      Supports initiatives aligned with our three core pillars.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Government Partnerships</h4>
                    <p className="text-muted-foreground">
                      Collaborative funding arrangements with African governments supporting youth development, civic engagement, 
                      and community service programs.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Corporate Social Responsibility (CSR) Partners</h4>
                    <p className="text-muted-foreground">
                      Strategic partnerships with private sector companies committed to sustainable development and social impact 
                      through their CSR initiatives.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">International Grants</h4>
                    <p className="text-muted-foreground">
                      Access to funding from international development organizations, foundations, and donor agencies supporting 
                      youth empowerment and community development in Africa.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Crowdfunding Platform</h4>
                    <p className="text-muted-foreground">
                      Integrated digital crowdfunding capabilities allowing volunteers to raise funds from supporters worldwide 
                      for their community projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="mb-8 border-2 hover:shadow-medium transition-all">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Technical Support
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  NVN Africa benefits from partnerships with leading volunteer organizations providing technical expertise and capacity building.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">UN Volunteers (UNV)</h4>
                    <p className="text-muted-foreground mb-3">
                      Partnership providing technical guidance on volunteer management systems, impact measurement frameworks, 
                      and international best practices in volunteerism.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.unv.org" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">CorpsAfrica</h4>
                    <p className="text-muted-foreground mb-3">
                      Collaboration on grassroots community development methodologies, volunteer training programs, 
                      and sustainable project implementation strategies.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.corpsafrica.org" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Additional Partners</h4>
                    <p className="text-muted-foreground">
                      Ongoing partnerships with regional and international organizations providing specialized technical support 
                      in areas such as project management, digital platforms, monitoring and evaluation, and volunteer coordination.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fintech Integration */}
            <Card className="mb-8 border-2 hover:shadow-medium transition-all">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Fintech Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Secure and reliable payment processing for crowdfunding and project financing through trusted African fintech leaders.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Flutterwave</h4>
                    <p className="text-muted-foreground mb-3">
                      Integrated payment gateway providing secure transaction processing, multi-currency support, 
                      and comprehensive payment solutions for volunteer crowdfunding campaigns.
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://www.flutterwave.com" target="_blank" rel="noopener noreferrer">
                        Visit Flutterwave
                      </a>
                    </Button>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Paystack</h4>
                    <p className="text-muted-foreground mb-3">
                      Alternative payment integration offering seamless online payment collection, subscription management, 
                      and real-time transaction tracking for NVN projects.
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://www.paystack.com" target="_blank" rel="noopener noreferrer">
                        Visit Paystack
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="mt-6 bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h4 className="font-bold mb-2 text-accent">Security & Transparency</h4>
                  <p className="text-muted-foreground">
                    All financial transactions are processed through secure, PCI-compliant payment gateways with full transparency. 
                    Volunteers and donors can track fund utilization through the NVN digital platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources CTA */}
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Need More Resources?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  Our team is here to help you access the funding, technical support, and tools you need to make your 
                  volunteer projects successful. Reach out to learn more about available resources and how to apply.
                </p>
                <Button variant="secondary" size="lg">
                  Contact Resource Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
