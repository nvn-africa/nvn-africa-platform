import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Leaf, Smartphone } from "lucide-react";

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-foreground/90">
              Volunteer-driven initiatives coordinated digitally through the NVN app
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
                Our projects are volunteer-driven and coordinated digitally through the NVN app, focusing on three 
                interconnected <strong>Core Pillars</strong>:
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-8">
              {/* Community Development */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-accent-foreground" />
                    </div>
                    1. Community Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Empowering local communities through grassroots volunteer initiatives that address pressing social and economic challenges.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Education Support:</strong> Tutoring programs, school infrastructure improvements, and digital literacy training
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Health & Wellness:</strong> Community health campaigns, sanitation drives, and awareness programs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Economic Empowerment:</strong> Skills training, entrepreneurship support, and youth employment initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Infrastructure Development:</strong> Community clean-ups, public space improvements, and local facility renovations
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Responsible Citizenship */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    2. Responsible Citizenship
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Fostering civic engagement, democratic participation, and leadership development among African youth.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Voter Education:</strong> Registration drives, civic education campaigns, and electoral awareness programs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Peace Building:</strong> Conflict resolution workshops, interfaith dialogues, and community unity initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Youth Leadership:</strong> Leadership training, mentorship programs, and governance capacity building
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Human Rights Advocacy:</strong> Rights awareness campaigns, legal aid support, and social justice initiatives
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Climate Advocacy */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-accent-foreground" />
                    </div>
                    3. Climate Advocacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Leading environmental conservation and sustainability initiatives aligned with Africa's climate action goals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Tree Planting:</strong> Large-scale reforestation campaigns and urban greening projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Waste Management:</strong> Recycling programs, plastic reduction campaigns, and waste collection drives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Clean Energy:</strong> Solar energy projects, renewable energy awareness, and energy efficiency initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Climate Education:</strong> Environmental awareness programs, climate action workshops, and sustainability training
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Digital Coordination */}
            <Card className="mt-12 bg-gradient-hero text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Digital Project Management</h3>
                </div>
                <p className="text-primary-foreground/90">
                  All NVN projects are coordinated through our digital platform, providing volunteers with:
                </p>
                <ul className="mt-4 space-y-2 text-primary-foreground/90">
                  <li>• Real-time project tracking and updates</li>
                  <li>• Verifiable volunteer hours and impact metrics</li>
                  <li>• Crowdfunding capabilities for project resources</li>
                  <li>• In-app communication and collaboration tools</li>
                  <li>• Digital certificates and recognition for completed projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
