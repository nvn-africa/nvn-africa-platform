import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, DollarSign, Award, Briefcase, TrendingUp } from "lucide-react";

const Opportunities = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Opportunities</h1>
            <p className="text-xl text-primary-foreground/90">
              Empowering Volunteers Beyond Service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground">
                At NVN-Africa, volunteerism is not just about serving — it's about <strong>growth</strong>, 
                <strong> empowerment</strong>, and <strong>opportunity</strong>.
              </p>
            </div>

            {/* Opportunities */}
            <div className="space-y-8">
              {/* Capacity Building */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-accent-foreground" />
                    </div>
                    1. Capacity Building
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Develop valuable skills and knowledge through comprehensive training programs and educational resources.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Online Courses:</strong> Access courses on leadership, civic engagement, and project management
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Skills Development:</strong> Participate in workshops through national chapters and partners
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Certifications:</strong> Earn recognized certifications via the NVN Learning Hub and partner institutions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Mentorship Programs:</strong> Connect with experienced leaders for guidance and career development
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Project Funding */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-accent-foreground" />
                    </div>
                    2. Project Funding
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Access financial resources to bring your community development ideas to life.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>NVN Micro-Grants:</strong> Small-scale funding for community initiatives and pilot projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Crowdfunding Support:</strong> Secure funding via Flutterwave or Paystack integrated platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Corporate Grants:</strong> Access CSR and development partner funding opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Project Accelerator:</strong> Specialized program for scalable, high-impact volunteer projects
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Scholarships */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent-foreground" />
                    </div>
                    3. Scholarships & Educational Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Receive recognition and financial support for academic excellence and outstanding volunteer service.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Merit Awards:</strong> Recognition and rewards for top-performing volunteers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Academic Scholarships:</strong> Educational funding through NAMYO and partner organizations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Annual Recognition:</strong> Awards and honors at the Africa Volunteer Congress
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Employment */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-accent-foreground" />
                    </div>
                    4. Employment & Entrepreneurship Linkages
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Bridge the gap between volunteerism and career advancement through strategic partnerships and programs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Internship Placements:</strong> Exclusive opportunities for verified volunteers with partner organizations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Entrepreneurship Boot Camps:</strong> Innovation labs and business development training
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Professional Networking:</strong> Connect with public and private sector mentors and employers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Verified Profiles:</strong> Digital volunteer credentials that enhance employability and professional credibility
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Recognition Ladder */}
            <Card className="mt-12 bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  Volunteer Recognition Ladder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-6">
                  The NVN uses a gamified system to reward active service and track impact with verifiable credentials.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">Mobilizer</h4>
                    <p className="text-sm text-primary-foreground/80">Entry level volunteer</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">Chief Mobilizer</h4>
                    <p className="text-sm text-primary-foreground/80">Active contributor</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">General Mobilizer</h4>
                    <p className="text-sm text-primary-foreground/80">Experienced volunteer</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">Community Leader</h4>
                    <p className="text-sm text-primary-foreground/80">Top-tier volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;
